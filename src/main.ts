/*
 * @Author: By
 * @Date: 2022-04-18 10:10:19
 * @LastEditTime: 2022-04-22 10:18:18
 * @LastEditors: By
 * @Description:
 * @FilePath: \webProject\src\main.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import 'normalize.css/normalize.css';
import '@/assets/style/index.scss';

const app = createApp(App);
app.config.globalProperties.$SkipSwitchName = '';
app.config.globalProperties.$a = 'a';
app.config.globalProperties.$b = 'b';
app.config.globalProperties.$c = 'c';
app.config.globalProperties.$d = 'd';
app.use(store).use(router).mount('#app');
