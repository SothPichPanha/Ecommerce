<script>
import SearchComponent from '@/components/SearchComponent.vue';
import IconComponent from '@/components/IconComponent.vue';
import NavigationComponent from '@/components/NavigationComponent.vue';
export default {
  name: 'HeaderView',
  components: {
    SearchComponent,
    IconComponent,
    NavigationComponent
  }
}
</script>

<template>
  <div class="fixed top-0 left-0 right-0 z-50 bg-white shadow">
      <div class="flex flex-cols justify-between items-center px-20 py-4 ">
    <img src="/image/kalles.svg.png" alt="logo">
      <SearchComponent />
      <IconComponent />
  </div>
  <div>
    <NavigationComponent />
  </div>
  </div>

</template>
