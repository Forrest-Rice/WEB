/*
 * @Author: By
 * @Date: 2022-04-21 16:03:45
 * @LastEditTime: 2022-04-21 16:59:10
 * @LastEditors: By
 * @Description:
 * @FilePath: \webProject\src\hooks\useGlobal.hooks.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { ComponentInternalInstance, getCurrentInstance } from 'vue';

export default function useCurrentInstance() {
  const { appContext } = getCurrentInstance() as ComponentInternalInstance;
  const proxy = appContext.config.globalProperties;
  return { ...proxy };
}
