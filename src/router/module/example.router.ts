/*
 * @Author: By
 * @Date: 2022-04-18 10:28:22
 * @LastEditTime: 2022-04-21 11:42:09
 * @LastEditors: By
 * @Description:
 * @FilePath: \webProject\src\router\module\example.router.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
module.exports = [
  {
    path: '/exampleView',
    name: 'example',
    component: () => import('@/views/example/exampleView.vue'),
    children: [
      {
        path: '/exampleView/glassCards',
        name: 'GlassCardsDemo',
        component: () => import('@/views/example/glassCards.vue'),
      },
    ],
  },
  {
    path: '/exampleView/glassCards',
    name: 'GlassCardsDemo',
    component: () => import('@/views/example/glassCards.vue'),
  },
];
