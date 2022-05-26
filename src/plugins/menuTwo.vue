<!--
 * @Author: By
 * @Date: 2022-05-24 15:29:41
 * @LastEditTime: 2022-05-25 21:34:10
 * @LastEditors: By
 * @Description:
 * @FilePath: \WEB\src\plugins\menuTwo.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect" router>
          <el-menu-item class="logo"><span class="name">凯曼</span><span class="hotel">Hotel</span></el-menu-item>
          <el-menu-item>
            <el-menu-item index="/redirect/">首页</el-menu-item>
            <el-menu-item index="/guestRoom">客房</el-menu-item>
            <el-menu-item index="/announcementPage">公告</el-menu-item>
            <el-menu-item class="end" index="/ordersPage">我的订单</el-menu-item>
          </el-menu-item>
          <el-menu-item class="login-box">
            <el-menu-item>登录</el-menu-item>
            <el-menu-item class="end">注册</el-menu-item>
          </el-menu-item>

        </el-menu>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>
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
      </el-footer>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const activeIndex = ref<string>(`/`)

const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const userName = ref(`admin`)
const hotelFranchise = ref([
  { value: `18941118888`, label: `电话` },
  { value: `4008-123123`, label: `座机` },
  { value: `辽宁省鞍山市`, label: `地址` },
])

const Feedback = ref([
  { value: `by15242952083@outlook.com`, label: `邮箱` },
  { value: `4008-123123`, label: `传真` },
])
</script>
<style lang="scss" scoped>
.common-layout {
  width: 100vw;
  height: 100vh;

  ::v-deep(.el-container) {
    width: 100%;
    height: 100%;

    .el-header {
      .logo {
        .name {
          display: flex;
          width: 5vw;
          color: #ffbe76;
          height: 100%;
          justify-content: center;
          align-items: center;
          font-size: 30px;
        }

        .hotel {
          display: flex;
          width: 5vw;
          color: #ffbe76;
          height: 100%;
          justify-content: center;
          align-items: center;
          font-size: 30px;
        }

      }

      .el-menu {
        justify-content: space-between;
      }

      .login-box {
        background-color: #ffbe76;

        .el-menu-item {
          &:hover {
            background-color: #ffbe76;
            color: white;
          }

          &:focus {
            background-color: #ffbe76;
            color: white;
          }

          &.is-active {
            background-color: #ffbe76;
            color: white;
          }
        }
      }

    }

    .el-footer {
      height: 12vh;
      background-color: black;
      width: 98vw;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-left: 1vw;

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
  }
}
</style>
