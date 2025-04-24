import { CartPage } from '@pages/cart';
import { HomePage } from '@pages/home';
import { createMemoryHistory, createRouter } from 'vue-router';

const routes = [
  { path: '/', component: HomePage },
  { path: '/cart', component: CartPage },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
