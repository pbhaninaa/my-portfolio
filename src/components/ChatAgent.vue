<template>
  <div class="chat-agent">
    <button
      type="button"
      class="chat-toggle"
      :aria-label="open ? 'Close chat' : 'Ask about ' + profile.personal.fullName"
      @click="closeIfOpen(); open = !open"
    >
      <span v-if="!open" class="chat-icon">?</span>
      <span v-else class="chat-icon-close">×</span>
    </button>

    <Transition name="panel">
      <div v-if="open" class="chat-panel">
        <div class="chat-header">
          <h3>Ask about {{ profile.personal.fullName }}</h3>
          <p class="chat-subtitle">I can answer questions about their experience, skills, and contact.</p>
        </div>
        <div ref="messagesRef" class="chat-messages">
          <div v-if="messages.length === 0" class="chat-welcome">
            <p>Hi! Ask me anything about {{ profile.personal.fullName }}—experience, skills, projects, or how to get in touch.</p>
          </div>
          <div
            v-for="(m, i) in messages"
            :key="i"
            class="chat-message"
            :class="m.role"
          >
            <span class="message-label">{{ m.role === 'user' ? 'You' : 'Agent' }}</span>
            <p class="message-text">{{ m.content }}</p>
          </div>
          <div v-if="loading" class="chat-message assistant">
            <span class="message-label">Agent</span>
            <p class="message-text typing">Thinking...</p>
          </div>
        </div>
        <form class="chat-form" @submit.prevent="send">
          <input
            v-model="input"
            type="text"
            placeholder="Ask a question..."
            class="chat-input"
            :disabled="loading"
            autocomplete="off"
          />
          <button type="submit" class="chat-send" :disabled="loading || !input.trim()">
            Send
          </button>
        </form>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import { askAgent } from '../composables/useAgent'
import { useLightbox } from '../composables/useLightbox'
import { portfolioProfile } from '../data'

const profile = portfolioProfile
const { closeIfOpen } = useLightbox()

const open = ref(false)
const input = ref('')
const loading = ref(false)
const messagesRef = ref<HTMLElement | null>(null)

interface Message {
  role: 'user' | 'assistant'
  content: string
}
const messages = ref<Message[]>([])

async function send() {
  const text = input.value.trim()
  if (!text || loading.value) return
  input.value = ''
  messages.value.push({ role: 'user', content: text })
  loading.value = true
  try {
    const reply = await askAgent(text)
    messages.value.push({ role: 'assistant', content: reply })
  } finally {
    loading.value = false
  }
  await nextTick()
  messagesRef.value?.scrollTo({ top: messagesRef.value.scrollHeight, behavior: 'smooth' })
}

watch(open, (isOpen) => {
  if (isOpen) {
    nextTick(() => messagesRef.value?.scrollTo({ top: messagesRef.value.scrollHeight, behavior: 'smooth' }))
  }
})
</script>

<style scoped>
.chat-agent {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 150;
}
.chat-toggle {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: none;
  background: var(--color-accent);
  color: var(--color-bg);
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 20px var(--color-accent-glow);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s, box-shadow 0.2s;
}
.chat-toggle:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 24px var(--color-accent-glow);
}
.chat-icon-close {
  font-size: 1.75rem;
  line-height: 1;
}
.chat-panel {
  position: absolute;
  bottom: calc(56px + 0.75rem);
  right: 0;
  width: min(380px, calc(100vw - 2rem));
  max-height: 70vh;
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.chat-header {
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--color-border);
  flex-shrink: 0;
}
.chat-header h3 {
  margin: 0 0 0.25rem;
  font-size: 1rem;
  color: var(--color-text-strong);
}
.chat-subtitle {
  margin: 0;
  font-size: 0.8rem;
  color: var(--color-text-muted);
}
.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 120px;
  max-height: 320px;
}
.chat-welcome {
  color: var(--color-text-muted);
  font-size: 0.9rem;
  line-height: 1.5;
}
.chat-message {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-self: flex-start;
  max-width: 90%;
}
.chat-message.user {
  align-self: flex-end;
}
.chat-message.user .message-text {
  background: var(--color-accent);
  color: var(--color-bg);
  border-radius: 14px 14px 4px 14px;
}
.chat-message.assistant .message-text {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 14px 14px 14px 4px;
}
.message-label {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-muted);
}
.message-text {
  margin: 0;
  padding: 0.6rem 0.9rem;
  font-size: 0.9rem;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-word;
}
.message-text.typing {
  color: var(--color-text-muted);
}
.chat-form {
  display: flex;
  gap: 0.5rem;
  padding: 1rem;
  border-top: 1px solid var(--color-border);
  flex-shrink: 0;
}
.chat-input {
  flex: 1;
  padding: 0.65rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  background: var(--color-bg);
  color: var(--color-text);
  font-size: 0.9rem;
  font-family: inherit;
}
.chat-input::placeholder {
  color: var(--color-text-muted);
}
.chat-input:focus {
  outline: none;
  border-color: var(--color-accent);
}
.chat-send {
  padding: 0.65rem 1.25rem;
  border: none;
  border-radius: var(--radius-md);
  background: var(--color-accent);
  color: var(--color-bg);
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: opacity 0.2s;
}
.chat-send:hover:not(:disabled) {
  opacity: 0.9;
}
.chat-send:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.panel-enter-active,
.panel-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.panel-enter-from,
.panel-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
</style>
