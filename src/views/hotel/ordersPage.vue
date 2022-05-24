<!--
 * @Author: By
 * @Date: 2022-05-24 16:29:42
 * @LastEditTime: 2022-05-24 16:53:31
 * @LastEditors: By
 * @Description: orders
 * @FilePath: \WEB\src\views\hotel\ordersPage.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
    <div class="ordersPage">
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span class="title">个人信息</span>
                </div>
            </template>
            <div class="info-form">
                <el-form :model="infoForm" label-width="70px">
                    <el-form-item label="编号：">
                        <span>{{ infoForm.id }}</span>
                    </el-form-item>
                    <el-form-item label="姓名：">
                        <span>{{ infoForm.cname }}</span>
                    </el-form-item>
                    <el-form-item label="电话：">
                        <span>{{ infoForm.tel }}</span>
                    </el-form-item>
                    <el-form-item label="Email：">
                        <span>{{ infoForm.Email }}</span>
                    </el-form-item>
                    <el-form-item label="身份证：">
                        <span>{{ infoForm.idCard }}</span>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
        <el-card class="order-card">
            <template #header>
                <div class="card-header">
                    <span class="title">我的订单</span>
                </div>
            </template>
            <el-descriptions title="Vertical list with border" direction="vertical" :column="4" :size="'Default'"
                border>
                <el-descriptions-item label="Username">kooriookami</el-descriptions-item>
                <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
                <el-descriptions-item label="Place" :span="2">Suzhou</el-descriptions-item>
                <el-descriptions-item label="Remarks">
                    <el-tag size="small">School</el-tag>
                </el-descriptions-item>
                <el-descriptions-item label="Address">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu
                    Province
                </el-descriptions-item>
            </el-descriptions>

            <el-descriptions title="Vertical list without border" :column="4" size="default" direction="vertical">
                <el-descriptions-item label="Username">kooriookami</el-descriptions-item>
                <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
                <el-descriptions-item label="Place" :span="2">Suzhou</el-descriptions-item>
                <el-descriptions-item label="Remarks">
                    <el-tag size="small">School</el-tag>
                </el-descriptions-item>
                <el-descriptions-item label="Address">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu
                    Province
                </el-descriptions-item>
            </el-descriptions>
        </el-card>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const infoForm = ref<any>({
    id: '123',
    cname: '张三',
    tel: `15242952083`,
    Email: `by15242952083@outlook.com`,
    idCard: `152485695475666`,
})
// const size = ref('')
// const blockMargin = computed(() => {
//     const marginMap: any = {
//         large: '32px',
//         default: '28px',
//         small: '24px',
//     }
//     return {
//         marginTop: marginMap[size.value] || marginMap.default,
//     }
// })
</script>
<style lang="scss" scoped>
.ordersPage {
    display: flex;
    justify-content: space-between;

    ::v-deep(.box-card) {
        width: 20vw;
        // max-width: 30vw;

        .card-header {
            .title {
                color: #f0932b
            }

            display: flex;
            justify-content: center;
        }
    }

    ::v-deep(.order-card) {
        width: 70vw;

        .card-header {
            .title {
                color: #f0932b;
                font-size: 20px;
            }

            display: flex;
            justify-content: flex-start;
        }
    }

}
</style>
