<template>
    <div>
        <van-cell is-link
                  v-for="(ann,index) in announcements"
                  :key="ann.id"
                  @click="openAnn(index)"
        >
            <template #title>
                <span class="custom-title">{{ann.ann_title}}</span>
                <van-tag style="margin-left: 10px" :type="tagType[ann.ann_urgency]">{{urgency[ann.ann_urgency]}}
                </van-tag>
            </template>
        </van-cell>
    </div>
</template>

<script>
    import api from '../../network/api'

    export default {
        name: "MobileAnnnouncement",
        data() {
            return {
                announcements: [
                    {
                        "id":0 ,
                        "ann_title": "",
                        "ann_body": "",
                        "ann_file": null,
                        "ann_pubdate": "",
                        "ann_urgency": 0
                    },
                ],
                showAnnouncement: {
                    "id": "",
                    "ann_title": "",
                    "ann_body": "",
                    "ann_file": [{}],
                    "ann_pubdate": "",
                    "ann_urgency": ""
                },
                urgency: {
                    "1": "置顶",
                    "2": "紧急",
                    "3": "一般",

                },
                tagType: {
                    "1": "danger",
                    "2": "warning",
                    "3": ""
                },
                popupShow: false
            }
        },
        created() {
            api.getAnnouncement()
                .then(res => {
                    this.announcements = res.data.data
                })
                .catch(err => {
                    this.$notify(err.message)
                });
            this.$store.state.mobile.currentPage = "announcement";
            this.$store.state.mobile.currentPageName = "通知中心"
        },
        methods: {
            openAnn(index) {
                this.showAnnouncement = this.announcements[index];
                this.$store.state.mobile.currentAnn = this.announcements[index];
                this.$router.push("announcement/anninfo")
            },
        },
    }
</script>

<style>

</style>
