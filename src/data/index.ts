/**
 * Portfolio template data.
 *
 * To use for another user: provide a profile object that matches the PortfolioProfile type.
 * Option 1: Edit defaultProfile.ts with the new user's data.
 * Option 2: Create your own profile file and change the import below to use it.
 *
 * Example:
 *   import { myProfile } from './myProfile'
 *   export const portfolioProfile = myProfile
 */
export type { PortfolioProfile, PersonalInfo, ProjectItem, ExperienceJob, EducationItem, SkillGroup } from './types'
export { defaultProfile } from './defaultProfile'

/** Active profile: change this import to use a different user's data */
import { defaultProfile } from './defaultProfile'
export const portfolioProfile = defaultProfile
