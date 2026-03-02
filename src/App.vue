<template>
  <div class="app">
    <Nav />
    <ChatAgent />
    <main>
      <Hero />
      <Experience />
      <Projects />
      <Qualifications />
      <Skills />
      <About />
      <Contact />
    </main>
  </div>
</template>

<script setup lang="ts">
import Nav from './components/Nav.vue'
import ChatAgent from './components/ChatAgent.vue'
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
  width: 100%;
}

main {
  padding-top: 0;
}
</style>
