<template>
    <div>
        <div class="homepage gird ">
            <router-link to="/" exact>
                <img id="titleimg" src="../assets/NCUlogo.png">
                <span id="title">南昌大学研究生管理系统</span>
            </router-link>
            <div class="row main-contain">
                <div class="operationpanel">
                <OperationPanel></OperationPanel>
                </div>
                <div class="info-panel" style="background-color: #F4F4F4">
                    <transition name="fade" mode="out-in">
                        <router-view></router-view>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import OperationPanel from "@/components/OperationPanel";

    export default {
        name: "homepage",
        components: {OperationPanel, },
        data() {
            return {
            }
        },
        created() {
            if(!this.$store.state.isLogin){
                this.$router.push('/login')
            }
        },
        methods: {}
    }
</script>

<style scoped>
    .homepage {
        margin: 100px;
        background-color: #f4f4f4;
        padding-left: 100px;
        padding-right: 100px;
        padding-top: 3rem;
        padding-bottom: 3rem;
        border-radius: 10px;
    }

    .main-contain {
        padding-top: 20px;
    }

    #title, #motto {
        display: inline-block;
        vertical-align: middle;
        font-weight: 200;
        font-size: 2rem;
        font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Roboto", "Ubuntu", "Helvetica Neue", sans-serif;
    }

    #titleimg {
        vertical-align: middle;
        width: 2rem;
        height: 2rem;
    }
    .operationpanel{
        margin-right: 30px;
    }
    a {
        text-decoration: none;
        color: black;
    }
    .info-panel{
        width: 1100px;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }

    /* 想做个登录毛玻璃特效，如何解决安全问题*/
    .mask {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.2);
        z-index: 999;
        filter: blur(10px);
    }
</style>
