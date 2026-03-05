/**
 * Type definitions for the portfolio template.
 * Provide a single profile object to drive the entire portfolio.
 */

export interface PersonalInfo {
  fullName: string
  tagline: string
  dob: Date
  careerStartYear: number
  location: string
  phone: string
  email: string
  linkedinUrl: string
  linkedinDisplay?: string
}

export interface SalaryConfig {
  baseMonthly: number
  incrementPerYear: number
}

export interface TechStackGroup {
  label: string
  items: string[]
}

export interface WorkPreferences {
  remote: string
  hybrid: string
  local: string
  workAuthAfrica: string
  workAuthGlobal: string
}

export interface IdealJob {
  title: string
  description: string
  noticePeriod: string
}

export interface AboutContent {
  leadParagraph: string
  paragraphs: string[]
  techStack: TechStackGroup[]
  preferences: WorkPreferences
  idealJob: IdealJob
}

export interface ExperienceJob {
  role: string
  company: string
  period?: string
  description?: string
  bullets?: string[]
}

export interface EducationItem {
  name: string
  institution: string
  year: string
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface ProjectItem {
  name: string
  category: 'Web App' | 'Mobile App' | 'Desktop App'
  image: string
  tech: string
  description: string
  tags: string[]
  link: string
}

export interface ContactInfo {
  email: string
  phone: string
  linkedinUrl: string
  linkedinDisplay: string
}

export interface Reference {
  name: string
  email: string
  phone: string
}

export interface PortfolioProfile {
  personal: PersonalInfo
  salary: SalaryConfig
  heroIntro: string
  about: AboutContent
  experience: ExperienceJob[]
  education: EducationItem[]
  awards?: string[]
  skillGroups: SkillGroup[]
  /** Skill names that appear in projects (only these are shown in Skills section) */
  skillsInProjects: string[]
  projects: ProjectItem[]
  contact: ContactInfo
  references?: Reference[]
  /** Optional: custom agent system prompt. If omitted, one is built from profile. */
  agentPrompt?: string
}
