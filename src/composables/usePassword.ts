import { ref, computed } from 'vue'

export interface PasswordOptions {
  length: number
  uppercase: boolean
  lowercase: boolean
  numbers: boolean
  symbols: boolean
}

const CHARS = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?',
}

export function generatePassword(opts: PasswordOptions): string {
  let charset = ''
  if (opts.uppercase) charset += CHARS.uppercase
  if (opts.lowercase) charset += CHARS.lowercase
  if (opts.numbers) charset += CHARS.numbers
  if (opts.symbols) charset += CHARS.symbols
  if (!charset) charset = CHARS.lowercase

  const array = new Uint32Array(opts.length)
  crypto.getRandomValues(array)
  return Array.from(array, (v) => charset[v % charset.length]).join('')
}

export function getPasswordStrength(password: string): { score: number; label: string; color: string } {
  let score = 0
  if (password.length >= 8) score++
  if (password.length >= 12) score++
  if (password.length >= 16) score++
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++
  if (/\d/.test(password)) score++
  if (/[^a-zA-Z0-9]/.test(password)) score++

  if (score <= 2) return { score, label: 'Weak', color: 'var(--danger)' }
  if (score <= 4) return { score, label: 'Medium', color: 'var(--warning)' }
  return { score, label: 'Strong', color: 'var(--success)' }
}

export function usePasswordGenerator() {
  const options = ref<PasswordOptions>({
    length: 16,
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  })

  const password = ref(generatePassword(options.value))
  const strength = computed(() => getPasswordStrength(password.value))

  function regenerate() {
    password.value = generatePassword(options.value)
  }

  function generateBatch(count: number): string[] {
    return Array.from({ length: count }, () => generatePassword(options.value))
  }

  async function copyToClipboard(text: string): Promise<boolean> {
    try {
      await navigator.clipboard.writeText(text)
      return true
    } catch {
      return false
    }
  }

  return { options, password, strength, regenerate, generateBatch, copyToClipboard }
}
