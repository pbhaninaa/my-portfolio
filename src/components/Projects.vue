<template>
  <section class="projects" id="projects" ref="sectionRef">
    <h2 class="section-title" :class="{ visible: isVisible }">Projects</h2>
    <div class="grid">
      <article
        v-for="(project, i) in projects"
        :key="project.name"
        class="card"
        :class="{ visible: isVisible }"
        :style="{ transitionDelay: `${i * 0.08}s` }"
      >
        <button
          v-if="project.image"
          type="button"
          class="card-image-wrap"
          @click="openLightbox(project.image, project.name)"
          aria-label="View full size"
        >
          <img
            :src="project.image"
            :alt="project.name"
            class="card-image"
          />
        </button>
        <div v-else class="card-image-placeholder">Image coming soon</div>
        <h3>{{ project.name }}</h3>
        <p class="tech-used" v-if="project.tech">Tech: {{ project.tech }}</p>
        <p class="description">{{ project.description }}</p>
        <div class="tech" v-if="project.tags?.length">
          <span v-for="t in project.tags" :key="t" class="tech-tag">{{ t }}</span>
        </div>
        <a :href="project.link" target="_blank" rel="noopener" class="link">
          View Project →
        </a>
      </article>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <Transition name="lightbox">
        <div
          v-if="lightboxImage"
          class="lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Project image zoomed"
          @click.self="closeLightbox"
        >
          <button
            type="button"
            class="lightbox-close"
            aria-label="Close"
            @click="closeLightbox"
          >
            ×
          </button>
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
import { ref, onMounted, onUnmounted } from 'vue'
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

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})
onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})

const projects = [
  {
    name: 'MechConnect',
    image: mechConnectClientDash,
    tech: 'Vue 3 (web), Spring Boot (REST API, JWT, MySQL), React Native (mobile)',
    description: 'Full-stack service marketplace connecting customers with mechanics and car wash providers. Clients request mechanic assistance or book car washes (in-house or call-out, with optional towing); providers see new requests in real time with sound alerts via Server-Sent Events. Role-based dashboards (client, mechanic, car wash, admin), Stripe payments with platform fees, email/SMS notifications, and reporting. Built with Vue 3, Spring Boot, and React Native; admins manage users, fees, and job assignments.',
    tags: ['Vue 3', 'React Native', 'Spring Boot', 'MySQL', 'JWT', 'Stripe', 'Server-Sent Events'],
    link: '#',
  },
  {
    name: 'High School Application System',
    image: highSchoolImg,
    tech: 'AngularJS (Frontend), Spring Boot with Java (Backend)',
    description: 'Streamlines the school admission process. Learner side: search schools, register, apply to selected school. Admin side: login, view and process applications.',
    tags: ['AngularJS', 'Spring Boot', 'Java'],
    link: '#',
  },
  {
    name: 'Hotel Management System',
    image: hotelManagementImg,
    tech: 'Spring Boot (Backend), Angular (Frontend), MySQL (Database)',
    description: 'Users select a hotel, choose room type (double or single), and check availability before booking. Login to save details; cancellation up to 24 hours before check-in. Secure booking experience.',
    tags: ['Spring Boot', 'Angular', 'MySQL'],
    link: '#',
  },
  {
    name: 'Covid-19 App',
    image: covid19Img,
    tech: 'ReactJS',
    description: 'Covid-19 statistics with separate views for South Africa and global data. Landing page: Call and SMS buttons for healthcare. Statistics views for SA and global. Menu bar for detailed information.',
    tags: ['ReactJS'],
    link: '#',
  },
  {
    name: 'Simple Calculator',
    image: calculatorImg,
    tech: 'VB.NET, Microsoft Access (Database), MySQL (Data Manipulation)',
    description: 'Percentage calculation (initial amount and percentage); average calculation from user values; basic calculator (addition, subtraction, multiplication, division).',
    tags: ['VB.NET', 'Microsoft Access', 'MySQL'],
    link: '#',
  },
  {
    name: 'Weather App',
    image: weatherImg,
    tech: 'React Native',
    description: 'Mobile app: search a place to see weather conditions. On open, reads current location coordinates and shows weather. Includes future forecast for following days.',
    tags: ['React Native'],
    link: '#',
  },
  {
    name: 'Job Finder',
    image: jobHunterImg,
    tech: 'React Native',
    description: 'Displays advertised Software Developer jobs using Jsearch API. Search for jobs or browse popular listings. Users can apply for positions posted in the app.',
    tags: ['React Native', 'Jsearch API'],
    link: '#',
  },
  {
    name: 'Point of Sale (POS) Application',
    image: posImg,
    tech: 'Android (Java), SQLite',
    description: 'Merchants sell digital products (airtime, data). Login, select ISP, choose items from categorized list. Top-Up, Airtime section, History tab, Profile, and filter for product selection.',
    tags: ['Android', 'Java', 'SQLite'],
    link: '#',
  },
]
</script>

<style scoped>
.projects {
  padding-top: var(--space-section);
  padding-bottom: var(--space-section);
}
.section-title {
  text-align: center;
  margin-bottom: 2.5rem;
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}
.section-title.visible {
  opacity: 1;
  transform: translateY(0);
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
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1), transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.2s ease, box-shadow 0.2s ease;
}
.card.visible {
  opacity: 1;
  transform: translateY(0);
}
.card:hover {
  border-color: var(--color-accent-dim);
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
}
.card-image-wrap {
  width: 100%;
  height: 180px;
  margin-bottom: 1rem;
  padding: 0;
  border: none;
  border-radius: var(--radius-sm);
  background: var(--color-surface);
  cursor: zoom-in;
  overflow: hidden;
  display: block;
}
.card-image-wrap:focus {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}
.card-image,
.card-image-placeholder {
  width: 100%;
  height: 180px;
  border-radius: var(--radius-sm);
  margin-bottom: 0;
  background: var(--color-surface);
}
.card-image-wrap .card-image {
  margin-bottom: 0;
}
.card-image {
  object-fit: cover;
  display: block;
}
.card-image-placeholder {
  margin-bottom: 1rem;
}
.card-image-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  color: var(--color-text-muted);
}
.card h3 {
  font-size: 1.15rem;
  margin: 0 0 0.4rem;
  color: var(--color-text-strong);
}
.tech-used {
  font-size: 0.8rem;
  color: var(--color-accent);
  margin: 0 0 0.5rem;
}
.card .description {
  color: var(--color-text-muted);
  font-size: 0.9rem;
  margin: 0 0 1rem;
  flex-grow: 1;
  line-height: 1.55;
}
.tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1rem;
}
.tech-tag {
  font-size: 0.75rem;
  color: var(--color-text-muted);
  background: var(--color-surface);
  padding: 0.25rem 0.6rem;
  border-radius: var(--radius-sm);
}
.link {
  align-self: flex-start;
  font-weight: 600;
  font-size: 0.9rem;
}
.link:hover {
  text-decoration: underline;
}

/* Lightbox (global, not scoped, so overlay covers full viewport) */
.lightbox-overlay {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  cursor: zoom-out;
}
.lightbox-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  background: var(--color-bg-card);
  color: var(--color-text);
  font-size: 1.75rem;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, color 0.2s;
  z-index: 201;
}
.lightbox-close:hover {
  background: var(--color-accent);
  color: var(--color-bg);
}
.lightbox-content {
  max-width: 95vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: default;
}
.lightbox-image {
  max-width: 100%;
  max-height: calc(90vh - 3rem);
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: var(--radius-sm);
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.5);
}
.lightbox-caption {
  margin: 1rem 0 0;
  color: var(--color-text-muted);
  font-size: 1rem;
  text-align: center;
}
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.25s ease;
}
.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}
.lightbox-enter-active .lightbox-content,
.lightbox-leave-active .lightbox-content {
  transition: transform 0.25s ease;
}
.lightbox-enter-from .lightbox-content,
.lightbox-leave-to .lightbox-content {
  transform: scale(0.96);
}
.lightbox-enter-to .lightbox-content,
.lightbox-leave-from .lightbox-content {
  transform: scale(1);
}
</style>
