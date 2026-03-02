<template>
  <header class="nav" :class="{ scrolled: isScrolled }">
    <div class="nav-inner">
      <a href="#" class="logo">PB</a>
      <button class="menu-btn" aria-label="Toggle menu" @click="open = !open">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav class="links" :class="{ open }">
        <a href="#about" @click="open = false">About</a>
        <a href="#experience" @click="open = false">Work History</a>
        <a href="#qualifications" @click="open = false">Education</a>
        <a href="#projects" @click="open = false">Projects</a>
        <a href="#skills" @click="open = false">Skills</a>
        <a href="#contact" @click="open = false">Contact</a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const open = ref(false)

function onScroll() {
  isScrolled.value = window.scrollY > 40
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 1rem var(--space-inline);
  transition: background 0.25s ease, box-shadow 0.25s ease;
}
.nav.scrolled {
  background: rgba(10, 14, 23, 0.85);
  backdrop-filter: blur(12px);
  box-shadow: 0 1px 0 var(--color-border);
}
.nav-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.35rem;
  letter-spacing: -0.03em;
  color: var(--color-text-strong);
}
.logo:hover {
  color: var(--color-accent);
  opacity: 1;
}
.menu-btn {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}
.menu-btn span {
  width: 22px;
  height: 2px;
  background: var(--color-text);
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.links {
  display: flex;
  gap: 2rem;
}
.links a {
  color: var(--color-text-muted);
  font-size: 0.95rem;
  font-weight: 500;
}
.links a:hover {
  color: var(--color-accent);
}

@media (max-width: 768px) {
  .menu-btn {
    display: flex;
  }
  .links {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: min(280px, 85vw);
    flex-direction: column;
    padding: 5rem 1.5rem 2rem;
    background: var(--color-bg-elevated);
    box-shadow: -4px 0 24px rgba(0, 0, 0, 0.4);
    gap: 0.5rem;
    transform: translateX(100%);
    transition: transform 0.3s ease;
  }
  .links.open {
    transform: translateX(0);
  }
  .links a {
    padding: 0.75rem 0;
    font-size: 1rem;
  }
}
</style>
