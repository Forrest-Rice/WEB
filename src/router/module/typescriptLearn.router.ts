/*
 * @Author: By
 * @Date: 2022-04-18 14:37:40
 * @LastEditTime: 2022-05-17 00:05:57
 * @LastEditors: By
 * @Description:
 * @FilePath: \WEB\src\router\module\typescriptLearn.router.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
module.exports = [
  {
    path: '/helloTs',
    name: 'helloTs',
    component: () => import('@/views/typescriptLearnNote/01_helloTsView.vue'),
  },
  {
    path: '/helloTs1',
    name: 'helloTs1',
    component: () => import('@/views/typescriptLearnNote/012_helloTsView.vue'),
  },
];
