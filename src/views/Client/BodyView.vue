<script>
import BannerComponent from '@/components/BannerComponent.vue';
import ProductsComponent from '@/components/ProductsComponent.vue';
import featureList from '@/components/featureList.vue';
import GroupComponent from '@/components/GroupComponent.vue';
import Home from '@/components/Home.vue';
import Banner from '@/components/Client/Banner.vue';
import Recomment from '@/components/Client/Recomment.vue';
import { onMounted } from 'vue';
import { useProductStore } from '@/services/store.js';



export default {
  name: 'BodyView',
   setup() {
    const productStore = useProductStore()

    onMounted(() => {
      productStore.loadProducts()
    })

    return { productStore }
  },
  components: {
    BannerComponent,
    ProductsComponent,
    featureList,
    GroupComponent,
    Home,
    Banner,
    Recomment


  }
}
</script>
<template>
  <BannerComponent />
  <featureList title="Features" :items="['Feature 1', 'Feature 2', 'Feature 3']" :gap="'true'" />
  <div class="grid grid-cols-5 gap-6">
  <ProductsComponent
    v-for="product in productStore.products"
    :key="product.id"
    :product-id="product.id"
  />
</div>
  
  <featureList title="Categories" items="View All Categories" :gap="'false'" />
  <GroupComponent />
  <div class="mt-[60px]">
    <Banner />
  </div>
  <Recomment :image="'/image/Group_5919.png'" />
  <Banner />
  <Recomment :image="'/image/p2.png'" />
  
 

</template>