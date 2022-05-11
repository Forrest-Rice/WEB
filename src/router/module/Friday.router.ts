/*
 * @Author: By
 * @Date: 2022-05-11 18:52:03
 * @LastEditTime: 2022-05-11 18:52:03
 * @LastEditors: By
 * @Description:
 * @FilePath: \webProject\src\router\module\Friday.router.ts
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
