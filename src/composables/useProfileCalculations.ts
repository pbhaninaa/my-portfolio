import { computed } from 'vue'
import {
  PROFILE_DOB,
  CAREER_START_YEAR,
  SALARY_BASE_MONTHLY,
  SALARY_INCREMENT_PER_YEAR,
} from '../data/profileConstants'

/**
 * Age in full years. Increments by 1 on 1 July each year.
 */
export function getAge(): number {
  const now = new Date()
  const birth = PROFILE_DOB
  let age = now.getFullYear() - birth.getFullYear()
  const hasReachedBirthday =
    now.getMonth() > birth.getMonth() ||
    (now.getMonth() === birth.getMonth() && now.getDate() >= birth.getDate())
  if (!hasReachedBirthday) age--
  return Math.max(0, age)
}

/**
 * Years of professional experience. Starts from CAREER_START_YEAR (2021), increments by 1 each year.
 */
export function getYearsOfExperience(): number {
  const year = new Date().getFullYear()
  return Math.max(0, year - CAREER_START_YEAR)
}

/**
 * Preferred monthly salary (market-related): base + increment per year of experience.
 */
export function getPreferredSalaryMonthly(): number {
  const years = getYearsOfExperience()
  return SALARY_BASE_MONTHLY + years * SALARY_INCREMENT_PER_YEAR
}

/**
 * Preferred annual salary (monthly × 12).
 */
export function getPreferredSalaryAnnual(): number {
  return getPreferredSalaryMonthly() * 12
}

function formatCurrency(value: number): string {
  return 'R' + value.toLocaleString('en-ZA', { maximumFractionDigits: 0 })
}

export function useProfileCalculations() {
  const age = computed(() => getAge())
  const yearsOfExperience = computed(() => getYearsOfExperience())
  const preferredSalaryMonthly = computed(() => getPreferredSalaryMonthly())
  const preferredSalaryAnnual = computed(() => getPreferredSalaryAnnual())
  const preferredSalaryMonthlyFormatted = computed(() =>
    formatCurrency(preferredSalaryMonthly.value)
  )
  const preferredSalaryAnnualFormatted = computed(() =>
    formatCurrency(preferredSalaryAnnual.value)
  )

  return {
    age,
    yearsOfExperience,
    preferredSalaryMonthly,
    preferredSalaryAnnual,
    preferredSalaryMonthlyFormatted,
    preferredSalaryAnnualFormatted,
  }
}
