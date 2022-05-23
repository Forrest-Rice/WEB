/*
 * @Author: By
 * @Date: 2022-05-24 00:28:53
 * @LastEditTime: 2022-05-24 02:40:24
 * @LastEditors: By
 * @Description:   z
 * @FilePath: \WEB\src\router\module\hotel.router.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
module.exports = [
  {
    path: '/guestRoom',
    name: 'example',
    component: () => import('@/views/hotel/guestRoom.vue'),
  },
  // {
  //   path: '/exampleView/glassCards',
  //   name: 'GlassCardsDemo',
  //   component: () => import('@/views/example/glassCards.vue'),
  // },
  {
    path: '/hotelHome',
    name: 'hotelHome',
    component: () => import('@/views/hotel/hotelHome.vue'),
  },
];
