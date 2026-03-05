<template>
  <div>
    <div class="img-wrap" @click="$emit('openLightbox', project.image, project.name)">
      <img :src="project.image" :alt="project.name" loading="lazy" />
    </div>
    <h3 class="card-title">{{ project.name }}</h3>
    <p class="card-tech">{{ project.tech }}</p>
    <p class="card-desc">{{ project.description }}</p>
    <div class="card-tags">
      <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
    </div>
    <a v-if="project.link && project.link !== '#'" :href="project.link" target="_blank" rel="noopener" class="card-cta">View project</a>
  </div>
</template>

<script setup lang="ts">
import type { ProjectItem } from '../data/types'

defineProps<{ project: ProjectItem }>()
defineEmits<{ (e: 'openLightbox', src: string, alt: string): void }>()
</script>

<style scoped>
.img-wrap {
  display: block;
  cursor: pointer;
  margin-bottom: 1rem;
}
.img-wrap img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: var(--radius-sm);
}
.card-title {
  font-size: 1.1rem;
  margin: 0 0 0.35rem;
  color: var(--color-text-strong);
}
.card-tech {
  font-size: 0.85rem;
  color: var(--color-accent);
  margin: 0 0 0.5rem;
}
.card-desc {
  font-size: 0.95rem;
  color: var(--color-text-muted);
  margin: 0 0 0.75rem;
  line-height: 1.5;
  flex: 1;
}
.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 0.75rem;
}
.tag {
  background: rgba(34, 211, 238, 0.12);
  color: var(--color-accent);
  padding: 0.25rem 0.6rem;
  border-radius: var(--radius-full);
  font-size: 0.75rem;
}
.card-cta {
  font-size: 0.9rem;
  color: var(--color-accent);
  font-weight: 500;
}
.card-cta:hover {
  text-decoration: underline;
}
</style>
