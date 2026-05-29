<template>
  <div class="page">
    <section class="hero">
      <h1>Secure Password Generator</h1>
      <p class="subtitle">Bank-level security for your passwords. Uses the Web Crypto API for true cryptographic randomness — no pseudo-random algorithms.</p>
    </section>
    <PasswordGenerator />
    <section class="content">
      <h2>Cryptographically Secure Generation</h2>
      <p>Our generator uses <code>crypto.getRandomValues()</code>, the same cryptographic primitive used by banks and security software. This ensures true randomness that cannot be predicted or reproduced.</p>
      <h3>Security Best Practices</h3>
      <ul>
        <li>Use unique passwords for every account</li>
        <li>Change passwords immediately if a service reports a breach</li>
        <li>Store passwords in an encrypted password manager</li>
        <li>Never share passwords via email or messaging apps</li>
        <li>Avoid passwords based on personal information</li>
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
.content code { background: var(--bg); padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.85rem; }
.content ul { color: var(--text-secondary); padding-left: 1.5rem; }
.content li { margin-bottom: 0.5rem; }
</style>
