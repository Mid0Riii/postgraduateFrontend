<template>
    <el-tabs type="border-card">
        <el-tab-pane label="通讯录">
            <el-table :data="addressbook"
                      class="addressbook"
                      border
                      :header-cell-style="{fontWeight:900,fontSize:'14px',color:'black'}">
                <el-table-column
                        type="index"
                        width="70"
                        label="#"
                >
                </el-table-column>
                <el-table-column
                        prop="stu_class"
                        width="120"
                        label="班级"
                >
                </el-table-column>
                <el-table-column
                        prop="stu_id"
                        label="学号"
                        width="200">
                </el-table-column>
                <el-table-column
                        prop="stu_name"
                        label="姓名"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="stu_tel"
                        label="联系方式"
                        width="270">
                </el-table-column>
                <el-table-column
                        prop="stu_birth"
                        label="出生年月"
                        width="280">
                </el-table-column>
            </el-table>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
    import api from "../network/api"
    export default {
        name: "AddressBook",
        data() {
            return {
                addressbook: [
                    {
                        "stu_id": "",
                        "stu_name": "",
                        "stu_tel": "",
                        "stu_birth": "",
                        "stu_class":"",
                    }
                ],
            }
        },
        created() {
            api.getAddressBook()
                .then(res => {
                    this.addressbook = res.data.data;
                })
                .catch(error => {
                    this.$message.error(error)
                })
        }
    }
</script>

<style>
    .addressbook {
        display: inline-block;
        width: 100%;
    }
</style>
