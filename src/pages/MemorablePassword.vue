<template>
  <div class="page">
    <section class="hero">
      <h1>Memorable Password Generator</h1>
      <p class="subtitle">Generate strong passwords that are easier to remember. Use longer lengths with familiar character patterns while maintaining high security.</p>
    </section>
    <PasswordGenerator />
    <section class="content">
      <h2>Balancing Security and Memorability</h2>
      <p>While we recommend using a password manager, sometimes you need passwords you can actually remember. The key is length — a longer password with fewer character types can be just as secure as a shorter complex one.</p>
      <h3>Memorability Tips</h3>
      <ul>
        <li>Use 20+ characters with just lowercase and numbers for easy typing</li>
        <li>Create a mental story or pattern from the generated characters</li>
        <li>For your master password, consider a passphrase of 4+ random words</li>
        <li>Practice typing the password a few times to build muscle memory</li>
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
