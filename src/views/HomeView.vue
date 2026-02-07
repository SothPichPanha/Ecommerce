<script>
import HeaderView from './HeaderView.vue';
import SearchComponent from '@/components/SearchComponent.vue';
import Home from '@/components/Home.vue';
import BodyView from './BodyView.vue';
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
  
  <div class="">
    <HeaderView />
  </div>
  <div>
    <Home />
    
  </div>
  <div class="container-body mt-10 ml-[180px] mb-10 ">
    <BodyView />
    
  </div>
   
</template>

<style>

</style>