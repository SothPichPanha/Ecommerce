<script>
export default {
  name: 'Home',
  data() {
    return {
      activeSlide: 0,
      slides: [
        {
          id: 1,
          title: 'Be At One\nWith Your Music',
          subtitle: 'WH-1000XM4 Wireless Noise Cancelling',
          image: 'silver',
          bgImage: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 300%22%3E%3Ccircle cx=%22150%22 cy=%22150%22 r=%22120%22 fill=%22%23e8e4df%22 opacity=%220.9%22/%3E%3Cpath d=%22M100 150 Q100 110 150 110 Q200 110 200 150%22 stroke=%22%23d4cfc5%22 stroke-width=%228%22 fill=%22none%22 stroke-linecap=%22round%22/%3E%3Ccircle cx=%22100%22 cy=%22150%22 r=%2225%22 fill=%22%23ddd8cd%22/%3E%3Ccircle cx=%22200%22 cy=%22150%22 r=%2225%22 fill=%22%23ddd8cd%22/%3E%3C/svg%3E',
          dotColor: 'bg-blue-600'
        },
        {
          id: 2,
          title: 'Experience Perfect\nSound Quality',
          subtitle: 'Premium audio with advanced noise cancellation',
          image: 'black',
          bgImage: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 300%22%3E%3Ccircle cx=%22150%22 cy=%22150%22 r=%22120%22 fill=%22%23333333%22 opacity=%220.95%22/%3E%3Cpath d=%22M100 150 Q100 110 150 110 Q200 110 200 150%22 stroke=%22%23444444%22 stroke-width=%228%22 fill=%22none%22 stroke-linecap=%22round%22/%3E%3Ccircle cx=%22100%22 cy=%22150%22 r=%2225%22 fill=%22%232a2a2a%22/%3E%3Ccircle cx=%22200%22 cy=%22150%22 r=%2225%22 fill=%22%232a2a2a%22/%3E%3C/svg%3E',
          dotColor: 'bg-gray-400'
        },
        {
          id: 3,
          title: 'All Day\nComfort & Battery',
          subtitle: '30 hours of battery life on a single charge',
          image: 'silver',
          bgImage: '/image/handphone.jpg',
          dotColor: 'bg-gray-300'
        }
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
  <div class="w-full bg-white" :style="{ backgroundImage: `url('${slides[activeSlide].bgImage}')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }">
    <div class="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50">
      <div class="absolute inset-0">
        <div 
          v-for="(slide, index) in slides" 
          :key="slide.id"
          class="absolute inset-0 transition-opacity duration-1000"
          :class="{ 'opacity-100': activeSlide === index, 'opacity-0': activeSlide !== index }"
        >
          <div class="h-full flex items-center">
            <div class="max-w-9xl mx-auto w-full px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center ml-[50px]">
              <!-- Content -->
              <div class="z-10">
                <h1 class="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 whitespace-pre-line">
                  {{ slide.title }}
                </h1>
                <p class="text-lg text-gray-600 mb-8">{{ slide.subtitle }}</p>
                <button class="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition inline-flex items-center gap-2">
                  Discover More
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>

              <!-- Product Images -->
              <div class="relative h-96 lg:h-full flex items-center justify-end">
                <div class="relative w-full h-full flex items-center justify-center">
                  <!-- Floating shadow effect -->
                  <div class="absolute inset-0 flex items-center justify-center">
                    <div class="w-64 h-64 bg-gradient-to-br from-gray-200 to-transparent rounded-full filter blur-3xl opacity-20 absolute"></div>
                  </div>

                  <!-- Headphones Background Image -->
                  <div 
                    class="relative z-10 w-96 h-96 transition-transform duration-500 bg-cover bg-center bg-contain bg-no-repeat rounded-full drop-shadow-2xl"
                    :style="{ backgroundImage: `url('${slide.bgImage}')` }"
                    :class="{ 'translate-y-0 rotate-0': activeSlide === index, 'translate-y-8 rotate-12': activeSlide !== index }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Slide Indicators -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        <button 
          v-for="(slide, index) in slides"
          :key="index"
          @click="goToSlide(index)"
          class="rounded-full transition-all duration-300"
          :class="activeSlide === index ? 'bg-blue-600 w-8 h-2' : 'bg-gray-300 w-2 h-2 hover:bg-gray-400'"
        ></button>
      </div>

      <!-- Navigation Arrows -->
      <button 
        @click="prevSlide"
        class="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
      <button 
        @click="nextSlide"
        class="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
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