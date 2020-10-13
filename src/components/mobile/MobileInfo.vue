<template>
    <div>
        <div class="personal-info">
            <van-row>
                <van-col span="8"><span>姓名</span></van-col>
                <van-col span="16"><span>学院</span><span>专业</span></van-col>
            </van-row>
        </div>
        <van-grid :column-num="3" clickable>
            <van-grid-item icon="star-o" text="修改密码"></van-grid-item>
            <van-grid-item icon="service-o" text="联系我们"></van-grid-item>
            <van-grid-item icon="close" text="退出登录"></van-grid-item>
        </van-grid>
    </div>
</template>

<script>
    export default {
        name: "MobileInfo",
        created(){
            this.$store.state.mobile.currentPage="info";
            this.$store.state.mobile.currentPageName="个人信息"
        }
    }
</script>

<style scoped>

</style>
