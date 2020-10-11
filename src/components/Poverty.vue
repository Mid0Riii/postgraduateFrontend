<template>
    <el-tabs type="border-card">
        <el-tab-pane label="贫困生登记">
            <div>


                <el-form :model="form" class="poverty-form">
                    <el-row>
                        <el-col :span=6>
                            <el-form-item label="学号" :label-width="formLabelWidth">
                                {{student.stu_id}}
                            </el-form-item>
                        </el-col>
                        <el-col :span=6>
                            <el-form-item label="姓名" :label-width="formLabelWidth">
                                {{student.stu_name}}
                            </el-form-item>
                        </el-col>
                        <el-col :span=6>
                            <el-form-item label="学院" :label-width="formLabelWidth">
                                {{student.stu_college}}
                            </el-form-item>
                        </el-col>
                        <el-col :span=6>
                            <el-form-item label="专业" :label-width="formLabelWidth">
                                {{student.stu_major}}
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span=12>
                            <el-form-item label="家庭成员1" :label-width="formLabelWidth">
                                <el-input v-model="form.por_family1" :width="formInputWidth"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span=12>
                            <el-form-item label="家庭成员1联系方式" :label-width="formLabelWidth">
                                <el-input v-model="form.por_family1_tel"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-form-item label="家庭成员1工作单位" :label-width="formLabelWidth">
                        <el-input v-model="form.por_family1_job"></el-input>
                    </el-form-item>
                    <el-row>
                        <el-col :span=12>
                            <el-form-item label="家庭成员2" :label-width="formLabelWidth">
                                <el-input v-model="form.por_family2"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span=12>
                            <el-form-item label="家庭成员2联系方式" :label-width="formLabelWidth">
                                <el-input v-model="form.por_family2_tel"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-form-item label="家庭成员2工作单位" :label-width="formLabelWidth">
                        <el-input v-model="form.por_family2_job"></el-input>
                    </el-form-item>
                    <el-row>
                        <el-col :span=12>
                            <el-form-item label="是否为建档立卡户" :label-width="formLabelWidth">
                                <el-select v-model="form.por_is_archived" placeholder="请选择">
                                    <el-option label="是" value="true"></el-option>
                                    <el-option label="否" value="false"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-button type="primary" @click="submit">
                        提 交
                    </el-button>
                </el-form>
            </div>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
    import api from "../network/api"

    export default {
        name: "Poverty",
        data() {
            return {
                form: {},
                student: {},
                formLabelWidth: "150px",
                formInputWidth: "100px"
            }
        },
        created() {
            this.student = this.$store.state.student;
            api.getPoverty()
                .then(res => {
                    let form = res.data.data[0];
                    form.por_is_archived += "";
                    this.form = form;
                })
                .catch(err => {
                    this.$message.error(err)
                })
        },
        methods: {
            submit() {
                api.updatePoverty(this.form.id, this.form)
                    .then(res => {
                        this.$message.success("更新成功");
                        console.log(res);
                    })
                    .catch(err => {
                        this.$message.error(err.message)
                    })
            }
        }
    }

</script>

<style>
</style>
