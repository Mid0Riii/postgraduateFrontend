<template>
    <div>
        <van-sticky>
            <van-nav-bar
                    :title="navBarTitle()"
                    :left-arrow="showBackArrow()"
                    :left-text="showBackText()"
                    @click-left="clickBack"

            ></van-nav-bar>
        </van-sticky>
        <router-view></router-view>
        <van-tabbar v-model="active" @change="tabberChange">
            <van-tabbar-item icon="home-o">主页</van-tabbar-item>
            <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    export default {
        name: "MobileRoot",
        data() {
            return {
                active: 0,
                indexView: true,
                infoView: false,
            }
        },
        created() {
            this.$store.state.mobile.currentPage = "root";
            this.$store.state.mobile.currentPageName = "研究生信息平台";
            if (!this.$store.state.isLogin) {
                this.$router.push('/login')
            }
        },
        methods: {
            tabberChange(index) {
                switch (index) {
                    case 0:
                        this.$router.push("/mobile/index").catch(err => {
                            console.log(err)
                        });
                        break;
                    case 1:
                        this.$router.push("info").catch(err => {
                            console.log(err)
                        });
                        break;

                }
            },
            showBackArrow() {
                console.log(this.$store.state.mobile.currentPage);
                return !(this.$store.state.mobile.currentPage === "index" || this.$store.state.mobile.currentPage === "info");
            },
            showBackText() {
                let text = "返回";
                if (this.$store.state.mobile.currentPage === "index" ||this.$store.state.mobile.currentPage === "info") {
                    return ""
                } else{
                    return text;
                }
            },
            clickBack() {
                this.$router.go(-1);
            },
            navBarTitle() {
                return this.$store.state.mobile.currentPageName;
            }
        }
    }
</script>

<style>

</style>
