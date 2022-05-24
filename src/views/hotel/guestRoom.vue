<!--
 * @Author: By
 * @Date: 2022-05-24 00:29:48
 * @LastEditTime: 2022-05-24 16:16:37
 * @LastEditors: By
 * @Description: dd
 * @FilePath: \WEB\src\views\hotel\guestRoom.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
    <div class="guestRoom">
        <header>
            <div class="room-type">
                <span class="room-type-title">房型:</span>
                <span class="toom-type-button" :class="toomTypeIndex === index ? 'click-button' : ''"
                    v-for="(item, index) in typeButtonList" :key="index" @click="roomTypeClick(index)">{{ item
                    }}</span>
            </div>
            <div class="Price">
                <span class="Price-title">价格:</span>
                <span class="Price-button" :class="PriceIndex === index ? 'click-button' : ''"
                    v-for="(item, index) in typeButtonList" :key="index" @click="PriceClick(index)">{{ item
                    }}</span>
            </div>
        </header>
        <main>
            <div class="card-box" v-for="(item, index) in homeList" :key="index">
                <el-card :body-style="{ padding: '0px' }">
                    <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                        class="image" />
                    <div style="padding: 14px">
                        <span>Yummy hamburger</span>
                        <div class="bottom">
                            <time class="time">{{ item }}</time>
                            <el-button text class="button">Operating</el-button>
                        </div>
                    </div>
                </el-card>
            </div>
        </main>
        <!-- <footerPage></footerPage> -->
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

// const radio3 = ref();
const typeButtonList = ref([`全部`, `单人间`, `双人间`, `商务套间`]);
const toomTypeIndex = ref<number>(0);
const roomTypeClick = (e: any) => { toomTypeIndex.value = e };
const PriceIndex = ref<number>(0)
const PriceClick = (e: any) => { PriceIndex.value = e }
const homeList = ref([1, 2, 3, 4, 5, 6, 7, 8, 9])
</script>
<style lang="scss" scoped>
.guestRoom {
    // padding: 3vw;
    // height: 100vh;

    header {
        // margin-top: 2vh;

        .room-type,
        .Price {
            width: 100%;
            height: 50px;
            // background-color: red;
            background-color: #FFFFFF;
            display: flex;
            align-items: center;
            // padding-left: 1vw;

            .room-type-title,
            .Price-title {
                margin: 0 1vw;
            }

            .toom-type-button,
            .Price-button {
                display: flex;
                height: 30px;
                width: 65px;
                justify-content: center;
                align-items: center;
                margin: 0 1vw;

                border-radius: 5px;

                &.click-button {
                    background-color: #2980b9;
                    color: #FFFFFF;
                }
            }
        }
    }

    main {
        width: 100%;
        height: 63vh;
        margin-top: 2vh;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-content: space-between;
        justify-content: space-evenly;
        align-items: center;
        background-color: #FFFFFF;
        overflow-y: scroll;

        .card-box {
            width: 25%;
            padding: 1vw;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
}
</style>
