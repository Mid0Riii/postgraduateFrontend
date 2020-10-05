<template>
    <el-tabs type="border-card">
        <el-tab-pane label="成绩查询">
            <el-table :data="scores"
                      border
                      :header-cell-style="{fontWeight:900,fontSize:'14px',color:'black'}">
                <el-table-column
                        type="index"
                        width="120"
                        label="#"
                >
                </el-table-column>
                <el-table-column
                        prop="sem_name"
                        label="学期"
                        width="200">
                </el-table-column>
                <el-table-column
                        prop="sco_course"
                        label="课程"
                        width="200">
                </el-table-column>
                <el-table-column
                        prop="sco_score"
                        label="分数"
                        width="270">
                </el-table-column>
            </el-table>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
    import {Table, TableColumn, Message, TabPane, Tabs} from 'element-ui'
    import api from "../network/api"
    export default {
        name: "Score",
        components: {
            "el-table": Table,
            "el-table-column": TableColumn,
            "el-tab-pane": TabPane,
            "el-tabs": Tabs,
        },
        data() {
            return {
                scores: [
                    {
                        "sco_sem": "",
                        "sem_name": "",
                        "sco_course": "",
                        "sco_score": ""
                    },
                ],
            }
        },
        created(){
            api.getScore()
                .then(res=>{
                    this.scores = res.data;
                })
                .catch(error=> {
                    Message.error(error)
                })
            }
        }
</script>

<style scoped>

</style>
