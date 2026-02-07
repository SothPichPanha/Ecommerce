import HomeView from '@/views/HomeView.vue';
import NavigationComponent from '@/components/NavigationComponent.vue';
import BannerComponent from '@/components/BannerComponent.vue';
import ProductsComponent from '@/components/ProductsComponent.vue';

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/navigation',
      name: 'Navigation',
      component: NavigationComponent,
    },
    {
      path: '/products',
      name: 'Products',
      component: ProductsComponent,
    },
    {
      path: '/banner',
      name: 'Banner',
      component: BannerComponent,
    }
  ],
})

export default router
