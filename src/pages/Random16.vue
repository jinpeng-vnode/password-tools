<template>
  <div class="page">
    <section class="hero">
      <h1>Random Password Generator - 16 Characters</h1>
      <p class="subtitle">Generate random 16-character passwords — the sweet spot between security and usability. Long enough to resist attacks, short enough for most password fields.</p>
    </section>
    <PasswordGenerator />
    <section class="content">
      <h2>Why 16 Characters?</h2>
      <p>A 16-character password using all character types has approximately 10^31 possible combinations. At 1 billion guesses per second, it would take over 3 trillion years to crack.</p>
      <h3>16-Character Password Facts</h3>
      <ul>
        <li>Exceeds requirements for all major platforms (Google, Apple, Microsoft)</li>
        <li>Provides 95+ bits of entropy with full character set</li>
        <li>Compatible with virtually all password fields</li>
        <li>Recommended by NIST for high-security applications</li>
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
