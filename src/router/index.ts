import HomeView from '@/views/Client/HomeView.vue';
import NavigationComponent from '@/components/NavigationComponent.vue';
import BannerComponent from '@/components/BannerComponent.vue';
import ProductsComponent from '@/components/ProductsComponent.vue';
import Login from '@/views/Client/Login.vue';
import Home from '@/components/Home.vue';
import AniBg from '@/components/helpComponent/AniBg.vue';
import Banner from '@/components/Client/Banner.vue';
import Pdetail from '@/components/Client/Pdetail.vue';
import TestForm from '@/views/TestForm.vue';
import { createRouter, createWebHistory } from 'vue-router'
import testlogin from '@/views/Client/testlogin.vue';
import loginfrom from '@/views/test/loginfrom.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home1',
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
    },
      {
        path: '/home',
      name: 'Home',
      component: Home,
    },
      {
        path: '/anibg',
      name: 'AniBg',
      component: AniBg,
    },
    
    {
      path: '/pdetail',
      name: 'Pdetail',
      component: Pdetail,
    },
    {
    path: '/test',
    name: 'Test',
    component: testlogin,
},
{
  path: '/loginf',
  name: 'LoginFrom',
  component: loginfrom,
}

  ],
})

export default router
