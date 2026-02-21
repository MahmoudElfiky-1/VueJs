<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import NavBar from './components/NavBar.vue'

const products = ref([
  {
    id: 1,
    name: "Cozy Sneakers",
    description: "High-quality sneakers that go with everything you wear.",
    image: "https://tse1.mm.bing.net/th/id/OIP.10U9fBSi44kXdr8F3xfvUwHaJb?rs=1&pid=ImgDetMain&o=7&rm=3",
    badge: "NEW",
    price: 120,
    discount: 20,
    stock: 10,
    tags: ["Fashion", "Casual", "Sport"]
  },
  {
    id: 2,
    name: "Running Shoes",
    description: "Built for speed and comfort on any terrain.",
    image: "https://cdn.thewirecutter.com/wp-content/media/2023/09/running-shoes-2048px-5960.jpg",
    badge: "",
    price: 90,
    discount: 10,
    stock: 5,
    tags: ["Sport", "Running"]
  },
  {
    id: 3,
    name: "Casual Boots",
    description: "Rugged boots for everyday adventures.",
    image: "https://tse1.mm.bing.net/th/id/OIP.RdPavqjHv2j6plXC2obaPwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    badge: "SALE",
    price: 150,
    discount: 0,
    stock: 8,
    tags: ["Casual", "Winter"]
  },
  {
    id: 4,
    name: "Flip Flops",
    description: "Light and breezy for sunny days.",
    image: "https://tse2.mm.bing.net/th/id/OIP.ex03GpEhiKfZOdeR6WcDnwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    badge: "",
    price: 30,
    discount: 50,
    stock: 20,
    tags: ["Summer", "Casual"]
  }
])

function handleBuy(productId) {
  const product = products.value.find(p => p.id === productId)
  if (product && product.stock > 0) {
    product.stock--
    console.log(`App.vue — Bought product ID: ${productId}. Stock now: ${product.stock}`)
  }
}

onMounted(() => {
  console.log('App.vue mounted — root component')
})

onUnmounted(() => {
  console.log('App.vue unmounted')
})
</script>

<template>
  <div style="min-height: 100vh; display: flex; flex-direction: column; background-color: #0f1218; color: #e0e0e0; font-family: sans-serif;">
    
    <NavBar />

    <!-- Centered Content Wrapper -->
    <main style="flex: 1; width: 100%; max-width: 1100px; margin: 0 auto; padding: 2rem 1.5rem;">
      <router-view v-slot="{ Component }">
        <component
          :is="Component"
          :products="products"
          @buy="handleBuy"
        />
      </router-view>
    </main>

    <!-- Footer -->
    <footer style="text-align: center; padding: 2rem; background-color: #111520; color: #888; border-top: 1px solid #1e2330;">
      <p style="font-weight: bold; font-size: 1.1rem; color: white; margin-bottom: 0.3rem;">ShoeStore</p>
      <p>© 2026 — All rights reserved</p>
    </footer>
  </div>
</template>