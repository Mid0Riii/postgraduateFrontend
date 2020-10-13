<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>
<script>
// import Homepage from './components/Homepage.vue'
import router from "@/router";
import 'metro4'
import store from "./store"
export default {
  router, store,
  name: 'App',
  components: {
    // Homepage,
  },

}
</script>
<style>
#app {
  /*text-align: center;*/
  /*margin-top: 60px;*/
  background: #F7F8FA;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  overflow: auto;
  position: absolute;
}

</style>
