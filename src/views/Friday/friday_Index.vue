<!--
 * @Author: By
 * @Date: 2022-05-11 18:53:28
 * @LastEditTime: 2022-05-11 19:15:10
 * @LastEditors: By
 * @Description:
 * @FilePath: \webProject\src\views\Friday\friday_Index.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->

<template>
    <div class="friday_Index">
        <span>周</span>
        <el-image :src="require('@/assets/image/500.png')" fit="contain" />
        <span>烂</span>
    </div>
</template>
<script lang="ts" setup>
// import { ref } from 'vue';
// import { pic } from '@/assets/image/500.png';

// const fits = ['fill', 'contain', 'cover', 'none', 'scale-down'];
// const url = ref<string>('/@/assets/image/500.png');
// const url = ref<File>(pic);
// const fit = ref<string>('fill');
</script>
<style lang="scss" scoped>
.friday_Index {
    background: rgba(27, 27, 27, 1);
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: space-around;

    .el-image {
        height: 100%;
        img {
            display: inline-block;
        }
    }

    span {
        font-size: 5vw;
        color: white;
    }
}
</style>
