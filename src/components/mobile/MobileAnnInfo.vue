<template>
    <div style="background-color: white;height: 700px;max-height: 700px;padding-top: 30px">
        <el-row>
            <el-col span=20 offset=2>
                <div>
                    <h1>{{currentAnn.ann_title}}</h1>
                    <div class="announce-content">
                        <pre>{{currentAnn.ann_body}}</pre>
                    </div>
                    <div class="announce-files" v-if="currentAnn.ann_file!==null">
                        <van-divider>附件</van-divider>
                        <div
                                v-for="file in currentAnn.ann_file"
                                :key="file['file_title']">
                            <a :href=file.url>{{file.title}}</a>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "MobileAnnInfo",
        data() {
            return {
                currentAnn: {}
            }
        },
        created() {
            this.currentAnn = this.$store.state.mobile.currentAnn;
            console.log(this.currentAnn)
        }
    }
</script>

<style>
    .info-contain {
        background-color: white;
        margin-left: 10px;
    }

    .announce-content {
        text-align: left;
        margin-top: 20px;
        overflow-y: auto;
        max-height: 300px;
    }

    .announce-content pre {
        word-wrap: break-word;
        white-space: pre-wrap;
    }

    .announce-files {
        margin-left: 30px;
        text-align: left;
        margin-top: 20px;
    }

    .announce-files span {
        font-weight: bold;
    }
</style>
