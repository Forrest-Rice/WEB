/*
 * @Author: By
 * @Date: 2022-04-18 14:37:40
 * @LastEditTime: 2022-04-21 11:23:35
 * @LastEditors: By
 * @Description:
 * @FilePath: \webProject\src\router\module\typescriptLearn.router.ts
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
