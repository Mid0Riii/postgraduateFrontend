<template>
    <div>
        <div class="homepage">
            <router-link to="/" exact>
                <img id="titleimg" src="../assets/NCUlogo.png">
                <span id="title">南昌大学研究生管理系统</span>
            </router-link>
            <div class="row main-contain">
                <div class="operationpanel">
                    <OperationPanel></OperationPanel>
                </div>
                <div class="info-panel" style="background-color: #FFFFFF">
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
        components: {
            OperationPanel,
        },
        data() {
            return {}
        },
        created() {
            if (!this.$store.state.isLogin) {
                this.$router.push('/login')
            }
        },
        methods: {}
    }
</script>

<style scoped>
    .homepage {
        min-width:1080px;
        background-color: #FFFFFF;
        padding-left: 100px;
        padding-right: 100px;
        padding-top: 3rem;
        padding-bottom: 3rem;
        border-radius: 10px;
        margin: 50px 50px;
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

    .operationpanel {
        margin-right: 50px;
    }

    a {
        text-decoration: none;
        color: black;
    }

    .info-panel {
        width: 1100px;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }

</style>
