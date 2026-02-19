<script>
export default {
  name: 'GroupComponent',
  data() {
    return {
      categories: [
        {
          id: 1,
          name: 'Smartphones',
          icon: 'smartphone'
        },
        {
          id: 2,
          name: 'Cameras',
          icon: 'camera'
        },
        {
          id: 3,
          name: 'Television',
          icon: 'tv'
        },
        {
          id: 4,
          name: 'Gaming',
          icon: 'gamepad'
        },
        {
          id: 5,
          name: 'Speaker',
          icon: 'speaker'
        },
        {
          id: 6,
          name: 'Notebook',
          icon: 'laptop'
        },
        {
          id: 7,
          name: 'Headphone',
          icon: 'headphone'
        },
        {
          id: 8,
          name: 'Washers',
          icon: 'washer'
        },
        {
          id: 9,
          name: 'Refrigerator',
          icon: 'fridge'
        },
        {
          id: 10,
          name: 'Accessories',
          icon: 'wrench'
        }
      ]
    }
  },
  methods: {
    getIcon(iconName) {
      const icons = {
        smartphone: `<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
        </svg>`,
        camera: `<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>`,
        tv: `<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 4a1 1 0 011-1h8a1 1 0 011 1v2h4a1 1 0 011 1v11a1 1 0 01-1 1h-1v2a1 1 0 11-2 0v-2H9v2a1 1 0 11-2 0v-2H4a1 1 0 01-1-1V7a1 1 0 011-1h4V4z"></path>
        </svg>`,
        gamepad: `<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>`,
        speaker: `<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19V6l12-3v13M9 9h12m-12 2h12m-12 2h12m-12 2h12M5 21a1 1 0 100-2 1 1 0 000 2z"></path>
        </svg>`,
        laptop: `<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18h.01M17 21H7a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v14a2 2 0 01-2 2z"></path>
        </svg>`,
        headphone: `<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19V6a3 3 0 013-3h3a3 3 0 013 3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2m12 0c0 1.105 1.343 2 3 2s3-.895 3-2m-17-8a1 1 0 100-2 1 1 0 000 2z"></path>
        </svg>`,
        washer: `<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 8a2 2 0 00-2 2v6a2 2 0 002 2h14a2 2 0 002-2v-6a2 2 0 00-2-2H5z"></path>
        </svg>`,
        fridge: `<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 4a1 1 0 011-1h8a1 1 0 011 1v2H7V4zm0 3h10v13a2 2 0 01-2 2H9a2 2 0 01-2-2V7z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 10h6M9 14h6"></path>
        </svg>`,
        wrench: `<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>`
      };
      return icons[iconName] || icons.smartphone;
    }
  }
}
</script>

<template>
  <div class="">
    <div class="w-[1625px] h-[300px]  ">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
        <div 
          v-for="category in categories"
          :key="category.id"
          class="flex flex-col items-center justify-center p-6 lg:p-8 border border-gray-200 rounded-lg hover:shadow-lg hover:border-blue-300 transition-all duration-300 cursor-pointer bg-white"
        >
          <div class="text-gray-700 mb-4 hover:text-blue-600 transition-colors">
            <div v-html="getIcon(category.icon)"></div>
          </div>
          <p class="text-sm lg:text-base font-medium text-gray-900 text-center">{{ category.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Smooth transitions */
div {
  transition-property: box-shadow, border-color, color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style>