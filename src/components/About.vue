<template>
  <section class="about" id="about" ref="sectionRef">
    <h2 class="section-title" :class="{ visible: isVisible }">About <span class="accent">Me</span></h2>
    <div class="about-inner">
      <p class="lead" :class="{ visible: isVisible }">
        I am <strong>Philasande Bhani</strong>, a young graduate of {{ age }} years. I hold a National Diploma in Information Technology
        and am determined to become one of the best in the field.
      </p>
      <p class="about-p" :class="{ visible: isVisible }">
        Over the past {{ yearsOfExperience }} years, I worked as a Developer at a software development firm, where I gained valuable insights
        into how successful companies operate. During this time, I honed my skills in developing and maintaining software
        programs, as well as making improvements to enhance functionality.
      </p>

      <div class="tech-stack" :class="{ visible: isVisible }">
        <h3>Technical expertise</h3>
        <ul>
          <li><strong>Frontend:</strong> JavaScript, Angular 4+ with TypeScript, React, React Native, HTML5, CSS3, Vue.js</li>
          <li><strong>Backend:</strong> Java, Spring, Hibernate, Spring Boot, Node.js, Python 3</li>
          <li><strong>Databases:</strong> MySQL, MongoDB</li>
          <li><strong>Other:</strong> Software Development Methodologies, Software Development Tools, Containerization, DevOps foundations</li>
        </ul>
      </div>

      <p class="about-p" :class="{ visible: isVisible }">
        I possess strong problem-solving skills and the ability to efficiently work with both technical and abstract concepts.
        My communication skills are excellent, allowing me to interact effectively with clients to provide outstanding customer service.
        After discussions with clients, I can identify ways to improve performance, speed, and usability and relay these insights
        to programmers for implementation.
      </p>
      <p class="about-p" :class="{ visible: isVisible }">
        I have a keen ability to troubleshoot technical issues, identify their root causes, and implement solutions. I can explain
        complex technical concepts to both professionals and non-technical users. Attention to detail is one of my strengths,
        and I can remain focused on tasks for long periods to get the job done. I actively stay updated on the latest industry
        changes to continue growing professionally.
      </p>

      <div class="preferences-grid">
        <div class="pref-card" :class="{ visible: isVisible }">
          <h3>Location & remote preferences</h3>
          <p><strong>Remote</strong> — I can work anywhere if it is fully remote.</p>
          <p><strong>Hybrid</strong> — In every South African province.</p>
          <p><strong>Local</strong> — In every South African province.</p>
        </div>
        <div class="pref-card" :class="{ visible: isVisible }">
          <h3>Work authorisation</h3>
          <p><strong>Africa:</strong> 100% authorised</p>
          <p><strong>Around the globe:</strong> Remote</p>
        </div>
      </div>

      <div class="ideal-job" :class="{ visible: isVisible }">
        <h3>Ideal next job</h3>
        <p>As a <strong>Software Developer</strong>, I would like to assist the development team with all aspects of software design and coding.
          I would like my primary role to be learning the codebase, attending design meetings, writing basic code, fixing bugs,
          and assisting the Development Manager in all design-related tasks.</p>
        <p>I am most proficient in using <strong>Java</strong> and <strong>Spring Boot</strong>, and I would like to work with
          <strong>Microsoft Azure</strong> to manage my projects. I am looking for a company that will aid in my development
          and support my career growth. <em>Notice period: 1 week.</em></p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'
import { useProfileCalculations } from '../composables/useProfileCalculations'

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = useScrollReveal(sectionRef)
const { age, yearsOfExperience } = useProfileCalculations()
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
