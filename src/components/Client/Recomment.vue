<script>
import ProductsComponent from '../ProductsComponent.vue';
import featureList from '../featureList.vue';
export default {
  name: 'Recomment',
  components: {
    ProductsComponent,
    featureList
  },
  props: {
    image: {
      type: String,
      default: '/image/p2.png'
    }
  },

  methods: {
    addToCart(productId) {
      console.log('Added product', productId, 'to cart');
      // Emit event or call API
    },
    viewAll() {
      // Navigate to products page
      this.$router.push('/products');
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % Math.ceil(this.products.length / 4);
    },
    prevSlide() {
      this.currentSlide = this.currentSlide === 0 ? Math.ceil(this.products.length / 4) - 1 : this.currentSlide - 1;
    }
  }
}
</script>

<template>
  <section class="relative mt-16">
    <div class="max-w-7xl  px-4 sm:px-6 lg:px-8">
      
      <!-- Header Section with Banner -->
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
        
        <!-- Left Banner - Hero Section -->
        <div class="lg:col-span-1 relative overflow-hidden rounded-2xl bg-cover  p-8 flex flex-col justify-between min-h-80 " :style="{ backgroundImage: `url(${image})`  } ">
          <div class="relative z-10">
            <h3 class="text-2xl font-bold text-gray-900 leading-tight mb-6">
              Flex On All<br/>The Others
            </h3>
            <button 
              @click="viewAll"
              class="inline-flex items-center gap-2 text-gray-900 font-semibold hover:text-blue-600 transition group"
            >
              Shop Now
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Right Section - Products and Title  ssss-->
        <div >
            <featureList title="Recommended For You" :items="'View All'" :gap="'false'" />
            <div class="flex grid-cols-1 lg:col-span-3 gap-6 mb-12">
                <ProductsComponent />
                <ProductsComponent />
                <ProductsComponent />
                <ProductsComponent />
            </div>
            
        </div>
      </div>

 
    </div>
  </section>
</template>

<style scoped>
 

.min-h-80 {
  min-height: 20rem;
}

/* Smooth transitions */
button {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Image hover effects */
img {
  backface-visibility: hidden;
  -webkit-font-smoothing: antialiased;
}
</style>