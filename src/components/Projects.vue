<template>
  <section class="projects" id="projects" ref="sectionRef">
    <h2 class="section-title" :class="{ visible: isVisible }">Projects</h2>

    <!-- WEB APPS -->
    <div class="category-section">
      <h3 class="category-title">Web Apps</h3>
      <div class="grid">
        <article
          v-for="(project, i) in webApps"
          :key="project.name"
          class="card"
          :class="{ visible: isVisible }"
          :style="{ transitionDelay: `${i * 0.08}s` }"
        >
          <ProjectCardContent :project="project" @open-lightbox="openLightbox" />
        </article>
      </div>
    </div>

    <!-- MOBILE APPS -->
    <div class="category-section">
      <h3 class="category-title">Mobile Apps</h3>
      <div class="grid">
        <article
          v-for="(project, i) in mobileApps"
          :key="project.name"
          class="card"
          :class="{ visible: isVisible }"
          :style="{ transitionDelay: `${i * 0.08}s` }"
        >
          <ProjectCardContent :project="project" @open-lightbox="openLightbox" />
        </article>
      </div>
    </div>

    <!-- DESKTOP APPS -->
    <div class="category-section">
      <h3 class="category-title">Desktop Apps</h3>
      <div class="grid">
        <article
          v-for="(project, i) in desktopApps"
          :key="project.name"
          class="card"
          :class="{ visible: isVisible }"
          :style="{ transitionDelay: `${i * 0.08}s` }"
        >
          <ProjectCardContent :project="project" @open-lightbox="openLightbox" />
        </article>
      </div>
    </div>

    <!-- Lightbox (shared state so any button can close it before doing its action) -->
    <Teleport to="body">
      <Transition name="lightbox">
        <div
          v-if="lightboxImage"
          class="lightbox-overlay"
          @click.self="closeLightbox"
        >
          <button type="button" class="lightbox-close" @click="closeLightbox">×</button>
          <div class="lightbox-content">
            <img
              :src="lightboxImage.src"
              :alt="lightboxImage.alt"
              class="lightbox-image"
              @click.stop
            />
            <p class="lightbox-caption">{{ lightboxImage.alt }}</p>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'
import { useLightbox } from '../composables/useLightbox'
import { portfolioProfile } from '../data'
import ProjectCardContent from './ProjectCardContent.vue'

const profile = portfolioProfile
const sectionRef = ref<HTMLElement | null>(null)
const isVisible = useScrollReveal(sectionRef)

const { lightboxImage, openLightbox, closeLightbox } = useLightbox()

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') closeLightbox()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})

const projects = computed(() => profile.projects)

const webApps = computed(() =>
  projects.value.filter(p => p.category === 'Web App')
)

const mobileApps = computed(() =>
  projects.value.filter(p => p.category === 'Mobile App')
)

const desktopApps = computed(() =>
  projects.value.filter(p => p.category === 'Desktop App')
)
</script>

<style scoped>
.projects {
  padding-top: var(--space-section);
  padding-bottom: var(--space-section);
}

.section-title {
  text-align: center;
  margin-bottom: 2.5rem;
}

.category-section {
  margin-bottom: 3rem;
}

.category-title {
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  color: var(--color-accent);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  transition: 0.3s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
}

.card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: var(--radius-sm);
  margin-bottom: 1rem;
}

.lightbox-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-content {
  max-width: 95vw;
  max-height: 90vh;
}

.lightbox-image {
  max-width: 100%;
  max-height: 80vh;
}

.lightbox-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 2rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}
</style>