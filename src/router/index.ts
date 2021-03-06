/* eslint-disable no-unused-vars */
/*
 * @Author: By
 * @Date: 2022-04-18 10:10:19
 * @LastEditTime: 2022-05-24 17:49:41
 * @LastEditors: By
 * @Description:
 * @FilePath: \WEB\src\router\index.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { watch } from 'vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [

  {
    path: '/',
    name: 'Home',

    component: () => import('@/plugins/menuTwo.vue'),
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('../views/hotel/hotelHome.vue'),
      }, {
        path: '/:catchAll(.*)',
        name: '404',
        component: () => import('../views/404View.vue'),
      },
    ],
  },

];

const files = require.context('./module/', false, /\.router.ts$/);

files.keys().forEach((key) => {
  routes[0].children?.push(...files(key));
});

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

watch(() => router.currentRoute.value.path, (newValue, oldValue) => {
}, { immediate: true });

export default router;
