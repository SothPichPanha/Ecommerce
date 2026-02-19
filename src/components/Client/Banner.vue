<script>
export default {
  name: 'Banner',
  data() {
    return {
      activeSlide: 0,
      slides: [
        {
          id: 1,
          title: 'Be At One\nWith Your Music',
          subtitle: 'WH-1000XM4 Wireless Noise Cancelling',
          bgImage: '/image/ba1.png',
          dotColor: 'bg-blue-600'
        },
      ]
    }
  },
  methods: {
    nextSlide() {
      this.activeSlide = (this.activeSlide + 1) % this.slides.length;
    },
    prevSlide() {
      this.activeSlide = (this.activeSlide - 1 + this.slides.length) % this.slides.length;
    },
    goToSlide(index) {
      this.activeSlide = index;
    }
  },
  mounted() {
    setInterval(() => {
      this.nextSlide();
    }, 6000);
  }
}
</script>

<template>
  <div>
    <div class="h-[400px] relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50">
      <div class="absolute inset-0">
        <div 
          v-for="(slide, index) in slides" 
          :key="slide.id"
          class="absolute inset-0 transition-opacity duration-1000"
          :class="{ 'opacity-100': activeSlide === index, 'opacity-0': activeSlide !== index }"
        >
          <!-- Slide Background with Image -->
          <div 
            class="w-full h-full bg-cover bg-center bg-no-repeat relative"
            :style="{ backgroundImage: `url('${slide.bgImage}')` }"
          >
            <!-- Overlay gradient for better text readability -->
            <div class="absolute inset-0 "></div>
            
            <div class="max-w-9xl mx-auto w-full px-6 lg:px-8 h-full relative z-10 flex items-center">
              <!-- Content -->
              <div class="flex flex-col justify-center lg:w-1/2">
                <h1 class="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 whitespace-pre-line">
                  {{ slide.title }}
                </h1>
                <p class="text-lg text-gray-600 mb-8">{{ slide.subtitle }}</p>
                <button class="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition inline-flex items-center gap-2 w-fit">
                  Discover More
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  </div>
</template>

<style scoped>
/* Smooth transitions */
* {
  transition-property: background-color, color, border-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>