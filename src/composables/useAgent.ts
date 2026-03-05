import { AGENT_PROFILE } from '../data/agentProfile'
import { portfolioProfile } from '../data'
import {
  getAge,
  getYearsOfExperience,
  getPreferredSalaryMonthly,
  getPreferredSalaryAnnual,
} from './useProfileCalculations'

const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions'

function getApiKey(): string {
  return (import.meta.env.VITE_OPENAI_API_KEY as string) || ''
}

function formatCurrency(value: number): string {
  return 'R' + value.toLocaleString('en-ZA', { maximumFractionDigits: 0 })
}

/** First name for casual matching (e.g. "Philasande" -> "Philasande") */
function getFirstName(): string {
  return portfolioProfile.personal.fullName.split(' ')[0] || portfolioProfile.personal.fullName
}

/**
 * Simple local fallback when no API key: match keywords and return short answers.
 * Uses the active portfolio profile and calculated values.
 */
function getLocalAnswer(question: string): string | null {
  const q = question.toLowerCase().trim()
  const p = portfolioProfile.personal
  const c = portfolioProfile.contact
  const firstName = getFirstName()
  const years = getYearsOfExperience()
  const age = getAge()
  const monthly = getPreferredSalaryMonthly()
  const annual = getPreferredSalaryAnnual()

  if (q.includes('who') && (q.includes('you') || q.includes(firstName.toLowerCase()) || q.split(/\s+/).some((w) => p.fullName.toLowerCase().includes(w)))) {
    return `I'm ${p.fullName}, ${p.tagline} with ${years}+ years of experience, based in ${p.location}.`
  }
  if (q.includes('experience') || q.includes('years') || q.includes('work')) {
    const roles = portfolioProfile.experience.slice(0, 3).map((j) => `${j.company} (${j.role})`).join(', ')
    return `${p.fullName} has ${years}+ years of experience (career started ${p.careerStartYear}). Experience includes: ${roles}.`
  }
  if (q.includes('age') || (q.includes('how') && q.includes('old'))) {
    const dobStr = p.dob.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
    return `${p.fullName} was born on ${dobStr} and is ${age} years old.`
  }
  if (q.includes('skill') || q.includes('tech') || q.includes('stack')) {
    const skills = portfolioProfile.skillsInProjects.slice(0, 12).join(', ')
    return `Main tech stack (from portfolio projects) includes ${skills}.`
  }
  if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('reach')) {
    return `You can reach ${p.fullName} at ${c.email} or ${c.phone}. LinkedIn: ${c.linkedinDisplay || c.linkedinUrl}`
  }
  if (q.includes('salary') || q.includes('pay') || q.includes('rate')) {
    return `Preferred salary (market-related, based on ${years} years of experience): ${formatCurrency(monthly)}+ monthly or ${formatCurrency(annual)}+ annually.`
  }
  if (q.includes('available') || q.includes('notice') || q.includes('start')) {
    return `${portfolioProfile.about.idealJob.noticePeriod} Prefers permanent roles, remote or as stated in the portfolio.`
  }
  if (q.includes('education') || q.includes('qualification') || q.includes('degree') || q.includes('matric')) {
    const ed = portfolioProfile.education.map((e) => `${e.name} (${e.institution})`).join('; ')
    const awards = portfolioProfile.awards?.length ? ' Awards: ' + portfolioProfile.awards.join('; ') : ''
    return `${p.fullName} has ${ed}.${awards}`
  }
  if (q.includes('project') || q.includes('built')) {
    const names = portfolioProfile.projects.map((pr) => pr.name).join(', ')
    return `Notable projects include: ${names}.`
  }
  if (q.includes('hello') || q.includes('hi') || q.includes('hey')) {
    return `Hi! I'm here to answer questions about ${p.fullName}—experience, skills, projects, or how to contact them. What would you like to know?`
  }
  return null
}

export async function askAgent(userMessage: string): Promise<string> {
  const key = getApiKey()
  const local = getLocalAnswer(userMessage)
  if (local) return local

  const firstName = getFirstName()
  if (!key) {
    return `I can only answer simple questions right now. For full answers, add your OpenAI API key in a .env file as VITE_OPENAI_API_KEY=sk-... (see README). You can still ask: who is ${firstName}, experience, skills, contact, salary, availability, education, or projects.`
  }

  try {
    const res = await fetch(OPENAI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${key}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: AGENT_PROFILE },
          { role: 'user', content: userMessage },
        ],
        max_tokens: 400,
        temperature: 0.5,
      }),
    })
    if (!res.ok) {
      await res.json().catch(() => ({}))
      return `Sorry, the assistant is temporarily unavailable (${res.status}). Try a short question or check your API key.`
    }
    const data = (await res.json()) as { choices?: Array<{ message?: { content?: string } }> }
    const text = data.choices?.[0]?.message?.content?.trim()
    return text || "I couldn't generate a reply. Please try rephrasing your question."
  } catch (e) {
    console.error('Agent request failed', e)
    return "Sorry, I couldn't reach the assistant. Check your connection and try again."
  }
}
