<template>
  <div class="page">
    <section class="hero">
      <h1>Random Password Generator</h1>
      <p class="subtitle">Generate strong, secure passwords instantly. All generation happens locally in your browser — nothing is sent to any server.</p>
    </section>
    <PasswordGenerator />
    <section class="info">
      <h2>Why Use a Password Generator?</h2>
      <div class="features">
        <div class="feature">
          <Shield :size="32" />
          <h3>Maximum Security</h3>
          <p>Cryptographically random passwords that are virtually impossible to crack through brute force.</p>
        </div>
        <div class="feature">
          <Zap :size="32" />
          <h3>Instant Generation</h3>
          <p>Create passwords instantly with customizable length and character options.</p>
        </div>
        <div class="feature">
          <Lock :size="32" />
          <h3>100% Private</h3>
          <p>All passwords are generated locally in your browser. Nothing is stored or transmitted.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Shield, Zap, Lock } from 'lucide-vue-next'
import PasswordGenerator from '../components/PasswordGenerator.vue'
</script>

<style scoped>
.hero {
  text-align: center;
  margin-bottom: 2rem;
}
h1 {
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
}
.subtitle {
  color: var(--text-secondary);
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
}
.info {
  margin-top: 3rem;
}
.info h2 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.75rem;
}
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}
.feature {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.5rem;
  text-align: center;
}
.feature h3 {
  margin: 1rem 0 0.5rem;
}
.feature p {
  color: var(--text-secondary);
  font-size: 0.9rem;
}
</style>
