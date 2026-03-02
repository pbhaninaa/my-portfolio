/**
 * Profile constants for auto-calculated values.
 * DOB: 1 July 1998 — age increments by 1 on this date each year.
 * Career start: 2021 — years of experience increments by 1 each year.
 * Salary: market-related formula based on years of experience.
 */

/** Date of birth (1 July 1998) */
export const PROFILE_DOB = new Date(1998, 6, 1) // month is 0-indexed

/** First year of professional work (2021) */
export const CAREER_START_YEAR = 2021

/** Base monthly salary (R) at 0 years experience */
export const SALARY_BASE_MONTHLY = 25_000

/** Annual increment (R) per year of experience — market-related */
export const SALARY_INCREMENT_PER_YEAR = 2_500

/**
 * Skills that appear in the portfolio projects (project tags).
 * Only these are shown in the Skills section.
 * Normalized to match skill group item names (e.g. AngularJS → Angular, ReactJS → React).
 */
export const SKILLS_IN_PROJECTS = new Set([
  'Java',
  'Spring Boot',
  'Angular',
  'AngularJS',
  'React',
  'ReactJS',
  'Vue 3',
  'Vue.js',
  'React Native',
  'Android',
  'MySQL',
  'VB.Net',
  'Microsoft Access',
  'SQLite',
  'JavaScript',
  'HTML5',
  'CSS',
  'Git',
  'GitHub',
  'JWT',
  'Stripe',
])
