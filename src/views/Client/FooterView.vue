<script>
export default {
  name: 'FooterView',
  data() {
    return {
      email: '',
      showSuccessMessage: false,
    }
  },
  methods: {
    subscribeNewsletter() {
      if (this.email) {
        // Add your newsletter API call here
        this.showSuccessMessage = true;
        this.email = '';
        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 3000);
      }
    }
  }
}
</script>

<template>
  <!-- Newsletter Section -->
  <div class="bg-blue-600 text-white py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div class="flex items-center gap-3">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 8l-6-3m6 3l6-3" />
          </svg>
          <h3 class="text-xl font-semibold">Sign up to Newsletter</h3>
        </div>
        <p class="text-blue-100">Get our emails for info on new items, sales and more.</p>
        <div class="flex gap-2 w-full sm:w-auto">
          <input
            v-model="email"
            type="email"
            placeholder="Your email address"
            class="flex-1 sm:flex-none px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 min-w-64 border border-gray-300 focus:border-blue-500 bg-white"
            @keyup.enter="subscribeNewsletter"
          />
          <button
            @click="subscribeNewsletter"
            class="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
      <div v-if="showSuccessMessage" class="mt-4 text-center text-green-100">
        ✓ Thank you for subscribing!
      </div>
    </div>
  </div>

  <!-- Main Footer -->
  <footer class="bg-white border-t border-gray-200 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
        
        <!-- Brand Section -->
        <div class="md:col-span-1">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">kalles</h2>
          <p class="text-gray-600 text-sm mb-4">
            All Rights Reserved © 2023 <a href="#" class="text-blue-600 hover:underline">Kalles</a>
          </p>
          <div class="space-y-3 text-sm text-gray-600">
            <p class="flex items-start gap-2">
              <svg class="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              <span>184 Main Rd E, St Albans, Australia</span>
            </p>
            <p class="flex items-center gap-2">
              <svg class="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:contact@company.com" class="hover:text-blue-600">contact@company.com</a>
            </p>
            <p class="flex items-center gap-2">
              <svg class="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+001 2233 456</span>
            </p>
          </div>
          <p class="text-sm text-gray-600 mt-4">Developed by <a href="#" class="text-blue-600 hover:underline">Thed</a></p>
        </div>

        <!-- Categories -->
        <div>
          <h4 class="font-semibold text-gray-900 mb-4">Categories</h4>
          <ul class="space-y-3">
            <li><a href="#" class="text-gray-600 hover:text-blue-600 transition text-sm">Camera</a></li>
            <li><a href="#" class="text-gray-600 hover:text-blue-600 transition text-sm">Headphone</a></li>
            <li><a href="#" class="text-gray-600 hover:text-blue-600 transition text-sm">Laptop</a></li>
            <li><a href="#" class="text-gray-600 hover:text-blue-600 transition text-sm">Monitor</a></li>
            <li><a href="#" class="text-gray-600 hover:text-blue-600 transition text-sm">Speaker</a></li>
            <li><a href="#" class="text-gray-600 hover:text-blue-600 transition text-sm">Smart watch</a></li>
          </ul>
        </div>

        <!-- Information -->
        <div>
          <h4 class="font-semibold text-gray-900 mb-4">Information</h4>
          <ul class="space-y-3">
            <li><a href="#" class="text-gray-600 hover:text-blue-600 transition text-sm">About us</a></li>
            <li><a href="#" class="text-gray-600 hover:text-blue-600 transition text-sm">Terms & Conditions</a></li>
            <li><a href="#" class="text-gray-600 hover:text-blue-600 transition text-sm">Returns & Exchanges</a></li>
            <li><a href="#" class="text-gray-600 hover:text-blue-600 transition text-sm">Shipping & Delivery</a></li>
            <li><a href="#" class="text-gray-600 hover:text-blue-600 transition text-sm">Privacy Policy</a></li>
          </ul>
        </div>

        <!-- Useful Links -->
        <div>
          <h4 class="font-semibold text-gray-900 mb-4">Useful links</h4>
          <ul class="space-y-3">
            <li><a href="#" class="text-gray-600 hover:text-blue-600 transition text-sm">Latest News</a></li>
            <li><a href="#" class="text-gray-600 hover:text-blue-600 transition text-sm">My Account</a></li>
            <li><a href="#" class="text-gray-600 hover:text-blue-600 transition text-sm">Size Guide</a></li>
            <li><a href="#" class="text-gray-600 hover:text-blue-600 transition text-sm">FAQs 1</a></li>
            <li><a href="#" class="text-gray-600 hover:text-blue-600 transition text-sm">FAQs 2</a></li>
          </ul>
        </div>

        <!-- Follow -->
        <div>
          <h4 class="font-semibold text-gray-900 mb-4">Follow</h4>
          <ul class="space-y-3">
            <li><a href="#" class="text-gray-600 hover:text-blue-600 transition text-sm flex items-center gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              Facebook
            </a></li>
            <li><a href="#" class="text-gray-600 hover:text-blue-600 transition text-sm flex items-center gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-10 10z"/></svg>
              Twitter
            </a></li>
            <li><a href="#" class="text-gray-600 hover:text-blue-600 transition text-sm flex items-center gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M12 7a5 5 0 015 5v0a5 5 0 01-5 5v0a5 5 0 01-5-5v0a5 5 0 015-5z" fill="white"/></svg>
              Instagram
            </a></li>
            <li><a href="#" class="text-gray-600 hover:text-blue-600 transition text-sm flex items-center gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16.413V7.587L16.5 12 10 16.413z"/></svg>
              Pinterest
            </a></li>
          </ul>
        </div>

      </div>

    </div>
  </footer>
</template>

<style scoped>
a {
  transition: color 0.2s ease;
}

input::placeholder {
  color: #9ca3af;
}

input:focus::placeholder {
  color: #d1d5db;
}
</style>