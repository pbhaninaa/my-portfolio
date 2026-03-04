<template>
  <section class="contact" id="contact" ref="sectionRef">
    <h2 class="section-title" :class="{ visible: isVisible }">Get in <span class="accent">Touch</span></h2>
    <p class="contact-intro" :class="{ visible: isVisible }">
      Open to new opportunities. Reach out via email or phone, or connect on LinkedIn.
    </p>
    <div class="links">
      <a href="mailto:pbhanina@gmail.com" class="contact-link" :class="{ visible: isVisible }" aria-label="Email">
        <span class="label">Email</span>
        <span class="value">pbhanina@gmail.com</span>
      </a>
      <a href="tel:+27782141216" class="contact-link" :class="{ visible: isVisible }" aria-label="Phone">
        <span class="label">Phone</span>
        <span class="value">078 214 1216</span>
      </a>
      <a
        href="https://www.linkedin.com/in/mr-p-bhani/"
        target="_blank"
        rel="noopener"
        class="contact-link"
        :class="{ visible: isVisible }"
        aria-label="LinkedIn"
      >
        <span class="label">LinkedIn</span>
        <span class="value">linkedin.com/in/mr-p-bhani</span>
      </a>
    </div>
    <div class="references" :class="{ visible: isVisible }">
      <h3 class="ref-title">References</h3>
      <ul>
        <li>Lebogang Tlatsi – <a href="mailto:lebogangt@cappayments.co.za">lebogangt@cappayments.co.za</a> / 082 317 9184</li>
        <li>Odireleng Ramela – <a href="mailto:Odireleng.ramela@geeks4learning.com">Odireleng.ramela@geeks4learning.com</a> / 011 998 1960</li>
        <li>Kabelo Gaotlhaelwe – <a href="mailto:kabelo@mlab.co.za">kabelo@mlab.co.za</a> / 079 339 5980</li>
      </ul>
    </div>
    <footer class="footer" :class="{ visible: isVisible }">
      <p>© {{ new Date().getFullYear() }} Philasande Bhani.</p>
    </footer>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = useScrollReveal(sectionRef)
</script>

<style scoped>
.contact {
  padding-top: var(--space-section);
  padding-bottom: 2rem;
}
.section-title {
  text-align: center;
  margin-bottom: 0.75rem;
}
.contact-intro {
  text-align: center;
  color: var(--color-text-muted);
  max-width: 480px;
  margin: 0 auto 2rem;
  line-height: 1.6;
}
.links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}
.contact-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1.5rem;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  min-width: 180px;
  transition: border-color 0.2s ease, transform 0.2s ease;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1), transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.2s ease;
}
.contact-link.visible {
  opacity: 1;
  transform: translateY(0);
}
.contact-link:nth-child(1) { transition-delay: 0.05s; }
.contact-link:nth-child(2) { transition-delay: 0.1s; }
.contact-link:nth-child(3) { transition-delay: 0.15s; }
.contact-link:hover {
  border-color: var(--color-accent);
  transform: translateY(-2px);
}
.contact-link .label {
  font-size: 0.8rem;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.25rem;
}
.contact-link .value {
  font-weight: 600;
  color: var(--color-text-strong);
}
.references {
  max-width: 520px;
  margin: 0 auto 2rem;
  padding: 1.25rem 1.5rem;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1), transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}
.references.visible {
  opacity: 1;
  transform: translateY(0);
}
.ref-title {
  font-size: 1rem;
  color: var(--color-accent);
  margin: 0 0 0.75rem;
}
.references ul {
  margin: 0;
  padding-left: 1.2rem;
  color: var(--color-text-muted);
  font-size: 0.9rem;
  line-height: 1.8;
}
.references a {
  color: var(--color-accent);
}
.section-title,
.contact-intro {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}
.section-title.visible,
.contact-intro.visible {
  opacity: 1;
  transform: translateY(0);
}
.footer {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border);
  opacity: 0;
  transition: opacity 0.6s ease;
}
.footer.visible {
  opacity: 1;
}
.footer p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--color-text-muted);
}
</style>
