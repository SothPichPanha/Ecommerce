<script>
import BannerComponent from '../components/BannerComponent.vue';
import ProductsComponent from '../components/ProductsComponent.vue';
export default {
  name: 'BodyView',
  components: {
    BannerComponent,
    ProductsComponent,
  }
}
</script>
<template>
  <BannerComponent />
  <ProductsComponent />
</template>