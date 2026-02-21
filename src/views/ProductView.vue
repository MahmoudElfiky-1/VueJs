<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import ProductDetails from '../components/ProductDetails.vue'
import ProductCard from '../components/ProductCard.vue'

const props = defineProps({
  products: { type: Array, required: true }
})

const emit = defineEmits(['buy'])
const route = useRoute()

const currentProduct = computed(() => {
  const id = Number(route.params.id)
  return props.products.find(p => p.id === id)
})

const relatedProducts = computed(() => {
  const id = Number(route.params.id)
  return props.products.filter(p => p.id !== id)
})

function onBuy(productId) {
  console.log(`ProductView — relaying buy event for ID: ${productId}`)
  emit('buy', productId)
}

onMounted(() => { console.log(`ProductView mounted for ID: ${route.params.id}`) })
onUnmounted(() => { console.log('ProductView unmounted') })
</script>

<template>
  <div>
    <div v-if="currentProduct">
      <!-- Product Details -->
      <ProductDetails
        :product="currentProduct"
        @buy="onBuy"
      />

      <!-- Related Products -->
      <div style="margin-top: 3rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
          <h2 style="font-size: 1.5rem; font-weight: bold; color: white; margin: 0;">
            Related Products
          </h2>
          <span style="padding: 0.3rem 0.7rem; border: 1px solid #444; border-radius: 6px; color: #aaa; font-size: 0.85rem;">
            {{ relatedProducts.length }} items
          </span>
        </div>

        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
          <ProductCard
            v-for="item in relatedProducts"
            :key="item.id"
            :product="item"
          />
        </div>
      </div>
    </div>

    <!-- Not Found -->
    <div v-else style="text-align: center; padding: 5rem 0;">
      <h2 style="font-size: 2rem; color: #ef4444;">Product Not Found</h2>
      <p style="color: #888; margin-top: 1rem;">The product you're looking for doesn't exist.</p>
    </div>
  </div>
</template>