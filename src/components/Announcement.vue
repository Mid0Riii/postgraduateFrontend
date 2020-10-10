<template>
    <div>
        <el-tabs v-model="editableTabsValue" type="border-card" closable @edit="handleTabsEdit">
            <el-tab-pane
                    :key="item.name"
                    v-for="(item) in editableTabs"
                    :label="item.title"
                    :name="item.name">
                <div v-if="editableTabsValue!=='index'" class="announce">
                    <h1>{{item.title}}</h1>
                    <el-divider></el-divider>
                    <div class="announce-content">
                    <pre>{{item.content}}</pre>
                    </div>
                    <div class="announce-files" v-if="item.files!==null">
                        <span>附件</span>
                        <div
                        v-for="file in item.files"
                        :key="file['file_title']">
                            <a :href=file.url>{{file.title}}</a>
                            <el-divider direction="vertical"></el-divider>
                        </div>
                    </div>
                </div>
                <el-table
                        :data="announcements"
                        style="width: 100%;"
                        v-if="editableTabsValue==='index' && announcements!==[]"
                        :row-class-name="tableRowClassName"
                >
                    <el-table-column
                            prop="ann_title"
                            label="标题"
                            width="700">
                        <template slot-scope="scope">
                            <span style="margin-left: 10px;cursor: pointer" @click="openAnnouncement(scope.row.id)">{{ scope.row.ann_title }}</span>
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
                            <el-tag :type="tagType[scope.row.ann_urgency]">{{urgency[scope.row.ann_urgency]}}</el-tag>
                        </template>
                    </el-table-column>
                </el-table>

            </el-tab-pane>
        </el-tabs>

    </div>
</template>

<script>
    import {Tabs, TabPane, Message, Table, TableColumn, Tag,Divider} from 'element-ui'
    import api from '../network/api'

    export default {
        components: {
            "el-tabs": Tabs,
            "el-tab-pane": TabPane,
            "el-table": Table,
            "el-table-column": TableColumn,
            "el-tag": Tag,
            "el-divider":Divider
        },
        name: "Announcement",
        data() {
            return {
                editableTabsValue: 'index',
                editableTabs: [{
                    title: '主页',
                    name: 'index',
                    content: 'Tab 1 content',
                    files:'',
                },
                ],
                tabIndex: 1,
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
                rowType: {
                    "1": "danger-row",
                    "2": "warning-row",
                    "3": ""
                },
                announcements: [
                    {
                        "id": "",
                        "ann_title": "",
                        "ann_body": "",
                        "ann_file": [
                            {
                                "title":"",
                                "url":""
                            }
                        ],
                        "ann_pubdate": "",
                        "ann_urgency": ""
                    },
                ],
            }
        },
        created() {
            api.getAnnouncement()
                .then(res => {
                    this.announcements = res.data.data;
                })
                .catch(error => {
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
            },
            tableRowClassName: function ({row}) {
                return this.rowType[row.ann_urgency]
            },
            openAnnouncement: function (id) {
                for (let i = 0; i < this.announcements.length; i++) {
                    let ann = this.announcements[i];
                    if (ann["id"] === id) {
                        if (this.editableTabs.findIndex(item => item.title === ann["ann_title"]) === -1) {
                            this.editableTabs.push({
                                title: ann["ann_title"],
                                name: ann["ann_title"],
                                content: ann["ann_body"],
                                files:ann['ann_file']
                            });
                        }
                        this.editableTabsValue = ann["ann_title"];
                        console.log(this.editableTabs);
                        break;
                    }
                }
            }
        }
    }
</script>

<style>
    .el-tabs__nav .el-tabs__item:nth-child(1) span {
        display: none;
    }

    .el-table .warning-row {
        background: oldlace;
    }

    .el-table .success-row {
        background: #f0f9eb;
    }

    .el-table .danger-row {
        background: #FEF0F0;
    }
    .announce-content{
        text-align: left;
        margin-top: 20px;
        overflow-y: auto;
        max-height: 300px;
    }
    .announce-content pre{
        word-wrap: break-word;
        white-space: pre-wrap;
    }
    .announce-files{
        margin-left: 30px;
        text-align: left;
        margin-top: 20px;
    }
    .announce-files span{
        font-weight: bold;
    }
</style>
