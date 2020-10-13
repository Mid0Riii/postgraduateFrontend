<template>
    <div>
        <van-cell-group :title="addressbook[0].stu_class">
            <van-cell is-link
                      v-for="(add,index) in addressbook"
                      :key="add.stu_id"
                      @click="openAddressBook(index)"
            >
                <template #title>
                    <span class="custom-title">{{add.stu_name}}</span>
                </template>
            </van-cell>
        </van-cell-group>

        <van-popup v-model="popupShow"
                   round
                   position="right"
                   closeable
                   :style="{height:'100%',width:'80%'}"
        >
            <div class="popup-content">
                <span style="font-size: 40px;font-weight: bold">{{showaddressbook.stu_name}}</span><br>
                <span style="font-size: 20px;color: #969799">{{showaddressbook.stu_id}}</span><br>
                <span style="font-size: 20px;color: #969799">{{showaddressbook.stu_class}}</span><br>
                <span style="font-size: 16px;color: #969799">{{showaddressbook.stu_birth}}</span><br>
                <span style="font-size: 16px;color: #969799">{{showaddressbook.tel}}</span><br>

            </div>
        </van-popup>
    </div>
</template>

<script>
    import api from "@/network/api";

    export default {
        name: "MobileAddressbook",
        data() {
            return {
                addressbook: [
                    {
                        "stu_id": "",
                        "stu_name": "",
                        "stu_tel": "",
                        "stu_birth": "",
                        "stu_class": "",
                    }
                ],
                popupShow: false,
                showaddressbook:
                    {
                        "stu_id": "",
                        "stu_name": "",
                        "stu_tel": "",
                        "stu_birth": "",
                        "stu_class": "",
                    }
            }
        },
        created() {
            api.getAddressBook()
                .then(res => {
                    this.addressbook = res.data.data;

                })
                .catch(err => {
                    this.$notify(err.message)
                });
            this.$store.state.mobile.currentPage = "addressbook";
            this.$store.state.mobile.currentPageName = "通讯录"
        },
        methods: {
            openAddressBook(index) {
                this.showaddressbook = this.addressbook[index];
                this.popupShow = true;
            }
        }
    }
</script>

<style>
    .card {
        margin-bottom: 24px;
        padding: 24px;
        background-color: #fff;
        border-radius: 12px;
        box-shadow: 0 8px 12px #ebedf0;
    }

    .custom-title {
        font-size: 16px;
    }
    .popup-content{
        margin-top: 40%;
        font-size: 20px;
        color: #323233;
        text-align: center;
        line-height: 50px;
    }
    .popup-content span{
        margin-top: 40px;
    }
</style>
