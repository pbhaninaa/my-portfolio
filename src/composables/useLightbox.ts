import { ref, readonly } from 'vue'

const lightboxImage = ref<{ src: string; alt: string } | null>(null)

export function useLightbox() {
  const isOpen = readonly(lightboxImage)

  function openLightbox(src: string, alt: string) {
    lightboxImage.value = { src, alt }
    document.body.style.overflow = 'hidden'
  }

  function closeLightbox() {
    lightboxImage.value = null
    document.body.style.overflow = ''
  }

  /**
   * Call before any button/link action. Closes the lightbox if open so the action can proceed.
   */
  function closeIfOpen() {
    if (lightboxImage.value) {
      closeLightbox()
    }
  }

  return {
    lightboxImage,
    isOpen,
    openLightbox,
    closeLightbox,
    closeIfOpen,
  }
}
