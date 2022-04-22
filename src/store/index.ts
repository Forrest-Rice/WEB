/*
 * @Author: By
 * @Date: 2022-04-18 10:10:19
 * @LastEditTime: 2022-04-21 10:38:42
 * @LastEditors: By
 * @Description:
 * @FilePath: \webProject\src\store\index.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { createStore } from 'vuex';

import createPersistedState from 'vuex-persistedstate';
import example from './module/example.vuex';
import router from './module/router.vuex';

export default createStore({
  modules: {
    example, router,
  },
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],
});
