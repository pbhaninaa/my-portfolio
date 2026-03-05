<template>
  <section class="about" id="about" ref="sectionRef">
    <h2 class="section-title" :class="{ visible: isVisible }">About <span class="accent">Me</span></h2>
    <div class="about-inner">
      <p class="lead" :class="{ visible: isVisible }" v-html="leadHtml"></p>
      <p
        v-for="(para, i) in profile.about.paragraphs"
        :key="i"
        class="about-p"
        :class="{ visible: isVisible }"
        v-html="replacePlaceholders(para)"
      ></p>

      <div class="tech-stack" :class="{ visible: isVisible }">
        <h3>Technical expertise</h3>
        <ul>
          <li v-for="group in profile.about.techStack" :key="group.label">
            <strong>{{ group.label }}:</strong> {{ group.items.join(', ') }}
          </li>
        </ul>
      </div>

      <div class="preferences-grid">
        <div class="pref-card" :class="{ visible: isVisible }">
          <h3>Location & remote preferences</h3>
          <p><strong>Remote</strong> — {{ profile.about.preferences.remote }}</p>
          <p><strong>Hybrid</strong> — {{ profile.about.preferences.hybrid }}</p>
          <p><strong>Local</strong> — {{ profile.about.preferences.local }}</p>
        </div>
        <div class="pref-card" :class="{ visible: isVisible }">
          <h3>Work authorisation</h3>
          <p><strong>Africa:</strong> {{ profile.about.preferences.workAuthAfrica }}</p>
          <p><strong>Around the globe:</strong> {{ profile.about.preferences.workAuthGlobal }}</p>
        </div>
      </div>

      <div class="ideal-job" :class="{ visible: isVisible }">
        <h3>Ideal next job</h3>
        <p v-html="idealJobHtml"></p>
        <p><em>{{ profile.about.idealJob.noticePeriod }}</em></p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'
import { useProfileCalculations } from '../composables/useProfileCalculations'
import { portfolioProfile } from '../data'

const profile = portfolioProfile
const sectionRef = ref<HTMLElement | null>(null)
const isVisible = useScrollReveal(sectionRef)
const { age, yearsOfExperience } = useProfileCalculations()

function replacePlaceholders(text: string): string {
  return text
    .replace(/\{fullName\}/g, profile.personal.fullName)
    .replace(/\{age\}/g, String(age.value))
    .replace(/\{yearsOfExperience\}/g, String(yearsOfExperience.value))
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
}

const leadHtml = computed(() => replacePlaceholders(profile.about.leadParagraph))
const idealJobHtml = computed(() =>
  profile.about.idealJob.description.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
)
</script>

<style scoped>
.about {
  padding-top: var(--space-section);
  padding-bottom: var(--space-section);
}
.section-title {
  text-align: center;
  margin-bottom: 2rem;
}
.about-inner {
  max-width: 680px;
  margin: 0 auto;
}
.lead {
  font-size: 1.2rem;
  color: var(--color-text);
  margin-bottom: 1rem;
  line-height: 1.6;
}
.about-p {
  color: var(--color-text-muted);
  margin: 0 0 1rem;
  line-height: 1.7;
}
.about-p strong {
  color: var(--color-text);
}
.tech-stack {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 1.25rem 1.5rem;
  margin-bottom: 1.5rem;
}
.tech-stack h3,
.pref-card h3,
.ideal-job h3 {
  font-size: 1rem;
  color: var(--color-accent);
  margin: 0 0 0.75rem;
  font-weight: 600;
}
.tech-stack ul {
  margin: 0;
  padding-left: 1.25rem;
  color: var(--color-text-muted);
  font-size: 0.95rem;
  line-height: 1.8;
}
.tech-stack li strong {
  color: var(--color-text);
}
.preferences-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.25rem;
  margin-bottom: 1.5rem;
}
.pref-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 1.25rem 1.5rem;
}
.pref-card p {
  margin: 0 0 0.5rem;
  font-size: 0.95rem;
  color: var(--color-text-muted);
  line-height: 1.6;
}
.pref-card p:last-child {
  margin-bottom: 0;
}
.pref-card strong {
  color: var(--color-text);
}
.ideal-job {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 1.25rem 1.5rem;
}
.ideal-job p {
  margin: 0 0 0.75rem;
  font-size: 0.95rem;
  color: var(--color-text-muted);
  line-height: 1.7;
}
.ideal-job p:last-child {
  margin-bottom: 0;
}
.ideal-job strong {
  color: var(--color-text);
}
.ideal-job em {
  color: var(--color-accent);
}
.section-title,
.lead,
.about-p,
.tech-stack,
.pref-card,
.ideal-job {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}
.section-title.visible,
.lead.visible,
.about-p.visible,
.tech-stack.visible,
.pref-card.visible,
.ideal-job.visible {
  opacity: 1;
  transform: translateY(0);
}
.about-p.visible { transition-delay: 0.05s; }
.tech-stack.visible { transition-delay: 0.1s; }
.pref-card.visible { transition-delay: 0.08s; }
.ideal-job.visible { transition-delay: 0.1s; }
</style>
