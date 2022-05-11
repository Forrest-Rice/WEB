/*
 * @Author: By
 * @Date: 2022-04-18 10:28:22
 * @LastEditTime: 2022-05-11 18:52:52
 * @LastEditors: By
 * @Description:
 * @FilePath: \webProject\src\router\module\example.router.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
module.exports = [
  {
    path: '/Friday',
    name: 'Friday',
    component: () => import('@/views/Friday/friday_Index.vue'),
  },
];
