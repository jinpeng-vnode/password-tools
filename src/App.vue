<template>
  <div class="app">
    <header class="header">
      <nav class="nav">
        <router-link to="/" class="logo">
          <Lock :size="24" />
          <span>PasswordTools</span>
        </router-link>
        <div class="nav-links">
          <router-link to="/strong-password-generator">Strong</router-link>
          <router-link to="/random-password-16-characters">16 Chars</router-link>
          <router-link to="/secure-password-generator">Secure</router-link>
          <router-link to="/memorable-password-generator">Memorable</router-link>
        </div>
      </nav>
    </header>
    <main class="main">
      <router-view />
    </main>
    <footer class="footer">
      <p>&copy; 2024 PasswordTools. All passwords are generated locally in your browser.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { Lock } from 'lucide-vue-next'
</script>

<style scoped>
.header {
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--border);
  padding: 1rem 2rem;
}
.nav {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text);
  text-decoration: none;
}
.nav-links {
  display: flex;
  gap: 1.5rem;
}
.nav-links a {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s;
}
.nav-links a:hover,
.nav-links a.router-link-active {
  color: var(--primary);
}
.main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  min-height: calc(100vh - 160px);
}
.footer {
  text-align: center;
  padding: 2rem;
  color: var(--text-secondary);
  font-size: 0.85rem;
  border-top: 1px solid var(--border);
}
</style>
