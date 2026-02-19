<script>
import HeaderView from '../Client/HeaderView.vue';
import SearchComponent from '@/components/SearchComponent.vue';
import Home from '@/components/Home.vue';
import BodyView from '../Client/BodyView.vue';
import FooterView from './FooterView.vue';

export default {
  name: 'HomeView',
  components: {
    HeaderView,
    SearchComponent,
    Home,
    BodyView,
    FooterView
  }
}
</script>

<template>
  <div class="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-br from-white via-blue-50 to-indigo-100">

    <!-- Animated Background Elements -->
    <div class="absolute inset-0 -z-10 overflow-hidden">
      
      <!-- Gradient Blur Circles -->
      <div class="absolute top-0 left-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div class="absolute top-0 right-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div class="absolute -bottom-8 left-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <!-- Grid Pattern Overlay -->
      <div class="absolute inset-0 opacity-5" style="background-image: url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><rect fill=%22%23000%22 width=%221%22 height=%221%22/></svg>'); background-size: 50px 50px;"></div>
      
      <!-- Floating Icons with Floating Animation -->
      <div class="floating-icon" style="top: 10%; left: 8%; animation-duration: 6s; animation-delay: 0s;">🛍</div>
      <div class="floating-icon" style="top: 25%; right: 10%; animation-duration: 8s; animation-delay: 1s;">👟</div>
      <div class="floating-icon" style="top: 55%; left: 5%; animation-duration: 7s; animation-delay: 2s;">⌚</div>
      <div class="floating-icon" style="bottom: 20%; right: 5%; animation-duration: 9s; animation-delay: 0.5s;">🎧</div>
      <div class="floating-icon" style="top: 40%; left: 50%; animation-duration: 6.5s; animation-delay: 1.5s;">💻</div>
      
      <!-- Accent Shapes -->
      <div class="absolute top-1/4 right-1/4 w-72 h-72 border border-blue-200 rounded-full opacity-10 animate-spin-slow"></div>
      <div class="absolute bottom-1/3 left-1/4 w-64 h-64 border border-purple-200 rounded-lg opacity-10 transform -rotate-45 animate-pulse"></div>
    </div>

    <!-- Header -->
    <HeaderView />

    <!-- Hero Section -->
    <Home />

    <!-- Body Section -->
    <div class="mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
      <BodyView />
    </div>

    <!-- Footer Section -->
    <FooterView />
    
  </div>
</template>

<style scoped>
/* Floating Icons */
.floating-icon {
  position: absolute;
  font-size: 3.5rem;
  opacity: 0.12;
  animation: float 6s ease-in-out infinite;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.05));
  pointer-events: none;
}

/* Floating Animation */
@keyframes float {
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-15px) rotate(2deg);
  }
  50% {
    transform: translateY(-25px) rotate(0deg);
  }
  75% {
    transform: translateY(-10px) rotate(-2deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
}

/* Blob Animation */
@keyframes blob {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(20px, -50px) scale(1.1);
  }
  50% {
    transform: translate(-20px, -20px) scale(0.9);
  }
  75% {
    transform: translate(50px, 20px) scale(1.05);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

/* Slow Spin Animation */
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}

/* Smooth Transitions */
.floating-icon {
  transition: opacity 0.3s ease;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .floating-icon {
    font-size: 2.5rem;
    opacity: 0.08;
  }
}

@media (max-width: 640px) {
  .floating-icon {
    font-size: 2rem;
    opacity: 0.06;
  }
}
</style>