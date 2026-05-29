<template>
  <div class="page">
    <section class="hero">
      <h1>Strong Password Generator</h1>
      <p class="subtitle">Create unbreakable passwords with maximum entropy. Our generator uses cryptographic randomness to produce passwords that resist all known attack methods.</p>
    </section>
    <PasswordGenerator />
    <section class="content">
      <h2>What Makes a Password Strong?</h2>
      <p>A strong password combines length with character diversity. Passwords of 16+ characters using uppercase, lowercase, numbers, and symbols provide billions of years of protection against brute-force attacks.</p>
      <h3>Tips for Strong Passwords</h3>
      <ul>
        <li>Use at least 16 characters for critical accounts</li>
        <li>Include all character types: uppercase, lowercase, numbers, and symbols</li>
        <li>Never reuse passwords across different services</li>
        <li>Use a password manager to store your generated passwords</li>
        <li>Enable two-factor authentication wherever possible</li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import PasswordGenerator from '../components/PasswordGenerator.vue'
</script>

<style scoped>
.hero { text-align: center; margin-bottom: 2rem; }
h1 { font-size: 2.5rem; margin-bottom: 0.75rem; }
.subtitle { color: var(--text-secondary); font-size: 1.1rem; max-width: 600px; margin: 0 auto; }
.content { margin-top: 3rem; max-width: 700px; }
.content h2 { font-size: 1.5rem; margin-bottom: 1rem; }
.content h3 { margin-top: 1.5rem; margin-bottom: 0.75rem; }
.content p { color: var(--text-secondary); margin-bottom: 1rem; line-height: 1.7; }
.content ul { color: var(--text-secondary); padding-left: 1.5rem; }
.content li { margin-bottom: 0.5rem; }
</style>
