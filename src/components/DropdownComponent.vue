<script>
export default {
  name: 'CustomDropdown',
  props: {
    modelValue: {
      type: [String, Number],
      default: '',
    },
    title: {
      type: String,
      default: 'Select an option',
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
  emits: ['update:modelValue'],
  data() {
    return {
      isOpen: false,
    }
  },
  computed: {
    displayValue() {
      return this.modelValue || this.title
    },
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen
    },
    selectItem(item) {
      this.$emit('update:modelValue', item)
      this.isOpen = false
    },
    closeDropdown() {
      this.isOpen = false
    },
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside)
  },
}
</script>

<template>
  <div class="relative inline-block" ref="dropdown">
    <!-- Dropdown Button -->
    <button
      type="button"
      @click="toggleDropdown"
      class="flex items-center gap-1 outline-none cursor-pointer"
    >
      <span>{{ displayValue }}</span>
      <svg
        class="w-4 h-4 transition-transform"
        :class="{ 'rotate-180': isOpen }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <!-- Dropdown Menu -->
    <div
      v-if="isOpen"
      class="absolute left-0 mt-2 bg-white border border-gray-200 rounded shadow-lg z-10 min-w-full"
    >
      <!-- Title option -->
      <div
        @click="selectItem('')"
        class="px-4 py-2 hover:bg-gray-100 cursor-pointer whitespace-nowrap text-gray-500"
        :class="{ 'bg-gray-50': !modelValue }"
      >
        {{ title }}
      </div>
      
      <!-- Items -->
      <div
        v-for="(item, index) in items"
        :key="index"
        @click="selectItem(item)"
        class="px-4 py-2 hover:bg-gray-100 cursor-pointer whitespace-nowrap"
        :class="{ 'bg-gray-50': item === modelValue }"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>