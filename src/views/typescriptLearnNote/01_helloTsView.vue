<!--
 * @Author: By
 * @Date: 2022-04-18 14:38:54
 * @LastEditTime: 2022-05-17 00:00:33
 * @LastEditors: By
 * @Description:
 * @FilePath: \WEB\src\views\typescriptLearnNote\01_helloTsView.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->

<template lang="pug">
.helloTsView
  el-table(:data="tableData")
    el-table-column(v-for="(item, index) in headerList" :key="index" :prop="item.prop" :label="item.label")
</template>
<script lang="ts" setup>
/* eslint-disable no-unused-vars */
import { ref } from 'vue';

const tableData = ref<any>([{ dataType: '', keywords: '', description: '' }]);
const headerList = ref<any>([{ label: '数据类型', prop: 'dataType' }, { label: '关键字', prop: 'keywords' }, { label: '描述', prop: 'description' }]);
</script>
<style lang="scss" scoped>
</style>
