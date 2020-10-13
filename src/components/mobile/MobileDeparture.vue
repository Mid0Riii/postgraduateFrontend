<template>
    <div>
        <van-cell-group title="基本信息">
            <van-cell title="学期" value="2019-2020(1)"/>
            <van-cell title="类型" value="内容"/>
        </van-cell-group>
        <van-cell-group title="位置">
            <van-cell title="位置">
                <!-- 使用 right-icon 插槽来自定义右侧图标 -->
            </van-cell>
        </van-cell-group>
        <van-cell-group title="操作">
            <van-cell>
                <van-row>
                    <van-col span=12>
                        <van-button style="width: 100%" type="warning" size="small">重新获取位置</van-button>
                    </van-col>
                    <van-col span=12>
                        <van-button style="width: 100%" type="primary" size="small">提交</van-button>
                    </van-col>
                </van-row>
            </van-cell>
        </van-cell-group>
        <van-collapse v-model="activeNames">
            <van-collapse-item title="历史记录" name="1">
            </van-collapse-item>
        </van-collapse>

    </div>
</template>

<script>
    export default {
        name: "MobileDeparture",
        data() {
            return {
                activeNames: ['1'],
            }
        },
        created(){

        },
    }
</script>

<style scoped>

</style>
