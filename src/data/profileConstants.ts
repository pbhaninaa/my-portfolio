/**
 * Profile-derived constants for the portfolio template.
 * Values are read from the active portfolio profile (see index.ts).
 */
import { portfolioProfile } from './index'

/** Date of birth from profile */
export const PROFILE_DOB = portfolioProfile.personal.dob

/** First year of professional work from profile */
export const CAREER_START_YEAR = portfolioProfile.personal.careerStartYear

/** Base monthly salary (R) at 0 years experience */
export const SALARY_BASE_MONTHLY = portfolioProfile.salary.baseMonthly

/** Annual increment (R) per year of experience */
export const SALARY_INCREMENT_PER_YEAR = portfolioProfile.salary.incrementPerYear

/** Skills that appear in portfolio projects (for Skills section filtering) */
export const SKILLS_IN_PROJECTS = new Set(portfolioProfile.skillsInProjects)
