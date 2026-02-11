<script>
export default {
  name: 'FeatureList',
  props: {
    items: {
      type: [Array, String],
      default: () => [],
    },
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      selectedIndex: 0, // default first item blue
    }
  },
  computed: {
    itemsArray() {
      if (Array.isArray(this.items)) return this.items;
      if (typeof this.items === 'string') return [this.items];
      return [];
    },
  },
  methods: {
    selectItem(index) {
      this.selectedIndex = index;
    }
  }
}
</script>

<template>
  <div class="flex justify-between w-full items-start my-4">

    <span class="font-bold text-lg">
      {{ title }}
    </span>

    <ul class="flex gap-4 items-center">
      <li
        v-for="(item, index) in itemsArray"
        :key="index"
        @click="selectItem(index)"
        class="cursor-pointer transition duration-200"
        :class="selectedIndex === index
          ? 'text-blue-600 font-semibold'
          : 'text-gray-700 hover:text-black'"
      >
        {{ item }}
      </li>
    </ul>

  </div>
</template>
