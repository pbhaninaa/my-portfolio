<template>
  <section class="experience" id="experience" ref="sectionRef">
    <h2 class="section-title" :class="{ visible: isVisible }">Work <span class="accent">History</span></h2>
    <div class="timeline">
      <article
        v-for="(job, i) in jobs"
        :key="job.company"
        class="timeline-item"
        :class="{ visible: isVisible }"
        :style="{ transitionDelay: `${i * 0.1}s` }"
      >
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <div class="job-header">
            <h3>{{ job.role }}</h3>
            <span class="company">{{ job.company }}</span>
          </div>
          <time class="period" v-if="job.period">{{ job.period }}</time>
          <ul class="bullets" v-if="job.bullets?.length">
            <li v-for="b in job.bullets" :key="b">{{ b }}</li>
          </ul>
          <p class="description" v-else-if="job.description">{{ job.description }}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = useScrollReveal(sectionRef)

const jobs = [
  {
    role: 'Java Full-Stack Developer',
    company: 'Reverside',
    period: 'Current Employer',
    bullets: [
      'Designing and implementing Java-based applications.',
      'Analyzing user requirements to inform application design.',
      'Defining application objectives and functionality.',
      'Aligning application design with business goals.',
      'Developing and testing software.',
      'Supporting clients with existing systems.',
    ],
  },
  {
    role: 'Java Full-Stack Developer Trainee',
    company: 'Geeks4Learning',
    period: '',
    description:
      'Completed a 12-month rigorous blended-learning program at Geeks4Learning, covering industry-relevant theoretical and practical training, using internationally renowned proficiency assessment tools. Covered: Soft Skills / Workplace Skills (verbal and non-verbal communication, work ethics, HR processes, teamwork); MICT Seta accredited training material (NQF 5 Systems Development); Geeks4Learning industry-relevant courses aligned with Microsoft (Advanced Programming Concepts, Front-End Development, etc.); Project-Simulation based on a problem statement, applying theoretical understanding practically to simulate a real-life project using relevant tools and technologies.',
  },
  {
    role: 'React Front-End Developer Trainee',
    company: 'MLab (CodeTribe)',
    period: '',
    description:
      'Completed a 12-month training program at MLab (CodeTribe), covering industry-relevant theoretical and practical training, using internationally renowned proficiency assessment tools. Covered: Develop project concepts and maintain optimal workflow; complete detailed programming and development tasks for public and internal websites; carry out quality assurance tests to discover errors and optimize usability.',
  },
]
</script>

<style scoped>
.experience {
  padding-top: var(--space-section);
  padding-bottom: var(--space-section);
}
.section-title {
  text-align: center;
  margin-bottom: 2.5rem;
}
.timeline {
  position: relative;
  max-width: 640px;
  margin: 0 auto;
}
.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--color-border);
  border-radius: 2px;
}
.timeline-item {
  position: relative;
  padding-left: 2rem;
  padding-bottom: 2rem;
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1), transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}
.timeline-item.visible {
  opacity: 1;
  transform: translateY(0);
}
.timeline-item:last-child {
  padding-bottom: 0;
}
.timeline-marker {
  position: absolute;
  left: -6px;
  top: 0.4rem;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--color-accent);
  box-shadow: 0 0 0 4px var(--color-bg);
}
.timeline-content {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 1.25rem 1.5rem;
}
.job-header {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.5rem;
  margin-bottom: 0.35rem;
}
.job-header h3 {
  font-size: 1.1rem;
  margin: 0;
  color: var(--color-text-strong);
}
.company {
  color: var(--color-accent);
  font-size: 0.9rem;
  font-weight: 500;
}
.period {
  display: block;
  font-size: 0.85rem;
  color: var(--color-text-muted);
  margin-bottom: 0.5rem;
}
.bullets {
  margin: 0;
  padding-left: 1.15rem;
  font-size: 0.9rem;
  color: var(--color-text-muted);
  line-height: 1.65;
}
.bullets li {
  margin-bottom: 0.35rem;
}
.description {
  margin: 0;
  font-size: 0.9rem;
  color: var(--color-text-muted);
  line-height: 1.65;
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
