<script setup>
import { onMounted, onUnmounted } from 'vue'
import CarouselBanner from '../components/CarouselBanner.vue'
import ProductCard from '../components/ProductCard.vue'

const props = defineProps({
  products: { type: Array, required: true }
})

onMounted(() => { console.log(`HomeView mounted — ${props.products.length} products loaded`) })
onUnmounted(() => { console.log('HomeView unmounted') })
</script>

<template>
  <div>
    <!-- Carousel -->
    <CarouselBanner />

    <!-- Our Products -->
    <h2 style="font-size: 1.5rem; font-weight: bold; color: white; margin-bottom: 1.5rem;">
      Our Products
    </h2>

    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>