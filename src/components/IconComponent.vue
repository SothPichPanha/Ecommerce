<script>
export default {
  name: 'IconComponent'
}
</script>

<template>
    <div class="flex items-center gap-6">
    <!-- User -->
    <button class="text-gray-800 hover:text-blue-600 text-xl">
      <i class="pi pi-user"></i>
    </button>

    <!-- Wishlist -->
    <button class="relative text-gray-800 hover:text-blue-600 text-xl">
      <i class="pi pi-heart"></i>

      <span
        class="absolute -top-2 -right-3 min-w-[18px] h-[18px]
               bg-black text-white text-xs rounded-full
               flex items-center justify-center"
      >
        0
      </span>
    </button>

    <!-- Cart -->
    <button class="relative text-gray-800 hover:text-blue-600 text-xl">
      <i class="pi pi-shopping-cart"></i>

      <span
        class="absolute -top-2 -right-3 min-w-[18px] h-[18px]
               bg-black text-white text-xs rounded-full
               flex items-center justify-center"
      >
        0
      </span>
    </button>
  </div>
</template>