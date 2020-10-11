<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="登记">
        <el-form label-width="80px">
          <el-form-item label="学期" v-model="sem_name">{{sem_name}}</el-form-item>
          <el-form-item label="地址" v-model="place">{{place}}</el-form-item>
          <el-form-item label="提交类型" v-model="sem_dep_status">{{sem_dep_status}}</el-form-item>
          <el-form-item>
            <el-button type="primary" v-on:click="onSubmit">立即创建</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>

      <el-tab-pane label="离/返校登记">
        <el-table :data="departure"
                  border
                  :header-cell-style="{fontWeight:900,fontSize:'14px',color:'black'}">
          <el-table-column
              type="index"
              width="120"
              label="#"
          >
          </el-table-column>
          <el-table-column
              prop="depart_semster"
              label="学期"
              width="200">
          </el-table-column>
          <el-table-column
              prop="depart_type"
              label="类型"
              width="100">
          </el-table-column>
          <el-table-column
              prop="depart_loc"
              label="位置"
              width="270">
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>

</template>

<script>
import {Table, TableColumn, Message, TabPane, Tabs, Form, Button, FormItem} from 'element-ui'
import api from "../network/api"

export default {
  name: "Departure",
  components: {
    "el-table": Table,
    "el-table-column": TableColumn,
    "el-tab-pane": TabPane,
    "el-tabs": Tabs,
    "el-form": Form,
    "el-form-item": FormItem,
    "el-button": Button,
  },
  data() {
    return {
      departure: [
        {
          "depart_stu": "",
          "depart_type": "",
          "depart_loc": "",
          "depart_semster": "",
        },
      ],
      semester: '',
      place: '江西省南昌市青山湖区塘山镇南京东路南昌大学青山湖校区',
      student_num: '',
      sem_name: '',
      sem_dep_status: '',
    }
  },
  created() {
    api.getSemester()
        .then(res => {
          this.sem_name = res.data.data[0].sem_name;
          this.sem_dep_status = res.data.data[0].sem_dep_status;
        })
        .catch(error => {
          Message.error(error)
        });
    api.getDeparture()
        .then(res => {
          this.departure = res.data.data;
        })
        .catch(error => {
          Message.error(error)
        });
    api.getAuth()
        .then(res => {
          this.student_num = res.data.data[0].username;
        })
        .catch(error => {
          Message.error(error)
        });

  },
  methods: {
    onSubmit: function () {
      api.setDeparture({
        "depart_stu": parseInt(this.$store.state.student.stu_id),
        "depart_type": this.sem_dep_status,
        "depart_loc": this.place,
        "depart_semster": '',
      })
          .then(res => {
            console.log(res);
          })
          .catch(error => {
            Message.error(error.message + ":" + error.data.detail);
            console.log(error);
          });
    },
  }
}
</script>

<style scoped>

</style>
