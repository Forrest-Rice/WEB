/*
 * @Author: By
 * @Date: 2022-04-21 16:03:45
 * @LastEditTime: 2022-05-17 00:05:35
 * @LastEditors: By
 * @Description:
 * @FilePath: \WEB\src\hooks\useGlobal.hooks.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { ComponentInternalInstance, getCurrentInstance } from 'vue';

export default function useCurrentInstance() {
  const { appContext } = getCurrentInstance() as ComponentInternalInstance;
  const proxy = appContext.config.globalProperties;
  return { ...proxy };
}
