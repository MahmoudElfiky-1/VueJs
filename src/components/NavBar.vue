<script setup>
import { onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

onMounted(() => { console.log('NavBar mounted') })
onUnmounted(() => { console.log('NavBar unmounted') })
</script>

<template>
  <nav style="display: flex; align-items: center; justify-content: space-between; padding: 0.8rem 2rem; background-color: #111520; border-bottom: 1px solid #1e2330; position: sticky; top: 0; z-index: 100;">
    <RouterLink to="/" style="font-size: 1.4rem; font-weight: bold; color: #6366f1; text-decoration: none;">
      ShoeStore
    </RouterLink>

    <div style="display: flex; gap: 1.8rem;">
      <RouterLink to="/" style="color: #ccc; text-decoration: none; font-size: 0.95rem;">Home</RouterLink>
      <RouterLink to="/product/1" style="color: #ccc; text-decoration: none; font-size: 0.95rem;">Product</RouterLink>
      <RouterLink to="/about" style="color: #ccc; text-decoration: none; font-size: 0.95rem;">About</RouterLink>
    </div>
  </nav>
</template>