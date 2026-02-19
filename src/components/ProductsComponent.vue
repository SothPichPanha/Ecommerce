<script>
import { onMounted, computed, ref } from 'vue';
import Addtocart from './helpComponent/Addtocart.vue';
import { useProductStore } from '@/services/store.js';

export default {
  name: 'ProductsComponent',
  props: {
    productId: {
      type: [String, Number],
      required: true,
    },
  },
  components: {
    Addtocart,
  },
  setup(props, { emit }) {
    const productStore = useProductStore();

    onMounted(() => {
      if (!productStore.products.length) {
        productStore.loadProducts();
      }
    });

    const product = computed(() => productStore.getProductById(props.productId) || {});
    const isFavorite = ref(false);
    const isHovered = ref(false);

    const toggleFavorite = (e) => {
      e.stopPropagation();
      isFavorite.value = !isFavorite.value;
      emit('toggle-favorite', {
        productId: props.productId,
        isFavorite: isFavorite.value,
      });
    };

    const handleViewProduct = () => emit('view-product', props.productId);
    const handleAddToCart = () => emit('add-to-cart', props.productId);

    return {
      product,
      isFavorite,
      isHovered,
      toggleFavorite,
      handleViewProduct,
      handleAddToCart,
    };
  },
};
</script>

<template>
  <div class="w-[260px]">
    <div 
      class="w-full h-[470px] bg-white border border-gray-300 rounded-lg hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      
      <!-- Image Section -->
      <div class="relative w-full h-[256px] bg-gray-100 rounded-tl-lg rounded-tr-lg overflow-visible group">
        
        <!-- Background Image with Hover Scale -->
        <img 
          :src="product.image"
          :alt="product.title"
          class="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />

        <!-- Favorite Button - Top Right -->
        <button
          @click="toggleFavorite"
          class="absolute top-3 right-3 z-20 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110 opacity-0 group-hover:opacity-100"
          :class="{ 'bg-red-50': isFavorite }"
          title="Add to favorites"
        >
          <svg
            class="w-5 h-5 transition-colors duration-200"
            :class="{ 
              'text-red-500 fill-red-500': isFavorite, 
              'text-gray-400': !isFavorite 
            }"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>

        <!-- View/Eye Icon - Top Right (below favorite) -->
        <button
          @click="handleViewProduct"
          class="absolute top-14 right-3 z-20 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110 opacity-0 group-hover:opacity-100"
          title="View product"
        >
          <svg
            class="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        </button>
      </div>

      <!-- Product Info Section -->
      <div class="flex-1 p-3 flex flex-col justify-between">
        
        <!-- Title and Description -->
        <div>
          <p v-if="product.brand" class="text-xs text-gray-500 uppercase tracking-wide mb-1">{{ product.brand }}</p>
          <h3 class="text-sm font-bold text-gray-900 line-clamp-2 mb-2">{{ product.title }}</h3>
          <p class="text-xs text-gray-500 line-clamp-2 mb-2">{{ product.description }}</p>
        </div>

        <!-- Price and Action Button -->
        <div class="space-y-3 ">
          <p class="text-base font-bold text-gray-900 ">{{ product.price }} $</p>
          <Addtocart 
            @add-to-cart="handleAddToCart"
            :product-id="productId"
          />
        </div>
      </div>
      
    </div>
  </div>
</template>

<style scoped>
/* Smooth transitions for all interactive elements */
button {
  transition: all 0.2s ease-in-out;
}

button:active {
  transform: scale(0.95);
}

/* Line clamp for multi-line text */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
