import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

const routes = [
  { path: '/', component: () => import('./pages/Home.vue') },
  { path: '/strong-password-generator', component: () => import('./pages/StrongPassword.vue') },
  { path: '/random-password-16-characters', component: () => import('./pages/Random16.vue') },
  { path: '/secure-password-generator', component: () => import('./pages/SecurePassword.vue') },
  { path: '/memorable-password-generator', component: () => import('./pages/MemorablePassword.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 动态更新页面 meta
router.afterEach((to) => {
  const meta: Record<string, { title: string; description: string }> = {
    '/': { title: 'Password Generator - Create Strong & Secure Passwords', description: 'Generate strong, random passwords instantly. Customize length, characters, and create secure passwords for all your accounts.' },
    '/strong-password-generator': { title: 'Strong Password Generator - Unbreakable Passwords', description: 'Create ultra-strong passwords with our generator. Mix uppercase, lowercase, numbers, and symbols for maximum security.' },
    '/random-password-16-characters': { title: 'Random Password Generator - 16 Characters', description: 'Generate random 16-character passwords. The ideal length for strong security across all platforms.' },
    '/secure-password-generator': { title: 'Secure Password Generator - Bank-Level Security', description: 'Generate cryptographically secure passwords. Perfect for banking, email, and sensitive accounts.' },
    '/memorable-password-generator': { title: 'Memorable Password Generator - Easy to Remember', description: 'Generate strong passwords that are still easy to remember. Balance security with memorability.' },
  }
  const m = meta[to.path as string]
  if (m) {
    document.title = m.title
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', m.description)
  }
})

createApp(App).use(router).mount('#app')
