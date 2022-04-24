<!--
 * @Author: By
 * @Date: 2022-04-22 09:51:27
 * @LastEditTime: 2022-04-22 13:48:49
 * @LastEditors: By
 * @Description:
 * @FilePath: \webProject\src\plugins\independentMenu.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <div class="independentMenu-box">
    <div class="card" ref="card">
      <div class="content">
        <div class="imgBx"><img src="@/assets/image/logo.jpg"></div>
        <h2>Someone Famouk<br><span>Website designer</span></h2>
      </div>
      <ul class="navigation">
        <li v-for="(item, index) in 5" :key="index">
          <a href="#">
            <!-- <Search style="width: 1em; height: 1em; margin-right: 8px" /> -->
            <el-icon>
              <ArrowDown />
            </el-icon>菜单{{ item }}
          </a>
        </li>
      </ul>
      <div class="toggle" @click="unfoldMenu">
        <el-icon>
          <ArrowDown />
        </el-icon>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ArrowDown } from '@element-plus/icons-vue';
import { ref } from 'vue';

const card = ref(null);
const unfoldMenu = () => {
  card.value.classList.toggle('active');
};

</script>

<style lang="scss" scoped>
.independentMenu-box {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #67a5d4;

  .card {
    position: relative;
    width: 350px;
    height: 120px;
    background-color: #fff;
    box-shadow: 0 50px 50px rgba(0, 0, 0, 0.2);
    padding: 20px;
    overflow: hidden;
    transition: height 0.5s ease-in-out;

    .content {
      display: flex;
      align-items: center;

      .imgBx {
        position: relative;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        overflow: hidden;

        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      h2 {
        margin-left: 15px;
        font-size: 1.3em;
        color: #111;

        span {
          font-size: 0.8em;
          font-weight: 400;
          color: #999;
        }
      }
    }

    .navigation {
      position: relative;
      top: 25px;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      padding: 20px 0;

      li {
        list-style: none;
        margin: 15px 0;

        a {
          text-decoration: none;
          display: flex;
          align-items: center;
          color: #555;
          font-size: 1.1em;
          transition: color 0.25s;

          &:hover {
            color: #36b3ff
          }

          .el-icon {
            font-size: 1.6em;
            margin-right: 15px;
          }
        }
      }
    }

    .toggle {
      position: absolute;
      width: 40px;
      height: 40px;
      bottom: 0;
      right: 0;
      background: #36b3ff;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      z-index: 1;

      .el-icon {
        color: #fff;
        font-size: 1.4em;
        transform: rotate(0);
        transition: transform ease-in-out 0.5s;
      }
    }

    &.active {
      height: 400px;

      .toggle {
        .el-icon {
          transform: rotate(-180deg);
        }
      }
    }
  }

}
</style>
