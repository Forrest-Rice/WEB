/*
 * @Author: By
 * @Date: 2022-04-18 11:19:52
 * @LastEditTime: 2022-04-21 10:38:28
 * @LastEditors: By
 * @Description:
 * @FilePath: \webProject\src\utils\require.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */

/**
 * @description:
 * @param {any} req require.context()的返回值
 * @param {any} payload 载荷 { router, store }，被传递给require.context()读取的每一个文件的export default
 */
const executor = (req: any, payload: any) => {
  if (req) {
    req.keys().forEach((key: any) => {
      const register = req(key).default;
      register(payload);
    });
  }
};

// type executorType = (any)[]

// const executor01: executorType = (moduleFlag: any, requireFlag: any, modulePath: any) => {
//   const files = require.context(moduleFlag, requireFlag, modulePath);
//   console.log(files);
//   console.log('aaa');

//   // files.keys().forEach((key) => {
//   //   routes.push(...files(key).default);
//   // });
//   files.keys().map((key) => { console.log(key); return ''; });
//   return '';
// };

export default { executor };
