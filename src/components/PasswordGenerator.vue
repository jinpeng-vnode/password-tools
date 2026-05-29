<template>
  <div class="generator">
    <div class="password-display">
      <span class="password-text">{{ password }}</span>
      <div class="password-actions">
        <button @click="handleCopy" class="btn-icon" title="Copy">
          <ClipboardCopy v-if="!copied" :size="20" />
          <Check v-else :size="20" class="copied" />
        </button>
        <button @click="regenerate" class="btn-icon" title="Regenerate">
          <RefreshCw :size="20" />
        </button>
      </div>
    </div>

    <div class="strength-bar">
      <div class="strength-fill" :style="{ width: (strength.score / 6) * 100 + '%', background: strength.color }"></div>
    </div>
    <span class="strength-label" :style="{ color: strength.color }">{{ strength.label }}</span>

    <div class="controls">
      <div class="control-row">
        <label>Length: {{ options.length }}</label>
        <input type="range" v-model.number="options.length" min="4" max="64" @input="regenerate" />
      </div>
      <div class="control-row checkboxes">
        <label><input type="checkbox" v-model="options.uppercase" @change="regenerate" /> Uppercase (A-Z)</label>
        <label><input type="checkbox" v-model="options.lowercase" @change="regenerate" /> Lowercase (a-z)</label>
        <label><input type="checkbox" v-model="options.numbers" @change="regenerate" /> Numbers (0-9)</label>
        <label><input type="checkbox" v-model="options.symbols" @change="regenerate" /> Symbols (!@#$)</label>
      </div>
    </div>

    <div class="batch-section">
      <button @click="showBatch = !showBatch" class="btn-secondary">
        <List :size="18" />
        Batch Generate
      </button>
      <div v-if="showBatch" class="batch-list">
        <div v-for="(pw, i) in batchPasswords" :key="i" class="batch-item">
          <span class="batch-pw">{{ pw }}</span>
          <button @click="handleCopyBatch(pw)" class="btn-icon-sm">
            <ClipboardCopy :size="16" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { ClipboardCopy, Check, RefreshCw, List } from 'lucide-vue-next'
import { usePasswordGenerator } from '../composables/usePassword'

const { options, password, strength, regenerate, generateBatch, copyToClipboard } = usePasswordGenerator()

const copied = ref(false)
const showBatch = ref(false)
const batchPasswords = ref<string[]>([])

async function handleCopy() {
  const ok = await copyToClipboard(password.value)
  if (ok) {
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  }
}

async function handleCopyBatch(pw: string) {
  await copyToClipboard(pw)
}

watch(showBatch, (v) => {
  if (v) batchPasswords.value = generateBatch(5)
})
</script>

<style scoped>
.generator {
  background: var(--bg-card);
  border-radius: var(--radius);
  padding: 2rem;
  border: 1px solid var(--border);
}
.password-display {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--bg);
  border-radius: 8px;
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
  gap: 1rem;
}
.password-text {
  font-family: 'Courier New', monospace;
  font-size: 1.25rem;
  word-break: break-all;
  flex: 1;
}
.password-actions {
  display: flex;
  gap: 0.5rem;
}
.btn-icon {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  color: var(--text);
  padding: 0.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  transition: background 0.2s;
}
.btn-icon:hover {
  background: var(--primary);
}
.copied {
  color: var(--success);
}
.strength-bar {
  height: 4px;
  background: var(--border);
  border-radius: 2px;
  margin-bottom: 0.5rem;
  overflow: hidden;
}
.strength-fill {
  height: 100%;
  border-radius: 2px;
  transition: width 0.3s, background 0.3s;
}
.strength-label {
  font-size: 0.85rem;
  font-weight: 600;
}
.controls {
  margin-top: 1.5rem;
}
.control-row {
  margin-bottom: 1rem;
}
.control-row label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
}
.checkboxes {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
}
.checkboxes label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  color: var(--text);
}
.checkboxes input[type="checkbox"] {
  width: 18px;
  height: 18px;
  accent-color: var(--primary);
}
.batch-section {
  margin-top: 1.5rem;
  border-top: 1px solid var(--border);
  padding-top: 1.5rem;
}
.btn-secondary {
  background: var(--bg);
  border: 1px solid var(--border);
  color: var(--text);
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  transition: background 0.2s;
}
.btn-secondary:hover {
  background: var(--bg-secondary);
  border-color: var(--primary);
}
.batch-list {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.batch-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--bg);
  padding: 0.75rem 1rem;
  border-radius: 8px;
}
.batch-pw {
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  word-break: break-all;
}
.btn-icon-sm {
  background: transparent;
  border: none;
  color: var(--text-secondary);
  padding: 0.25rem;
  display: flex;
  cursor: pointer;
}
.btn-icon-sm:hover {
  color: var(--primary);
}
</style>
