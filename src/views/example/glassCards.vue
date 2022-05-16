<!--
 * @Author: By
 * @Date: 2022-04-21 11:28:54
 * @LastEditTime: 2022-05-17 00:01:11
 * @LastEditors: By
 * @Description:
 * @FilePath: \WEB\src\views\example\glassCards.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template lang="pug">
.glassCards-box
  .card
    .content
      h2 01
      h3 Card One
      p Realistic glass card hover effect,Realistic glass card hover effect,Realistic glass card hover effect
      a(href="#")
        | Read More
  .card
    .content
      h2 02
      h3 Card One
      p Realistic glass card hover effect,Realistic glass card hover effect,Realistic glass card hover effect
      a(href="#")
        | Read More
  .card
    .content
      h2 03
      h3 Card One
      p Realistic glass card hover effect,Realistic glass card hover effect,Realistic glass card hover effect
      a(href="#")
        | Read More
</template>

<script lang="ts" setup>
import tilt from 'vanilla-tilt';

const param = {
  max: 15, speed: 400, glare: true, 'max-glare': 1,
};
const domList: HTMLElement[] = document.querySelectorAll('.card');

tilt.init(domList, param);
</script>

<style lang="scss" scoped>
@import url("http://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap");

.glassCards-box {
  font-family: Poppins;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  z-index: 1;
  background-color: #34495e;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#e66465, #9198e5);
    // 剪切
    clip-path: circle(30% at right 70%);
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#e66465, #9198e5);
    // 剪切
    clip-path: circle(20% at 10% 10%);
  }

  .card {
    position: relative;
    width: 280px;
    height: 400px;
    background-color: rgba(255, 255, 255, 0.1);
    margin: 30px;
    border-radius: 15px;
    box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    // 背景模糊
    backdrop-filter: blur(5px);

    &:hover {
      .content {
        transform: translateY(0px);
        opacity: 1;
      }
    }

    .content {
      padding: 20px;
      text-align: center;
      transform: translateY(100px);
      opacity: 0;
      transition: transform 1s;

      h2 {
        position: absolute;
        top: -80px;
        right: 25px;
        font-size: 128px;
        color: rgba(255, 255, 255, 0.05);
      }

      h3 {
        font-size: 16px;
        color: #fff;
      }

      p {
        font-size: 16px;
        color: #fff;
        font-weight: 300;
        margin: 10px 0 15px 0;
      }

      a {
        position: relative;
        display: inline-block;
        padding: 8px 20px;
        margin-top: 15px;
        background-color: #fff;
        color: #000;
        text-decoration: none;
        border-radius: 20px;
        font-weight: 500;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      }
    }
  }
}
</style>
