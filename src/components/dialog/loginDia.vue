<!--
 * @Author: By
 * @Date: 2022-05-24 17:13:31
 * @LastEditTime: 2022-05-24 17:23:13
 * @LastEditors: By
 * @Description:aa
 * @FilePath: \WEB\src\components\dialog\loginDia.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
    <div class="login-dialog">
        <el-dialog v-model="dialogVisible" title="Tips" width="30%" @close="closeFun">
            <span>This is a message</span>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const dialogVisible = ref<boolean>(false)
const closeFun = () => { }
</script>
