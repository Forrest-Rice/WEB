<!--
 * @Author: By
 * @Date: 2022-05-24 02:40:05
 * @LastEditTime: 2022-05-24 15:47:07
 * @LastEditors: By
 * @Description: fff
 * @FilePath: \WEB\src\views\hotel\hotelHome.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
    <div>
        <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in 6" :key="item">
                <h3 text="2xl" justify="center">{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
        <!-- <footerPage></footerPage> -->
    </div>

</template>
<script lang="ts" setup>
</script>
<style scoped>
.el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
</style>
