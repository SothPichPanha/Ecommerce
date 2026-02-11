import HomeView from '@/views/Client/HomeView.vue';
import NavigationComponent from '@/components/NavigationComponent.vue';
import BannerComponent from '@/components/BannerComponent.vue';
import ProductsComponent from '@/components/ProductsComponent.vue';
import Login from '@/views/Client/Login.vue';
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
      path: '/login',
      name: 'Login',
      component: Login,
    },
    // Client
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
