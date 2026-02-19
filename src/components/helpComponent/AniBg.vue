<script>
export default {
  name: 'AniBg',
  props: {
    type: {
      type: String,
      default: 'gradient', // gradient, particles, waves, blobs, nebula
      validator: (value) => ['gradient', 'particles', 'waves', 'blobs', 'nebula'].includes(value)
    }
  }
}
</script>

<template>
  <div class="ani-bg-container">
    <!-- Gradient Animation -->
    <div v-if="type === 'gradient'" class="ani-bg ani-gradient">
      <div class="gradient-1"></div>
      <div class="gradient-2"></div>
      <div class="gradient-3"></div>
    </div>

    <!-- Particles Animation -->
    <div v-else-if="type === 'particles'" class="ani-bg ani-particles">
      <div v-for="i in 30" :key="`particle-${i}`" class="particle" :style="{ '--delay': `${i * 0.1}s` }"></div>
    </div>

    <!-- Waves Animation -->
    <div v-else-if="type === 'waves'" class="ani-bg ani-waves">
      <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path fill="#3b82f6" fill-opacity="0.5" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,128C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
      <svg viewBox="0 0 1440 320" preserveAspectRatio="none" style="animation-delay: -2s">
        <path fill="#60a5fa" fill-opacity="0.3" d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,176C672,160,768,160,864,176C960,192,1056,224,1152,229.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>

    <!-- Blobs Animation -->
    <div v-else-if="type === 'blobs'" class="ani-bg ani-blobs">
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>
      <div class="blob blob-3"></div>
      <div class="blob blob-4"></div>
    </div>

    <!-- Nebula Animation -->
    <div v-else-if="type === 'nebula'" class="ani-bg ani-nebula">
      <div class="nebula-layer nebula-1"></div>
      <div class="nebula-layer nebula-2"></div>
      <div class="nebula-layer nebula-3"></div>
      <div class="space-dust"></div>
    </div>
  </div>
</template>

<style scoped>
.ani-bg-container {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
}

.ani-bg {
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
}

/* ============ GRADIENT ANIMATION ============ */
.ani-gradient {
  background: linear-gradient(45deg, #667eea, #764ba2);
}

.ani-gradient .gradient-1,
.ani-gradient .gradient-2,
.ani-gradient .gradient-3 {
  position: absolute;
  inset: 0;
  opacity: 0.5;
  mix-blend-mode: screen;
  animation: gradient-shift 15s ease-in-out infinite;
}

.ani-gradient .gradient-1 {
  background: radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.8) 0%, transparent 50%);
  animation-delay: 0s;
}

.ani-gradient .gradient-2 {
  background: radial-gradient(circle at 80% 80%, rgba(118, 75, 162, 0.8) 0%, transparent 50%);
  animation-delay: -5s;
}

.ani-gradient .gradient-3 {
  background: radial-gradient(circle at 40% 60%, rgba(244, 114, 182, 0.6) 0%, transparent 50%);
  animation-delay: -10s;
}

@keyframes gradient-shift {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

/* ============ PARTICLES ANIMATION ============ */
.ani-particles {
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
}

.ani-particles .particle {
  position: absolute;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 70%);
  border-radius: 50%;
  pointer-events: none;
  width: var(--size, 4px);
  height: var(--size, 4px);
  --size: calc(4px + random() * 8px);
  animation: particle-float 20s infinite linear;
  animation-delay: var(--delay);
  left: calc(random() * 100%);
  top: calc(random() * 100%);
}

.ani-particles .particle:nth-child(1) { --size: 2px; left: 10%; top: 20%; }
.ani-particles .particle:nth-child(2) { --size: 4px; left: 80%; top: 80%; }
.ani-particles .particle:nth-child(3) { --size: 3px; left: 50%; top: 50%; }
.ani-particles .particle:nth-child(4) { --size: 5px; left: 20%; top: 80%; }
.ani-particles .particle:nth-child(5) { --size: 2px; left: 90%; top: 10%; }
.ani-particles .particle:nth-child(6) { --size: 6px; left: 30%; top: 30%; }
.ani-particles .particle:nth-child(7) { --size: 3px; left: 60%; top: 10%; }
.ani-particles .particle:nth-child(8) { --size: 4px; left: 70%; top: 40%; }
.ani-particles .particle:nth-child(9) { --size: 2px; left: 15%; top: 60%; }
.ani-particles .particle:nth-child(10) { --size: 5px; left: 85%; top: 50%; }
.ani-particles .particle:nth-child(n+11) {
  opacity: 0.6;
}

@keyframes particle-float {
  0% {
    opacity: 0;
    transform: translateY(0) translateX(0);
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(-100vh) translateX(100px);
  }
}

/* ============ WAVES ANIMATION ============ */
.ani-waves {
  background: linear-gradient(180deg, #f0f9ff 0%, #e0f2fe 100%);
  overflow: hidden;
}

.ani-waves svg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
  transform-origin: center bottom;
}

.ani-waves svg:nth-child(2) {
  animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -3.5s infinite;
  opacity: 0.5;
}

@keyframes wave {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(25%);
  }
  100% {
    transform: translateX(0);
  }
}

/* ============ BLOBS ANIMATION ============ */
.ani-blobs {
  background: radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.2) 0%, transparent 50%);
  background-color: #fff;
}

.ani-blobs .blob {
  position: absolute;
  background: linear-gradient(45deg, #a855f7, #6366f1);
  border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  filter: blur(40px);
  opacity: 0.7;
  mix-blend-mode: multiply;
}

.ani-blobs .blob-1 {
  width: 200px;
  height: 200px;
  top: 10%;
  left: 10%;
  animation: blob-motion 7s ease-in-out infinite;
  background: linear-gradient(45deg, #a855f7, #ec4899);
}

.ani-blobs .blob-2 {
  width: 300px;
  height: 300px;
  top: 40%;
  right: 10%;
  animation: blob-motion 8s ease-in-out infinite;
  animation-delay: 2s;
  background: linear-gradient(45deg, #3b82f6, #8b5cf6);
}

.ani-blobs .blob-3 {
  width: 250px;
  height: 250px;
  bottom: 10%;
  left: 30%;
  animation: blob-motion 9s ease-in-out infinite;
  animation-delay: 4s;
  background: linear-gradient(45deg, #06b6d4, #3b82f6);
}

.ani-blobs .blob-4 {
  width: 200px;
  height: 200px;
  bottom: 20%;
  right: 20%;
  animation: blob-motion 7.5s ease-in-out infinite;
  animation-delay: 1s;
  background: linear-gradient(45deg, #f59e0b, #f97316);
}

@keyframes blob-motion {
  0%, 100% {
    transform: translate(0, 0);
    border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  }
  25% {
    transform: translate(30px, -50px);
    border-radius: 70% 30% 66% 34% / 33% 66% 33% 67%;
  }
  50% {
    transform: translate(-20px, 20px);
    border-radius: 100% 60% 52% 37% / 57% 73% 37% 43%;
  }
  75% {
    transform: translate(50px, 50px);
    border-radius: 20% 60% 38% 58% / 58% 44% 37% 44%;
  }
}

/* ============ NEBULA ANIMATION ============ */
.ani-nebula {
  background: radial-gradient(ellipse at 20% 50%, #1e1b4b 0%, #0f0e26 100%);
  position: relative;
}

.ani-nebula .nebula-layer {
  position: absolute;
  inset: 0;
  opacity: 0.6;
  mix-blend-mode: screen;
  filter: blur(60px);
}

.ani-nebula .nebula-1 {
  background: radial-gradient(ellipse 800px 600px at 20% 30%, rgba(147, 51, 234, 0.5), transparent 70%);
  animation: nebula-drift 20s ease-in-out infinite;
}

.ani-nebula .nebula-2 {
  background: radial-gradient(ellipse 600px 400px at 70% 70%, rgba(79, 172, 254, 0.4), transparent 70%);
  animation: nebula-drift 25s ease-in-out infinite;
  animation-delay: -5s;
}

.ani-nebula .nebula-3 {
  background: radial-gradient(ellipse 700px 500px at 50% 50%, rgba(236, 72, 153, 0.3), transparent 70%);
  animation: nebula-drift 30s ease-in-out infinite;
  animation-delay: -10s;
}

.ani-nebula .space-dust {
  position: absolute;
  inset: 0;
  opacity: 0.3;
  background-image: 
    radial-gradient(1px 1px at 20% 30%, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0)),
    radial-gradient(1px 1px at 60% 70%, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0)),
    radial-gradient(1px 1px at 50% 50%, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0)),
    radial-gradient(1px 1px at 80% 10%, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0)),
    radial-gradient(1px 1px at 10% 90%, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));
  background-repeat: repeat;
  background-size: 200% 200%, 300% 300%, 250% 250%, 350% 350%, 400% 400%;
  animation: dust-drift 100s linear infinite;
}

@keyframes nebula-drift {
  0%, 100% {
    transform: translate(0, 0);
  }
  33% {
    transform: translate(100px, -80px);
  }
  66% {
    transform: translate(-100px, 80px);
  }
}

@keyframes dust-drift {
  0% {
    background-position: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
  }
  100% {
    background-position: 200% 200%, 300% 300%, 250% 250%, 350% 350%, 400% 400%;
  }
}
</style>