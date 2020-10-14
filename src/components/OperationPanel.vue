<template>
    <div class="panel-body">
        <div class="tiles-group tiles-grid size-2 operation-panel">
            <div data-role="tile" style="background-color: #1989FA" data-size="wide" v-on:click="push_announcement">
                <span class="mif-notification icon"></span>
                <span class="branding-bar">通知中心</span>
            </div>
            <div data-role="tile" style="background-color: #5CB87A" v-on:click="push_addressbook">
                <span class="mif-contacts-dialer icon"></span>
                <span class="branding-bar">通讯录</span>
            </div>
            <div data-role="tile" data-size="small" style="background-color: #67C23A" v-on:click="push_info">
                <!--用户信息-->
                <span class="mif-user icon"></span>
            </div>
            <div data-role="tile" data-size="small" style="background-color: #E6A23C" v-on:click="push_change_pwd">
                <!--修改密码-->
                <span class="mif-unlock icon"></span>
            </div>
            <div data-role="tile" data-size="small" style="background-color: #409EFF" v-on:click="drawer=true">
                <!--联系管理员-->
                <span class="mif-record_voice_over icon"></span>
            </div>
            <div data-role="tile" data-size="small" style="background-color: #F56C6C" v-on:click="show_quit_dialog">
                <!--退出登录-->
                <span class="mif-switch icon"></span>
            </div>
            <div data-role="tile" style="background-color: #E6A23C" v-on:click="push_score">
                <span class="mif-chart-dots icon"></span>
                <span class="branding-bar">成绩查询</span>
            </div>
            <div data-role="tile" style="background-color: #909399" v-on:click="push_departure">
                <span class="mif-airplane icon"></span>
                <span class="branding-bar">离/返校登记</span>
            </div>
            <div data-role="tile" style="background-color: #1989FA" v-on:click="push_scholarship">
                <span class="mif-assignment icon"></span>
                <span class="branding-bar">奖学金申请</span>
            </div>
            <div data-role="tile" style="background-color: #5CB87A" v-on:click="push_poverty">
                <span class="mif-pencil icon"></span>
                <span class="branding-bar">贫困生登记</span>
            </div>
        </div>
        <el-dialog
                title="提示"
                :visible.sync="quitDialogVisible"
                :width="dialogWidth"
        >
            <span>是否退出本系统</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="quitDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="quit()">确 定</el-button>
            </span>
        </el-dialog>
        <el-drawer
                title="联系管理员"
                :visible.sync="drawer"
                direction="ttb"
        >
            <p>Designed and created by Aldrich & Jacob from &copy;NCUTEA</p>
            <p>南昌大学软件学院研究生系统 Version 0.1.0</p>
            <p>QQ:1534296263 </p>
            <p>Wechat&TEL:15689808788</p>
        </el-drawer>

    </div>
</template>

<script>
    export default {
        name: "operation-panel",
        data() {
            return {
                "quitDialogVisible": false,
                "quitDialogConfirm": false,
                drawer: false,
                dialogWidth:"300px"
            }
        },
        created() {
        },
        mounted() {
            window.onresize = () => {
                return (() => {
                    this.setDialogWidth()
                })()
            }
        },
        methods: {
            push_announcement: function () {
                this.$router.push('announcement').catch(err => {
                    err
                })
            },
            push_addressbook: function () {
                this.$router.push('addressbook').catch(err => {
                    err
                })
            },
            push_score: function () {
                this.$router.push('score').catch(err => {
                    err
                })
            },
            push_departure: function () {
                this.$router.push('departure').catch(err => {
                    err
                })
            },
            push_scholarship: function () {
                this.$router.push('scholarship').catch(err => {
                    err
                })
            },
            push_poverty: function () {
                this.$router.push('poverty').catch(err => {
                    err
                })
            },
            push_change_pwd: function () {
                this.$router.push('pwd').catch(err => {
                    err
                })
            },
            push_info: function () {
                this.$router.push('info').catch(err => {
                    err
                })
            },
            quit: function () {
                this.$message.success("成功退出，感谢您的使用");
                this.$store.state.isLogin = false;
                this.$store.state.token = "";
                this.$router.push('/login')
            },
            show_quit_dialog: function () {
                this.quitDialogVisible = true
            },
            setDialogWidth() {
                console.log(document.body.clientWidth);
                var val = document.body.clientWidth;
                const def = 800; // 默认宽度
                if (val < def) {
                    this.dialogWidth = '300px'
                } else {
                    this.dialogWidth = def + 'px'
                }
            }
        }
    }
</script>

<style scoped>
    .operation-panel {
        color: white;
        display: flow;
    }

    .panel-body {
        width: 100%;
        padding-left: 0px;
    }
</style>
