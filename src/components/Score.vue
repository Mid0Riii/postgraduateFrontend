<template>
    <el-tabs type="border-card">
        <el-tab-pane label="成绩查询">
            <div class="select-semester">
                <el-select v-model="currentSemester" placeholder="请选择学期">
                    <el-option
                            v-for="item in semesters"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <el-table :data="currentScore"
                      border
                      :header-cell-style="{fontWeight:900,fontSize:'14px',color:'black'}"
                      class="score-content"
            >
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
    import {Table, TableColumn, Message, TabPane, Tabs, Select, Option} from 'element-ui'
    import api from "../network/api"

    export default {
        name: "Score",
        components: {
            "el-table": Table,
            "el-table-column": TableColumn,
            "el-tab-pane": TabPane,
            "el-tabs": Tabs,
            "el-select": Select,
            "el-option": Option
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
                semesters: [
                    // {
                    // value: '',
                    // label: ''
                    // }
                ],
                currentSemester:"",
                currentScore:[
                    {
                        "sco_sem": "",
                        "sem_name": "",
                        "sco_course": "",
                        "sco_score": ""
                    },
                ]
            }
        },
        created() {
            api.getScore()
                .then(res => {
                    this.scores = res.data.data;
                    this.scores.forEach((item) => {
                        let obj = this.semesters.find(sem => sem.value === item.sem_name);
                        if (obj === undefined) {
                            this.semesters.push({
                                value: item.sem_name,
                                label: item.sem_name,
                            })
                        }
                    });
                    this.currentSemester=this.scores[0].sem_name;
                    this.currentScore.length=0;
                    this.scores.forEach((item)=>{
                        if(item.sem_name===this.currentSemester){
                            this.currentScore.push(item)
                        }
                    });
                })
                .catch(error => {
                    Message.error(error)
                })
        },
        watch:{
            currentSemester:function () {
                //清空原分数
                this.currentScore.length=0;
                this.scores.forEach((item)=>{
                    if(item.sem_name===this.currentSemester){
                        this.currentScore.push(item)
                    }
                });
            }
        }
    }
</script>

<style>
    .select-semester {
        text-align: left;
        /*margin-left: 20px;*/
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .score-content{
        text-align: left;
        margin-top: 20px;
        overflow-y: auto;
        max-height: 300px;
    }
</style>
