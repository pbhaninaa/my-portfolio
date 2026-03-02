<template>
  <section class="skills" id="skills" ref="sectionRef">
    <h2 class="section-title" :class="{ visible: isVisible }">Skills</h2>
    <div class="skills-grid">
      <div
        v-for="(group, i) in skillGroups"
        :key="group.category"
        class="skill-group"
        :class="{ visible: isVisible }"
        :style="{ transitionDelay: `${i * 0.08}s` }"
      >
        <h3 class="category">{{ group.category }}</h3>
        <div class="tags">
          <span v-for="skill in group.items" :key="skill" class="tag">{{ skill }}</span>
        </div>
      </div>
    </div>
    <div class="desired-roles" :class="{ visible: isVisible }">
      <h3 class="roles-title">Desired Roles</h3>
      <ul class="roles-list">
        <li><strong>Full Stack Developer:</strong> Java, Android, Angular, React, Vue</li>
        <li><strong>Front End Developer:</strong> Angular, React, Vue, Android</li>
        <li><strong>Back End Developer:</strong> Java, Node.js, MySQL, SQL, NoSQL, MongoDB</li>
      </ul>
      <div class="tech-stack-summary">
        <p><strong>Tech Stack:</strong> Programming: Java, JavaScript · Mobile: Android, React Native · Frontend: Angular, React, Vue · Backend: Node.js · Databases: MySQL, SQL, NoSQL, MongoDB</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = useScrollReveal(sectionRef)

const skillGroups = [
  {
    category: 'Tools and Technologies',
    items: ['Atlassian', 'Jira', 'BitBucket', 'Git', 'GitHub', 'GitLab', 'Slack', 'Microsoft Teams', 'Trello', 'Azure', 'Docker', 'Microsoft Office'],
  },
  {
    category: 'Software Development',
    items: ['Java', 'VB.Net', 'Node.js', 'Angular', 'React', 'React Native', 'Android', 'JavaScript', 'TypeScript', 'HTML5', 'CSS', 'Bootstrap', 'JSON', 'Spring Boot', 'Hibernate', 'XML', 'Web APIs', 'Web Services'],
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'NoSQL', 'MySQL', 'SQL Workbench', 'Postgres', 'Microsoft Access'],
  },
]
</script>

<style scoped>
.skills {
  padding-top: var(--space-section);
  padding-bottom: var(--space-section);
}
.section-title {
  text-align: center;
  margin-bottom: 2.5rem;
}
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto 2rem;
}
.skill-group {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 1.5rem;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1), transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}
.skill-group.visible {
  opacity: 1;
  transform: translateY(0);
}
.skill-group:hover {
  border-color: var(--color-accent-dim);
}
.category {
  font-size: 0.95rem;
  color: var(--color-accent);
  margin: 0 0 1rem;
  font-weight: 600;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.tag {
  background: rgba(34, 211, 238, 0.12);
  color: var(--color-accent);
  padding: 0.4rem 0.85rem;
  border-radius: var(--radius-full);
  font-size: 0.85rem;
  font-weight: 500;
}
.desired-roles {
  max-width: 700px;
  margin: 0 auto;
  padding: 1.5rem;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1), transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}
.desired-roles.visible {
  opacity: 1;
  transform: translateY(0);
}
.roles-title {
  font-size: 1rem;
  color: var(--color-accent);
  margin: 0 0 1rem;
  font-weight: 600;
}
.roles-list {
  margin: 0 0 1rem;
  padding-left: 1.25rem;
  color: var(--color-text-muted);
  font-size: 0.95rem;
  line-height: 1.8;
}
.roles-list strong {
  color: var(--color-text);
}
.tech-stack-summary {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  line-height: 1.6;
}
.tech-stack-summary strong {
  color: var(--color-text);
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
