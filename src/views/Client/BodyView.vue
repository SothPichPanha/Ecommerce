<script>
import BannerComponent from '@/components/BannerComponent.vue';
import ProductsComponent from '@/components/ProductsComponent.vue';
import featureList from '@/components/featureList.vue';

export default {
  name: 'BodyView',
  components: {
    BannerComponent,
    ProductsComponent,
    featureList
  }
}
</script>
<template>
  <BannerComponent />
  <featureList title="Features" :items="['Feature 1', 'Feature 2', 'Feature 3']" :gap="'true'" />
  <ProductsComponent />
  <featureList title="Categories" items="View All Categories" :gap="'false'" />
</template>