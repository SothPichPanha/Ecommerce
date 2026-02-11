<script>
import HeaderView from '../Client/HeaderView.vue';
import SearchComponent from '@/components/SearchComponent.vue';
import Home from '@/components/Home.vue';
import BodyView from '../Client/BodyView.vue';
export default {
  name: 'HomeView',
    components: {
        HeaderView,
        SearchComponent,
        Home,
        BodyView,
    }
}
</script>

<template>
  <div class="min-h-screen flex flex-col">

    <!-- Header -->
    <HeaderView />

    <!-- Hero / Home Section -->
    <Home />

    <!-- Body Section -->
    <div class=" mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <BodyView />
    </div>

  </div>
</template>


<style>

</style>