<!--
 * @Author: By
 * @Date: 2022-05-24 00:06:56
 * @LastEditTime: 2022-05-24 02:35:32
 * @LastEditors: By
 * @Description: dd
 * @FilePath: \WEB\src\plugins\menuTwo.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->

<template>
  <div class="menu">
    <div class="menu-box">
      <el-menu :default-active="activeIndex2" class="el-menu" mode="horizontal" @select="handleSelect" router>
        <!-- <span class="logo"></span><span>凯曼</span><span>Hotel</span> -->
        <div class="logo-box"><span class="name">凯曼</span><span class="hotel">Hotel</span></div>
        <el-menu-item index="/hotelHome">首页</el-menu-item>
        <el-menu-item index="/guestRoom">客房</el-menu-item>
        <el-menu-item index="3">公告</el-menu-item>
        <el-menu-item class="end" index="4">我的订单</el-menu-item>
        <!-- <el-menu-item class="login" index="5">登录</el-menu-item>-->
        <el-sub-menu class="login" index="2">
          <template #title>{{ userName }}</template>
          <el-menu-item index="2-1">登录</el-menu-item>
          <el-menu-item index="2-2">注册</el-menu-item>
        </el-sub-menu>
      </el-menu>
      <div class="login" index="6">
        <!-- <span>登录</span>
        <span>注册</span> -->

      </div>
    </div>

    <div>
      <router-view>
      </router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const activeIndex2 = ref('1');
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const userName = ref(`admin`)
</script>

<style lang="scss" scoped>
.menu {
  padding: 0 3vw;
  width: 94vw;
  height: 100%;

  // position: absolute;
  // top: 0;
  ::v-deep(.el-menu) {
    .el-menu-item {
      margin: 0 1vw;
    }

    .menu-box {
      display: flex;

      .el-menu {
        // width: 60vw
      }
    }

    .logo-box {
      width: 35vw;
      display: flex;
      justify-content: flex-start;
      .name {
        display: flex;
        width: 5vw;
        color: #e67e22;
        height: 100%;
        justify-content: center;
        align-items: center;
        font-size: 30px;
      }

      .hotel {
        // margin-left: 0.5vw;
        display: flex;
        width: 5vw;
        color: #e67e22;
        height: 100%;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        // margin-left: 5px;
      }

    }

    .end {
      margin-right: 17vw;
    }

    .login {
      background-color: #e67e22;
      margin: 0;
      overflow: hidden;
      width: 20vw;
      justify-content: flex-start;
      align-items: center;

      .el-sub-menu__title {
        color: white;
        margin: 0 5px;
        font-size: 20px;
      }

      .el-sub-menu__title {
        background-color: #e67e22;
        color: white;

      }

    }
  }
}
</style>
