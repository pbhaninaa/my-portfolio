<template>
  <section class="hero" id="hero">
    <div class="hero-bg">
      <div class="gradient"></div>
      <div class="grid-pattern"></div>
    </div>
    <div class="hero-content">
      <p class="greeting hero-anim">Hi, I'm</p>
      <h1 class="name hero-anim">PHILASANDE BHANI</h1>
      <p class="tagline hero-anim">Software Developer | Java / Full Stack Developer</p>
      <p class="location hero-anim">Gauteng, South Africa · {{ yearsOfExperience }}+ years of working experience</p>
      <p class="salary hero-anim">Preferred salary: {{ preferredSalaryMonthlyFormatted }}+ monthly, or {{ preferredSalaryAnnualFormatted }}+ annually</p>
      <p class="intro hero-anim">
        With a <strong>National Diploma in Information Technology</strong> and experience as a Java Developer,
        I bring a strong foundation in software development and problem-solving. My expertise spans
        <strong>Java</strong>, <strong>Spring Boot</strong>, <strong>Angular</strong>, <strong>React</strong>,
        <strong>Vue</strong>, and <strong>Android</strong>, enabling me to develop and maintain high-quality software solutions.
      </p>
      <div class="contact-mini hero-anim">
        <a href="tel:+27782141216">078 214 1216</a>
        <span class="dot">·</span>
        <a href="mailto:pbhanina@gmail.com">pbhanina@gmail.com</a>
        <span class="dot">·</span>
        <a href="https://www.linkedin.com/in/mr-p-bhani/" target="_blank" rel="noopener">LinkedIn</a>
      </div>
      <div class="cta hero-anim">
        <a href="#projects" class="btn btn-primary">See My Work</a>
        <a href="#contact" class="btn btn-secondary">Get in Touch</a>
      </div>
    </div>
    <a href="#about" class="scroll-hint hero-anim" aria-label="Scroll to about">
      <span></span>
    </a>
  </section>
</template>

<script setup lang="ts">
import { useProfileCalculations } from '../composables/useProfileCalculations'

const { yearsOfExperience, preferredSalaryMonthlyFormatted, preferredSalaryAnnualFormatted } = useProfileCalculations()
</script>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 5rem var(--space-inline) 4rem;
  overflow: hidden;
  box-sizing: border-box;
}
.hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.gradient {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 80% 50% at 50% -20%, var(--color-accent-glow), transparent),
    radial-gradient(ellipse 60% 40% at 80% 60%, rgba(8, 145, 178, 0.12), transparent);
  animation: gradient-pulse 8s ease-in-out infinite;
}
@keyframes gradient-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}
.grid-pattern {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(148, 163, 184, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148, 163, 184, 0.04) 1px, transparent 1px);
  background-size: 60px 60px;
}
.hero-content {
  position: relative;
  z-index: 1;
  max-width: 880px;
}

.hero-anim {
  opacity: 0;
  transform: translateY(24px);
  animation: hero-fade-in 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
.hero-anim:nth-child(1) { animation-delay: 0.1s; }
.hero-anim:nth-child(2) { animation-delay: 0.2s; }
.hero-anim:nth-child(3) { animation-delay: 0.35s; }
.hero-anim:nth-child(4) { animation-delay: 0.45s; }
.hero-anim:nth-child(5) { animation-delay: 0.55s; }
.hero-anim:nth-child(6) { animation-delay: 0.65s; }
.hero-anim:nth-child(7) { animation-delay: 0.75s; }
.hero-anim:nth-child(8) { animation-delay: 0.85s; }
.hero-anim:nth-child(9) { animation-delay: 0.95s; }
.hero-anim:nth-child(10) { animation-delay: 1.05s; }
.hero-anim:nth-child(11) { animation-delay: 1.15s; }
.hero-anim:nth-child(12) { animation-delay: 1.25s; }
.hero-anim:nth-child(13) { animation-delay: 1.35s; }
.hero-anim:nth-child(14) { animation-delay: 1.45s; }
.hero-anim:nth-child(15) { animation-delay: 1.55s; }
@keyframes hero-fade-in {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.greeting {
  font-size: 1.1rem;
  color: var(--color-accent);
  margin-bottom: 0.5rem;
  font-weight: 500;
}
.name {
  font-size: clamp(2rem, 6vw, 3.5rem);
  font-weight: 700;
  letter-spacing: 0.02em;
  margin: 0 0 0.25em;
  line-height: 1.1;
}
.tagline {
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  color: var(--color-accent);
  margin: 0 0 0.35em;
  font-weight: 500;
}
.location {
  font-size: 0.95rem;
  color: var(--color-text-muted);
  margin: 0 0 0.25rem;
}
.salary {
  font-size: 0.9rem;
  color: var(--color-accent);
  margin: 0 0 1rem;
  font-weight: 500;
}
.intro {
  font-size: 1.05rem;
  color: var(--color-text-muted);
  margin-bottom: 1rem;
  line-height: 1.7;
}
.intro strong {
  color: var(--color-text);
  font-weight: 600;
}
.contact-mini {
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
}
.contact-mini a {
  color: var(--color-text-muted);
}
.contact-mini a:hover {
  color: var(--color-accent);
}
.contact-mini .dot {
  margin: 0 0.5rem;
  color: var(--color-text-muted);
  opacity: 0.6;
}
.cta {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
.btn {
  display: inline-block;
  padding: 0.85rem 1.75rem;
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: 0.95rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.btn:hover {
  transform: translateY(-2px);
}
.btn-primary {
  background: var(--color-accent);
  color: var(--color-bg);
}
.btn-primary:hover {
  box-shadow: 0 8px 24px var(--color-accent-glow);
}
.btn-secondary {
  background: transparent;
  color: var(--color-accent);
  border: 2px solid var(--color-accent);
}
.scroll-hint {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 28px;
  height: 44px;
  border: 2px solid var(--color-text-muted);
  border-radius: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 8px;
  color: var(--color-text-muted);
  animation: bounce 2s infinite 1.8s;
}
.scroll-hint span {
  width: 4px;
  height: 8px;
  background: currentColor;
  border-radius: 2px;
}
@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(6px); }
}
</style>
