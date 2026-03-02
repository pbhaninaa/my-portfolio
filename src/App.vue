<template>
  <div class="app">
    <Nav />
    <main>
      <Hero />
      <About />
      <Experience />
      <Qualifications />
      <Projects />
      <Skills />
      <Contact />
    </main>
  </div>
</template>

<script setup lang="ts">
import Nav from './components/Nav.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Experience from './components/Experience.vue'
import Qualifications from './components/Qualifications.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'
</script>

<style scoped>
.app {
  min-height: 100vh;
}
main {
  padding-top: 0;
}
</style>
