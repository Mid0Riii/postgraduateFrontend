<template>
    <div class="panel-body">
        <div class="tiles-group tiles-grid size-2 operation-panel">
            <div data-role="tile" style="background-color: #1B6583" data-size="wide" v-on:click="push_announcement">
                <span class="mif-notification icon"></span>
                <span class="branding-bar">通知中心</span>
            </div>
            <div data-role="tile" style="background-color: #1B6583" v-on:click="push_addressbook">
                <span class="mif-contacts-dialer icon"></span>
                <span class="branding-bar">通讯录</span>
            </div>
            <el-tooltip class="item" effect="dark" content="个人信息" placement="top-start">
                <div data-role="tile" data-size="small" style="background-color: #016974">
                    <!--用户信息-->
                    <span class="mif-user icon"></span>
                </div>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="修改密码" placement="top-start">
                <div data-role="tile" data-size="small" style="background-color: #016974">
                    <!--修改密码-->
                    <span class="mif-unlock icon"></span>
                </div>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="联系管理员" placement="left-start">
                <div data-role="tile" data-size="small" style="background-color: #016974">
                    <!--联系管理员-->
                    <span class="mif-record_voice_over icon"></span>
                </div>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="退出登录" placement="right-start">
                <div data-role="tile" data-size="small" style="background-color: #016974">
                    <!--退出登录-->
                    <span class="mif-switch icon"></span>
                </div>
            </el-tooltip>
            <div data-role="tile" style="background-color: #CD894C" v-on:click="push_score">
                <span class="mif-chart-dots icon"></span>
                <span class="branding-bar">成绩查询</span>
            </div>
            <div data-role="tile" style="background-color: #1F333A" v-on:click="push_departure">
                <span class="mif-airplane icon"></span>
                <span class="branding-bar">离/返校登记</span>
            </div>
            <div data-role="tile" style="background-color: #65BCB6" v-on:click="push_scholarship">
                <span class="mif-assignment icon"></span>
                <span class="branding-bar">奖学金评选</span>
            </div>
            <div data-role="tile" style="background-color: #016974" v-on:click="push_poverty">
                <span class="mif-pencil icon"></span>
                <span class="branding-bar">贫困生登记</span>
            </div>
        </div>
    </div>
</template>

<script>
    import {Tooltip} from 'element-ui'

    export default {
        components: {
            'el-tooltip': Tooltip,
        },
        name: "operation-panel",
        created() {
            // this.$router.push('login')
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
