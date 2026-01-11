<script>
import SearchComponent from '@/components/SearchComponent.vue';
import IconComponent from '@/components/IconComponent.vue';
export default {
  name: 'HeaderView',
  components: {
    SearchComponent,
    IconComponent
  }
}
</script>

<template>
  <div class="flex flex-cols justify-between items-center px-20 py-4 ">
    <img src="" alt="logo">
      <SearchComponent />
      <IconComponent />
  </div>
</template>
