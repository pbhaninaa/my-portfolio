<template>
  <section class="qualifications" id="qualifications" ref="sectionRef">
    <h2 class="section-title" :class="{ visible: isVisible }">Education</h2>
    <div class="qual-grid">
      <div
        v-for="(q, i) in qualifications"
        :key="q.name"
        class="qual-card"
        :class="{ visible: isVisible }"
        :style="{ transitionDelay: `${i * 0.08}s` }"
      >
        <h3 class="qual-name">{{ q.name }}</h3>
        <p class="qual-institution">{{ q.institution }}</p>
        <p class="qual-year">{{ q.year }}</p>
      </div>
    </div>
    <div v-if="profile.awards?.length" class="awards" :class="{ visible: isVisible }">
      <h3 class="awards-title">Awards & Recognition</h3>
      <ul>
        <li v-for="(award, i) in profile.awards" :key="i">{{ award }}</li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'
import { portfolioProfile } from '../data'

const profile = portfolioProfile
const sectionRef = ref<HTMLElement | null>(null)
const isVisible = useScrollReveal(sectionRef)

const qualifications = profile.education
</script>

<style scoped>
.qualifications {
  padding-top: var(--space-section);
  padding-bottom: var(--space-section);
}
.section-title {
  text-align: center;
  margin-bottom: 2rem;
}
.qual-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.25rem;
  max-width: 900px;
  margin: 0 auto 2rem;
}
.qual-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 1.25rem 1.5rem;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1), transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}
.qual-card.visible {
  opacity: 1;
  transform: translateY(0);
}
.qual-card:hover {
  border-color: var(--color-accent-dim);
}
.qual-name {
  font-size: 1rem;
  color: var(--color-text-strong);
  margin: 0 0 0.4rem;
  font-weight: 600;
}
.qual-institution {
  font-size: 0.9rem;
  color: var(--color-accent);
  margin: 0 0 0.25rem;
}
.qual-year {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  margin: 0;
}
.awards {
  max-width: 560px;
  margin: 0 auto;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 1.25rem 1.5rem;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1), transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}
.awards.visible {
  opacity: 1;
  transform: translateY(0);
}
.awards-title {
  font-size: 1rem;
  color: var(--color-accent);
  margin: 0 0 0.5rem;
}
.awards ul {
  margin: 0;
  padding-left: 1.2rem;
  color: var(--color-text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
}
.section-title {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}
.section-title.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
