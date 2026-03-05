/**
 * Agent system prompt built from portfolio profile.
 * Used as system context for the AI and for local fallback answers.
 */
import { portfolioProfile } from './index'
import { getAge, getYearsOfExperience, getPreferredSalaryMonthly, getPreferredSalaryAnnual } from '../composables/useProfileCalculations'

function formatCurrency(value: number): string {
  return 'R' + value.toLocaleString('en-ZA', { maximumFractionDigits: 0 })
}

function buildAgentPrompt(): string {
  if (portfolioProfile.agentPrompt) return portfolioProfile.agentPrompt.trim()

  const p = portfolioProfile.personal
  const age = getAge()
  const years = getYearsOfExperience()
  const monthly = getPreferredSalaryMonthly()
  const annual = getPreferredSalaryAnnual()

  const dobStr = p.dob.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

  let text = `
You are a helpful assistant representing ${p.fullName}. Answer questions about them based only on the following information. Be concise and friendly. If asked something not covered below, say you don't have that information and suggest visiting the portfolio or contacting them.

## ${p.fullName} – Summary
- ${p.tagline}
- DOB: ${dobStr} (age ${age})
- Professional experience: from ${portfolioProfile.personal.careerStartYear}, ${years}+ years
- Preferred salary: market-related, ${formatCurrency(portfolioProfile.salary.baseMonthly)}/month + ${formatCurrency(portfolioProfile.salary.incrementPerYear)} per year of experience (e.g. ${years} years ≈ ${formatCurrency(monthly)}/month, ${formatCurrency(annual)}/year)
- Location: ${p.location}
- Phone: ${p.phone}
- Email: ${p.email}
- LinkedIn: ${p.linkedinUrl}

## Position & availability
- Preferred: Remote, Hybrid or Local as per portfolio
- Work authorisation: ${portfolioProfile.about.preferences.workAuthAfrica} (Africa); ${portfolioProfile.about.preferences.workAuthGlobal} (globally)

## Experience
${portfolioProfile.experience.map((j) => `- ${j.company} – ${j.role}${j.period ? ` (${j.period})` : ''}${j.description ? ': ' + j.description.slice(0, 120) + '...' : ''}`).join('\n')}

## Education
${portfolioProfile.education.map((e) => `- ${e.name}, ${e.institution} (${e.year})`).join('\n')}
${portfolioProfile.awards?.length ? '\nAwards: ' + portfolioProfile.awards.join('; ') : ''}

## Skills (from projects)
${[...new Set(portfolioProfile.projects.flatMap((pr) => pr.tags))].join(', ')}

## Projects
${portfolioProfile.projects.map((pr) => `- ${pr.name}: ${pr.description} (${pr.tech})`).join('\n')}

## Preferred salary
${formatCurrency(monthly)}+ monthly or ${formatCurrency(annual)}+ annually.
`.trim()

  return text
}

export const AGENT_PROFILE = buildAgentPrompt()
