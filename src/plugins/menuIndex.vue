<!--
 * @Author: By
 * @Date: 2022-04-18 15:36:22
 * @LastEditTime: 2022-05-24 00:30:44
 * @LastEditors: By
 * @Description:
 * @FilePath: \WEB\src\plugins\menuIndex.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
    <div class="menuIndex-box">
        <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
            <el-radio-button :label="false">expand</el-radio-button>
            <el-radio-button :label="true">collapse</el-radio-button>
        </el-radio-group> -->
        <el-menu class="el-menu-vertical-demo" default-active="2" :collapse="isCollapse" @open="handleOpen"
            @close="handleClose" router>
            <!-- <el-sub-menu v-for="(item, index) in menuArr" :index="item.path" :key="index">
                <template #title>{{ item.name }}</template>
                <el-menu-item :index="item.path">{{ item.name }}</el-menu-item>
                <el-menu-item-group>
                    <el-menu-item v-for="(childItem, childIndex) in item.children" :key="childIndex"
                        :index="childItem.path">{{ childItem.name }}</el-menu-item>
                </el-menu-item-group>
            </el-sub-menu> -->
            <el-menu-item v-for="(item, index) in menuArr" :index="item.path" :key="index">
                <template #title>{{ item.name }}</template>
            </el-menu-item>
        </el-menu>
        <div class="content">
            <router-view v-slot="{ Component }">
                <transition :name="SkipSwitchName">
                    <component :is="Component" />
                </transition>
            </router-view>
        </div>

        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script lang="ts" setup>
/* eslint-disable no-unused-vars */
import { ref } from 'vue';

import useGetGlobalProperties from '@/hooks/useGlobal.hooks';

const SkipSwitchName = ref('');

const files = require.context('@/router/module/', false, /\.router.ts$/);
const menuArr = ref<any>([]);

const globalProperties = useGetGlobalProperties().$SkipSwitchName;

files.keys().forEach((key) => {
    menuArr.value.push(...files(key));
});

const isCollapse = ref(false);
const handleOpen = (key: string, keyPath: string[]) => {
    //   console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
    //   console.log(key, keyPath);
};
</script>

<style lang="scss" scoped>
.menuIndex-box {
    display: flex;
    height: 100vh;

    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }

    .el-menu-vertical-demo {
        overflow-x: hidden !important
    }

    .content {
        width: calc(100vw - 200px);
    }
}

.Skright-enter-active,
.Skright-leave-active,
.Skleft-enter-active,
.Sklef-leave-active {
    transition: all 600ms;
}

//先给 所要用的上下层级跳转写一个过渡时间
//然后你就可以发挥自己的想象力来写自己动画了 下面是一个例子
.Skright-enter {
    transform: translate3d(-100%, 0, 0);
}

.Skright-leave-to {
    transform: translate3d(100%, 0, 0);
}

.Skleft-enter {
    transform: translate3d(100%, 0, 0);
}

.Skleft-leave-to {
    transform: translate3d(-100%, 0, 0);
}
</style>
