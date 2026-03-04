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
          <ProjectCardContent :project="project" />
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
          <ProjectCardContent :project="project" />
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
          <ProjectCardContent :project="project" />
        </article>
      </div>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <Transition name="lightbox">
        <div
          v-if="lightboxImage"
          class="lightbox-overlay"
          @click.self="closeLightbox"
        >
          <button class="lightbox-close" @click="closeLightbox">×</button>
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

import highSchoolImg from '../assets/highSchool.png'
import hotelManagementImg from '../assets/hotel-management.png'
import covid19Img from '../assets/covid-19.png'
import calculatorImg from '../assets/calculator.png'
import weatherImg from '../assets/wWeather.png'
import jobHunterImg from '../assets/job-hunter.png'
import posImg from '../assets/point-of-sales.png'
import mechConnectClientDash from '../assets/mech-connect-client-dash.png'

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = useScrollReveal(sectionRef)

const lightboxImage = ref<{ src: string; alt: string } | null>(null)

function openLightbox(src: string, alt: string) {
  lightboxImage.value = { src, alt }
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightboxImage.value = null
  document.body.style.overflow = ''
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') closeLightbox()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})

const projects = [
  {
    name: 'MechConnect',
    category: 'Web App',
    image: mechConnectClientDash,
    tech: 'Vue 3, Spring Boot, React Native',
    description: 'Full-stack service marketplace connecting customers with mechanics.',
    tags: ['Vue 3', 'Spring Boot', 'React Native'],
    link: 'https://mechanic-management-806bi8xrb-pbhanina-5058s-projects.vercel.app/',
  },
  {
    name: 'High School Application System',
    category: 'Web App',
    image: highSchoolImg,
    tech: 'AngularJS, Spring Boot',
    description: 'Streamlines the school admission process.',
    tags: ['AngularJS', 'Spring Boot'],
    link: '#',
  },
  {
    name: 'Hotel Management System',
    category: 'Web App',
    image: hotelManagementImg,
    tech: 'Spring Boot, Angular, MySQL',
    description: 'Hotel booking and room availability system.',
    tags: ['Spring Boot', 'Angular', 'MySQL'],
    link: '#',
  },
  {
    name: 'Covid-19 App',
    category: 'Mobile App',
    image: covid19Img,
    tech: 'ReactJS',
    description: 'Covid-19 statistics for South Africa and global data.',
    tags: ['ReactJS'],
    link: '#',
  },
  {
    name: 'Weather App',
    category: 'Mobile App',
    image: weatherImg,
    tech: 'React Native',
    description: 'Mobile app showing weather conditions and forecasts.',
    tags: ['React Native'],
    link: '#',
  },
  {
    name: 'Job Finder',
    category: 'Mobile App',
    image: jobHunterImg,
    tech: 'React Native',
    description: 'Browse and apply for Software Developer jobs.',
    tags: ['React Native'],
    link: '#',
  },
  {
    name: 'Point of Sale (POS)',
    category: 'Mobile App',
    image: posImg,
    tech: 'Android (Java), SQLite',
    description: 'Sell digital products like airtime and data.',
    tags: ['Android', 'Java'],
    link: '#',
  },
  {
    name: 'Simple Calculator',
    category: 'Desktop App',
    image: calculatorImg,
    tech: 'VB.NET, MS Access',
    description: 'Performs percentage and average calculations.',
    tags: ['VB.NET'],
    link: '#',
  },
]

const webApps = computed(() =>
  projects.filter(p => p.category === 'Web App')
)

const mobileApps = computed(() =>
  projects.filter(p => p.category === 'Mobile App')
)

const desktopApps = computed(() =>
  projects.filter(p => p.category === 'Desktop App')
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