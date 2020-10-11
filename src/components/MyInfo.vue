<template>
    <div>
        <el-tabs type="border-card">
            <el-tab-pane label="个人信息" style="text-align: left">
                <h2>姓名：{{student.stu_name}}</h2>
                <h3>学院：{{student.stu_college}}</h3>
                <h3>专业：{{student.stu_major}}</h3>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>

    export default {
        name: "MyInfo",
        data(){
            return{
                student:{
                    stu_name:"",
                    stu_college:"",
                    stu_major: "",
                }
            }
        },
        created(){
            this.student = this.$store.state.student
        }
    }
</script>

<style scoped>

</style>
