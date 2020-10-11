<template>
    <el-tabs type="border-card">
        <el-tab-pane label="修改密码">
            <h1>修改密码</h1>
            <div>
                <div class="password">
                    <el-input placeholder="请输入内容" v-model="new_password" show-password class="change-password">
                        <template slot="prepend">新的密码</template>
                    </el-input>
                </div>
                <div class="password">
                    <el-input placeholder="请输入内容" v-model="confirm_password" show-password class="change-password">
                        <template slot="prepend">确认密码</template>
                    </el-input>
                </div>
            </div>
            <el-button class="confirm-button" type="primary" plain v-on:click="change_password">确定修改</el-button>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
    import api from '../network/api'
    export default {
        name: "ChangePassword",
        data() {
            return {
                "new_password":"",
                "confirm_password":"",
            }
        },
        methods:{
            change_password:function(){
                if(this.new_password!==this.confirm_password){
                    this.$message.error("两次输入的密码不一致");
                    return
                }
                api.changePassword({
                    "password":this.confirm_password
                });
                this.$message.success("修改成功，请重新登录");
                this.$router.push('/login')

            }
        }
    }
</script>

<style>
    .password {
        width: 300px;
        margin-left: 390px;
        margin-top: 50px;
        line-height: 50px;
    }

    .confirm-button {
        margin-top: 80px;
    }

    .change-password el-input {
        width: 400px;
    }
</style>
