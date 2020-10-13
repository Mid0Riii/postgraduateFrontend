<template>
    <div>
        <div>
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item>1</van-swipe-item>
                <van-swipe-item>2</van-swipe-item>
                <van-swipe-item>3</van-swipe-item>
                <van-swipe-item>4</van-swipe-item>
            </van-swipe>
            <div class="gird-title">
                <span>常用功能</span>
            </div>
            <van-grid :column-num="3" clickable>
                <van-grid-item icon="star-o" text="通知中心" to="/mobile/announcement"></van-grid-item>
                <van-grid-item icon="chat-o" text="通讯录" to="/mobile/addressbook"></van-grid-item>
                <van-grid-item icon="points" text="成绩查询" to="/mobile/score"></van-grid-item>
            </van-grid>
            <div class="gird-title">
                <span>学生服务</span>
            </div>
            <van-grid :column-num="4" clickable>
                <van-grid-item icon="location-o" text="离/返校登记" to="/mobile/depart"></van-grid-item>
                <van-grid-item icon="balance-list-o" text="奖学金申请"></van-grid-item>
                <van-grid-item icon="manager-o" text="贫困生登记"></van-grid-item>
                <van-grid-item icon="award-o" text="荣誉登记"></van-grid-item>
            </van-grid>
        </div>
    </div>
</template>
<script>
    export default {
        name: "Index",
        data() {
            return {
                active: 0,
            }
        },
        created(){
            this.$store.state.mobile.currentPage="index";
            this.$store.state.mobile.currentPageName="研究生信息平台"

        },
        methods: {
            push_announcement() {
                this.$router.push('announcement').catch(err => {
                    console.log(err)
                });
            },
            push_addressbook(){
                this.$router.push('addressbook').catch(err=>{
                    console.log(err)
                });
            }
        }
    }
</script>

<style>
    .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
        background-color: #39a9ed;
    }

    .personal-info {
        width: 100%;
        background-color: white;
        line-height: 50px;
    }

    .gird-title {
        margin-top: 10px;
        margin-left: 10px;
        color: #969799;
        margin-bottom: 10px;
    }
</style>
