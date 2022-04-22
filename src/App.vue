<!--
 * @Author: By
 * @Date: 2022-04-18 10:10:19
 * @LastEditTime: 2022-04-21 17:09:02
 * @LastEditors: By
 * @Description:
 * @FilePath: \webProject\src\App.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <ElConfigProvider :locale="locale">
    <router-view></router-view>
  </ElConfigProvider>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';
import { computed } from 'vue';

const store = useStore();
computed(() => store);

const locale = zhCn; // element-plus 设置为中文

</script>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
</style>
