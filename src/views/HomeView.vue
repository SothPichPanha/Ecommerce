<script>
import HeaderView from './HeaderView.vue';
import SearchComponent from '@/components/SearchComponent.vue';
import Home from '@/components/Home.vue';
export default {
  name: 'HomeView',
    components: {
        HeaderView,
        SearchComponent,
        Home
    }
}
</script>

<template>
  <div class="">
    <HeaderView />
  </div>
  <div>
    <Home />
  </div>
   
</template>

<style>

</style>