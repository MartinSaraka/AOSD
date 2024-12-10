// src/router/routes.ts
import { RouteRecordRaw } from 'vue-router';
import OrderPage from 'src/pages/OrderPage.vue';
import AdvancedCartPage from 'src/pages/AdvancedCartPage.vue';
import TsKaosLoggingPage from 'src/pages/TsKaosLoggingPage.vue';
import TraditionalCartPage from 'src/pages/TraditionalCartPage.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', component: OrderPage },
  { path: '/advanced', component: AdvancedCartPage },
  { path: '/ts-aspect', component: TsKaosLoggingPage },
  { path: '/traditional', component: TraditionalCartPage },
];

export default routes;
