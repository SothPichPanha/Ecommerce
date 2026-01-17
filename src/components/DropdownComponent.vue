<script>
export default {
  name: 'DropdownComponent',
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
    icons: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'inherit',
    },
    itemColor: {
      type: String,
      default: 'inherit',
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
    selectItem(item) {
      this.$emit('update:modelValue', item)
      this.isOpen = false
    },
    handleClickOutside(event) {
      if (this.$refs.dropdown && !this.$refs.dropdown.contains(event.target)) {
        this.isOpen = false
      }
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
      @mouseenter="isOpen = true"
      @mouseleave="isOpen = false"
      class="flex items-center gap-2 outline-none cursor-pointer px-4 py-2 rounded transition-all duration-200"
      :style="{ color: color }"
    >
      <span>{{ displayValue }}</span>

      <!-- Icon Conditional -->
      <svg
        v-if="icons"
        class="w-4 h-4 transition-transform duration-200"
        :class="{ 'rotate-90': isOpen }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <!-- Dropdown Menu -->
    <div
      v-if="isOpen"
      class="absolute left-0 mt-0 bg-white border border-gray-200 rounded shadow-lg z-10 min-w-full"
      @mouseenter="isOpen = true"
      @mouseleave="isOpen = false"
    >
      <!-- Title option -->
      <div
        @click="selectItem('')"
        class="px-4 py-2 hover:bg-gray-100 cursor-pointer whitespace-nowrap text-gray-500 transition-colors"
        :class="{ 'bg-gray-50': !modelValue }"
      >
        {{ title }}
      </div>
      
      <!-- Items -->
      <div
        v-for="(item, index) in items"
        :key="index"
        @click="selectItem(item)"
        class="px-4 py-2 hover:bg-gray-100 cursor-pointer whitespace-nowrap transition-colors"
        :class="{ 'bg-gray-50': item === modelValue }"
        :style="{ color: itemColor }"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>