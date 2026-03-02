import { ref, watch, onMounted, onUnmounted, type Ref } from 'vue'

const defaultOptions: IntersectionObserverInit = {
  root: null,
  rootMargin: '0px 0px -80px 0px',
  threshold: 0.08,
}

export function useScrollReveal(
  elRef: Ref<HTMLElement | null>,
  options: Partial<IntersectionObserverInit> = {}
): Ref<boolean> {
  const isVisible = ref(false)

  onMounted(() => {
    let observer: IntersectionObserver | null = null
    let observedEl: HTMLElement | null = null

    const observe = (el: HTMLElement | null) => {
      if (!el) return
      observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0]
          if (entry?.isIntersecting) isVisible.value = true
        },
        { ...defaultOptions, ...options }
      )
      observer.observe(el)
      observedEl = el
    }

    const disconnect = () => {
      if (observer && observedEl) {
        observer.unobserve(observedEl)
        observer.disconnect()
        observer = null
        observedEl = null
      }
    }

    if (elRef.value) observe(elRef.value)

    const stop = watch(elRef, (el) => {
      disconnect()
      if (el) observe(el)
    }, { flush: 'post', immediate: false })

    onUnmounted(() => {
      stop()
      disconnect()
    })
  })

  return isVisible
}
