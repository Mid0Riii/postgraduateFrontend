<template>
    <div>
        <el-tabs type="border-card" v-model="tabValue">
            <el-tab-pane label="奖学金申请" name="scholarship">
                <el-table
                        :data="scholarships"
                        border
                        style="width: 100%">
                    <el-table-column
                            fixed
                            prop="id"
                            label="id"
                            width="80">
                    </el-table-column>
                    <el-table-column
                            fixed
                            prop="sch_title"
                            label="奖学金名称"
                            width="150">
                    </el-table-column>
                    <el-table-column
                            prop="sch_type"
                            label="类别"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="sch_pub_date"
                            label="发布时间"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="sch_is_available"
                            label="评选是否开始"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="sch_info"
                            label="详情"
                            width="600">
                    </el-table-column>
                    <el-table-column
                            fixed="right"
                            label="操作"
                            width="100">
                        <template slot-scope="scope">
                            <el-button @click="showDrawer(scope.row)" type="primary" size="small">申请</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="我的申请" name="apply">
                <el-table
                        :data="applications"
                        border
                        style="width: 100%">
                    <el-table-column
                            fixed
                            prop="id"
                            width="70"
                            label="id"
                    >
                    </el-table-column>
                    <el-table-column
                            fixed
                            prop="sch_title"
                            label="奖学金"
                            width="150">
                    </el-table-column>
                    <el-table-column
                            prop="app_tutor_score"
                            label="导师考核得分"
                            width="150">
                    </el-table-column>
                    <el-table-column
                            prop="app_moral_score"
                            label="思想品德得分"
                            width="150">
                    </el-table-column>
                    <el-table-column
                            prop="app_course_score"
                            label="课业成绩得分"
                            width="150">
                    </el-table-column>
                    <el-table-column
                            prop="app_academy_score"
                            label="学术表现得分"
                            width="150">
                    </el-table-column>
                    <el-table-column
                            prop="app_social_score"
                            label="社会活动得分"
                            width="150">
                    </el-table-column>
                    <el-table-column
                            prop="app_general_score"
                            label="总分"
                            width="150">
                    </el-table-column>
                    <el-table-column
                            fixed="right"
                            prop="app_review_results"
                            label="审核状态"
                            width="150">
                    </el-table-column>
                    <el-table-column
                            fixed="right"
                            label="操作"
                            width="150">
                        <template slot-scope="scope">
                            <el-button @click="showUpdate(scope.row)" type="primary" size="small">编辑/删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
        </el-tabs>
        <el-drawer
                title="申报表"
                :visible.sync="applyView"
                :before-close="handleClose"
                direction="rtl"
                custom-class="demo-drawer"
                ref="drawer"
                size="60%"
        >
            <div class="demo-drawer__content">
                <el-form :model="form">
                    <el-form-item label="奖学金名" :label-width="formLabelWidth">
                        <el-input v-model="form.sch_title" :disabled="true"></el-input>
                    </el-form-item>
                    <el-form-item label="申请人" :label-width="formLabelWidth">
                        <el-input v-model="form.app_stu" :disabled="true"></el-input>
                    </el-form-item>
                    <el-form-item label="导师考核得分" :label-width="formLabelWidth">
                        <el-input-number v-model="form.app_tutor_score"></el-input-number>
                    </el-form-item>
                    <el-form-item label="思想品德得分" :label-width="formLabelWidth">
                        <el-input-number v-model="form.app_moral_score"></el-input-number>
                    </el-form-item>
                    <el-form-item label="课业成绩得分" :label-width="formLabelWidth">
                        <el-input-number v-model="form.app_course_score"></el-input-number>
                    </el-form-item>
                    <el-form-item label="学术表现得分" :label-width="formLabelWidth">
                        <el-input-number v-model="form.app_academy_score"></el-input-number>
                    </el-form-item>
                    <el-form-item label="社会活动得分" :label-width="formLabelWidth">
                        <el-input-number v-model="form.app_social_score"></el-input-number>
                    </el-form-item>
                    <el-form-item label="总分" :label-width="formLabelWidth">
                        <el-input-number v-model="form.app_general_score" :disabled="true"></el-input-number>
                    </el-form-item>
                </el-form>
                <div class="demo-drawer__footer">
                    <el-button @click="cancelForm">取 消</el-button>
                    <el-button type="primary" @click="submit">
                        提交
                    </el-button>
                </div>
            </div>
        </el-drawer>
        <el-drawer
                title="编辑申请"
                :visible.sync="updateView"
                :before-close="handleUpdateClose"
                direction="rtl"
                custom-class="demo-drawer"
                ref="drawer"
                size="60%"
        >
            <div class="demo-drawer__content">
                <el-form :model="updateForm">
                    <el-form-item label="奖学金名" :label-width="formLabelWidth">
                        <el-input v-model="updateForm.sch_title" :disabled="true"></el-input>
                    </el-form-item>
                    <el-form-item label="申请人" :label-width="formLabelWidth">
                        <el-input v-model="updateForm.app_stu" :disabled="true"></el-input>
                    </el-form-item>
                    <el-form-item label="导师考核得分" :label-width="formLabelWidth">
                        <el-input-number v-model="updateForm.app_tutor_score"></el-input-number>
                    </el-form-item>
                    <el-form-item label="思想品德得分" :label-width="formLabelWidth">
                        <el-input-number v-model="updateForm.app_moral_score"></el-input-number>
                    </el-form-item>
                    <el-form-item label="课业成绩得分" :label-width="formLabelWidth">
                        <el-input-number v-model="updateForm.app_course_score"></el-input-number>
                    </el-form-item>
                    <el-form-item label="学术表现得分" :label-width="formLabelWidth">
                        <el-input-number v-model="updateForm.app_academy_score"></el-input-number>
                    </el-form-item>
                    <el-form-item label="社会活动得分" :label-width="formLabelWidth">
                        <el-input-number v-model="updateForm.app_social_score"></el-input-number>
                    </el-form-item>
                    <el-form-item label="总分" :label-width="formLabelWidth">
                        <el-input-number v-model="updateForm.app_general_score" :disabled="true"></el-input-number>
                    </el-form-item>
                </el-form>
                <div class="demo-drawer__footer">
                    <el-button @click="cancelUpdateForm">
                        取 消
                    </el-button>
                    <el-button type="primary" @click="submitUpdate">
                        提 交
                    </el-button>
                    <el-button type="danger" @click="deleteApply">
                        删 除
                    </el-button>
                </div>
            </div>
        </el-drawer>
    </div>
</template>

<script>
    import {
        Table,
        TableColumn,
        Message,
        TabPane,
        Tabs,
        Button,
        Drawer,
        Form,
        FormItem,
        Input,
        InputNumber,
    } from 'element-ui'
    import api from "../network/api"

    export default {
        name: "ScholarShip",
        components: {
            'el-table': Table,
            'el-table-column': TableColumn,
            'el-tabs': Tabs,
            'el-tab-pane': TabPane,
            'el-button': Button,
            'el-drawer': Drawer,
            'el-form': Form,
            'el-form-item': FormItem,
            'el-input': Input,
            'el-input-number': InputNumber,
        },
        data() {
            return {
                scholarships: [
                    {
                        "id": "",
                        "sch_title": "",
                        "sch_type": "",
                        "sch_pub_date": "",
                        "sch_is_available": "",
                        "sch_info": ""
                    }
                ],
                applications: [
                    {
                        "app_sch": 1,
                        "app_stu": 1,
                        "sch_title": "",
                        "app_tutor_score": 1.0,
                        "app_moral_score": 1.0,
                        "app_course_score": 1.0,
                        "app_academy_score": 1.0,
                        "app_social_score": 1.0,
                        "app_review_results": "未审核",
                        "app_general_score": 0.0
                    }
                ],
                tabValue:"scholarship",
                applyView: false,
                updateView: false,
                form: {
                    sch_title: '',
                    app_sch: '',
                    app_stu: '',
                    app_tutor_score: '',
                    app_moral_score: '',
                    app_course_score: '',
                    app_academy_score: '',
                    app_social_score: '',
                    app_general_score: 100,
                },
                updateForm: {
                    sch_title: '',
                    app_sch: '',
                    app_stu: '',
                    app_tutor_score: '',
                    app_moral_score: '',
                    app_course_score: '',
                    app_academy_score: '',
                    app_social_score: '',
                    app_general_score: 100,
                },
                formLabelWidth: '100px',
            }
        },
        created() {
            api.getScholarship()
                .then(res => {
                    this.scholarships = res.data.data;
                })
                .catch(error => {
                    Message.error(error)
                });
            api.getScholarshipApply()
                .then(res => {
                    this.applications = res.data.data;
                })
                .catch(error => {
                    Message.error(error)
                })
        },
        methods: {
            showDrawer: function (data) {
                this.applyView = true;
                this.form.app_sch = data.id;
                this.form.sch_title = data.sch_title;
                this.form.app_stu = this.$store.state.student.stu_name;
            },
            showUpdate: function (data) {
                api.retriveScholarshipApply(data.id)
                    .then(res => {
                        this.updateForm = res.data.data;
                    })
                    .catch(err => {
                        Message.error(err)
                    });
                this.updateForm.app_stu = this.$store.state.student.stu_name;
                this.updateView = true;
                console.log(this.updateForm)
            },
            cancelForm() {
                this.applyView = false;
                this.form={};
            },
            cancelUpdateForm() {
                this.updateView = false;
                this.updateForm={}
            },
            handleClose() {
                this.applyView = false;
                this.form={};
            },
            handleUpdateClose() {
                this.updateView = false;
                this.updateForm={}
            },
            submit() {
                this.form.app_stu = this.$store.state.student.id;
                api.postScholarshipApply(this.form)
                    .then(res => {
                        Message.success(res.data.message);
                        this.applyView = false;
                        this.form = {};
                        api.getScholarshipApply()
                            .then(res => {
                                this.applications = res.data.data;
                            })
                            .catch(error => {
                                Message.error(error)
                            });
                        this.tabValue="apply"
                    })
                    .catch(error => {
                        Message.error(error)
                    })

            },
            submitUpdate(){
                this.form.app_stu = this.$store.state.student.id;
                api.updateScholarchipApply(this.updateForm.id,this.updateForm)
                    .then(res=>{
                        Message.success(res.data.message);
                        this.updateView=false;
                        this.updateForm={};
                        api.getScholarshipApply()
                            .then(res => {
                                this.applications = res.data.data;
                            })
                            .catch(error => {
                                Message.error(error)
                            })
                    })
                    .catch(err=>{
                        Message.error(err)
                    })
            },
            deleteApply(){
                api.deleteScholarshipApply(this.updateForm.id)
                    .then(res=>{
                        console.log(res);
                        Message.success("删除成功");
                        this.updateView=false;
                        api.getScholarshipApply()
                            .then(res => {
                                this.applications = res.data.data;
                            })
                            .catch(error => {
                                Message.error(error)
                            });
                        this.updateForm={}
                    })
                    .catch(err=>{
                        Message.error(err);
                    })
            }
        },
        watch: {
            form: {
                handler(newValue) {
                    let form = newValue;
                    this.form.app_general_score = form.app_tutor_score * 0.05 + form.app_moral_score * 0.05 + form.app_course_score * 0.1 + form.app_academy_score * 0.75 + form.app_social_score * 0.05
                },
                deep: true
            },
            updateForm: {
                handler(newValue) {
                    let form = newValue;
                    this.updateForm.app_general_score = form.app_tutor_score * 0.05 + form.app_moral_score * 0.05 + form.app_course_score * 0.1 + form.app_academy_score * 0.75 + form.app_social_score * 0.05
                },
                deep: true
            }
        }
    }
</script>

<style>
    .el-input-number {
        line-height: 34px;
    }
</style>
