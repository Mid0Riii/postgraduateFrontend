<template>
<div>
    <van-cell value="学期">
    <van-field
            label="学期"
            readonly
            clickable
            :value="currentSemester"
            placeholder="选择学期"
            @click="showPicker = true"
    ></van-field>
    </van-cell>
    <van-cell v-for="score in currentScore"
              :key="score.sco_score"
              :title="score.sco_course"
              :value="score.sco_score"
    >
    </van-cell>
    <van-popup v-model="showPicker" round position="bottom">
        <van-picker
                show-toolbar
                :columns="columns"
                @cancel="showPicker = false"
                @confirm="onConfirm"
        />
    </van-popup>
</div>
</template>

<script>
    import api from '../../network/api'
    export default {
        name: "MobileScore",
        data(){
            return{
                value: '',
                showPicker: false,
                columns: [],
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
        created(){
            this.$store.state.mobile.currentPage = "score";
            this.$store.state.mobile.currentPageName = "成绩查询"
            api.getScore()
                .then(res => {
                    this.scores = res.data.data;
                    this.scores.forEach((item) => {
                        let obj = this.columns.find(sem => sem === item.sem_name);
                        if (obj === undefined) {
                            this.columns.push(item.sem_name)
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
                    this.$notify.error(error.message)
                })
        },
        methods: {
            onConfirm(value) {
                this.currentSemester = value;
                this.currentScore.length=0;
                this.scores.forEach((item)=>{
                    if(item.sem_name===this.currentSemester){
                        this.currentScore.push(item)
                    }
                });
                this.showPicker=false;
            },
        },
    }
</script>

<style>
    .van-field__label{
        font-size: 16px;
        line-height: 37px;
    }

</style>
