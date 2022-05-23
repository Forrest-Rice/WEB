<!--
 * @Author: By
 * @Date: 2022-05-24 01:37:45
 * @LastEditTime: 2022-05-24 02:36:27
 * @LastEditors: By
 * @Description: bbb
 * @FilePath: \WEB\src\components\fotterPage.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
    <div class="footer">
        <div class="footer-item-box">
            <span class="footer-item-title">酒店加盟</span>
            <span class="footer-item" v-for="(item, index) in  hotelFranchise" :key="index">
                {{ item.label }}:{{ item.value }}</span>
        </div>
        <div class="footer-item-box">
            <span class="footer-item-title">意见反馈</span>
            <span class="footer-item" v-for="(item, index) in  Feedback" :key="index">
                {{ item.label }}:{{ item.value }}</span>
        </div>
        <div class="footer-item-box">
            <span class="footer-item-title">关于我们</span>
            <span class="footer-item" v-for="(item, index) in  Feedback" :key="index">
                {{ item.label }}:{{ item.value }}</span>
        </div>

    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const hotelFranchise = ref([
    { value: `18941118888`, label: `电话` },
    { value: `4008-123123`, label: `座机` },
    { value: `辽宁省鞍山市`, label: `地址` },
])

const Feedback = ref([
    { value: `by15242952083@outlook.com`, label: `邮箱` },
    { value: `4008-123123`, label: `传真` },
    // { value: `1234567`, label: `电话` },
])
</script>
<style lang="scss" scoped>
.footer {
    height: 14vh;
    background-color: black;
    width: 94vw;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .footer-item-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 33%;
        height: 100%;
        justify-content: space-evenly;

        .footer-item-title {
            color: white;
            position: relative;
            padding: 2px 0;

            &:after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                height: 1px;
                width: 100%;
                background-color: white;
            }
        }

        .footer-item {
            color: white;
        }
    }
}
</style>
