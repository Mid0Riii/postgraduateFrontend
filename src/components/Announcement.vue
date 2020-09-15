<template>
<div>
    <el-tabs v-model="editableTabsValue" type="border-card" closable @edit="handleTabsEdit">
        <el-tab-pane
                :key="item.name"
                v-for="(item) in editableTabs"
                :label="item.title"
                :name="item.name">
            <el-table
                    :data="announcements"
                    style="width: 100%"
                    :row-class-name="tableRowClassName">
                <el-table-column
                        prop="ann_title"
                        label="标题"
                        width="700">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px;cursor: pointer" @click="openAnnouncement">{{ scope.row.ann_title }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="ann_pubdate"
                        label="发布日期"
                        width="150">
                </el-table-column>
                <el-table-column
                        prop="ann_urgency"
                        label="紧急程度">
                    <template slot-scope="scope">
                        <el-tag type="danger" v-if="scope.row.ann_urgency==='置顶'">置顶</el-tag>
                        <el-tag type="warning" v-if="scope.row.ann_urgency==='紧急'">紧急</el-tag>
                        <el-tag v-if="scope.row.ann_urgency==='一般'">一般</el-tag>
                    </template>
                </el-table-column>
            </el-table>

        </el-tab-pane>
    </el-tabs>

</div>
</template>

<script>
    import {Tabs,TabPane,Message,Table,TableColumn,Tag} from 'element-ui'
    import api from '../network/api'
    export default {
        components:{
            "el-tabs":Tabs,
            "el-tab-pane":TabPane,
            "el-table":Table,
            "el-table-column":TableColumn,
            "el-tag":Tag,
        },
        name: "Announcement",
        data() {
            return {
                editableTabsValue: '1',
                editableTabs: [{
                    title: '主页',
                    name: '1',
                    content: 'Tab 1 content'
                }],
                tabIndex: 1,
                announcements:[
                    {
                        "id":"",
                        "ann_title": "",
                        "ann_body": "",
                        "ann_file": [
                            ""
                        ],
                        "ann_pubdate": "",
                        "ann_urgency": ""
                    },
                ],
            }
        },
        created(){
            api.getAnnouncement()
                .then(res=>{
                    this.announcements = res.data
                })
                .catch(error=>{
                    Message.error(error)
                })
        },
        methods: {
            handleTabsEdit(targetName, action) {
                if (action === 'remove') {
                    let tabs = this.editableTabs;
                    let activeName = this.editableTabsValue;
                    if (activeName === targetName) {
                        tabs.forEach((tab, index) => {
                            if (tab.name === targetName) {
                                let nextTab = tabs[index + 1] || tabs[index - 1];
                                if (nextTab) {
                                    activeName = nextTab.name;
                                }
                            }
                        });
                    }

                    this.editableTabsValue = activeName;
                    this.editableTabs = tabs.filter(tab => tab.name !== targetName);
                }
            }
        }

    }
</script>

<style scoped>

</style>
