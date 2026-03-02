import { AGENT_PROFILE } from '../data/agentProfile'
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

/**
 * Simple local fallback when no API key: match keywords and return short answers.
 * Uses calculated age, years of experience, and salary.
 */
function getLocalAnswer(question: string): string | null {
  const q = question.toLowerCase().trim()
  const years = getYearsOfExperience()
  const age = getAge()
  const monthly = getPreferredSalaryMonthly()
  const annual = getPreferredSalaryAnnual()

  if (q.includes('who') && (q.includes('you') || q.includes('philasande') || q.includes('phila'))) {
    return `I'm Philasande Bhani, a Software Developer and Java Full Stack Developer with ${years}+ years of experience, based in Gauteng, South Africa.`
  }
  if (q.includes('experience') || q.includes('years') || q.includes('work')) {
    return `Philasande has ${years}+ years of experience (career started 2021). He's currently a Java Full-Stack Developer at Reverside, and previously trained at Geeks4Learning and MLab (CodeTribe).`
  }
  if (q.includes('age') || (q.includes('how') && q.includes('old'))) {
    return `Philasande was born on 1 July 1998 and is ${age} years old.`
  }
  if (q.includes('skill') || q.includes('tech') || q.includes('stack')) {
    return "His main tech stack (from his portfolio projects) includes Java, Spring Boot, Angular, React, Vue.js, React Native, Android, MySQL, SQLite, and tools like Git. He works across frontend, backend, and mobile."
  }
  if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('reach')) {
    return "You can reach Philasande at pbhanina@gmail.com or 078 214 1216. LinkedIn: linkedin.com/in/mr-p-bhani/"
  }
  if (q.includes('salary') || q.includes('pay') || q.includes('rate')) {
    return `Preferred salary (market-related, based on ${years} years of experience): ${formatCurrency(monthly)}+ monthly or ${formatCurrency(annual)}+ annually.`
  }
  if (q.includes('available') || q.includes('notice') || q.includes('start')) {
    return "He's available immediately, with a 1-month notice period to his current employer (or 1 week in some cases). Prefers permanent roles, remote or anywhere in South Africa."
  }
  if (q.includes('education') || q.includes('qualification') || q.includes('degree') || q.includes('matric')) {
    return "Philasande has a National Diploma in Information Technology (Walter Sisulu University), System Development NQF5 (Learnership), and Matric from Ntabezulu Senior Secondary School. He also received the Under The Rock Star Award in 2025."
  }
  if (q.includes('project') || q.includes('mechconnect') || q.includes('built')) {
    return "Notable projects include MechConnect (Vue 3, Spring Boot, React Native – mechanic & car wash marketplace), High School Application System, Hotel Management System, Covid-19 App, Weather App, Job Finder, and a POS application."
  }
  if (q.includes('hello') || q.includes('hi') || q.includes('hey')) {
    return "Hi! I'm here to answer questions about Philasande Bhani—his experience, skills, projects, or how to contact him. What would you like to know?"
  }
  return null
}

export async function askAgent(userMessage: string): Promise<string> {
  const key = getApiKey()
  const local = getLocalAnswer(userMessage)
  if (local) return local

  if (!key) {
    return "I can only answer simple questions right now. For full answers, add your OpenAI API key in a .env file as VITE_OPENAI_API_KEY=sk-... (see README). You can still ask: who is Philasande, experience, skills, contact, salary, availability, education, or projects."
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
