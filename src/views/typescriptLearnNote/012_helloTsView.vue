<!--
 * @Author: By
 * @Date: 2022-04-21 11:23:49
 * @LastEditTime: 2022-05-17 00:31:27
 * @LastEditors: By
 * @Description:
 * @FilePath: \WEB\src\views\typescriptLearnNote\012_helloTsView.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <el-input @compositionstart="compositionstartFun" @compositionend="compositionendFun" v-model="inputValue"
    placeholder="Please input" />
</template>
<script setup lang="ts">
import { ref } from 'vue';

const inputValue = ref<string>('');
const compositionstartFun = () => {
  const temp = JSON.parse(JSON.stringify(inputValue.value));
  console.log('------------', inputValue.value);
  inputValue.value = temp;
};
const compositionendFun = () => { console.log('============', inputValue.value); };
</script>
<style lang="scss" scoped>
</style>
