<template>
<div>
    <el-tooltip  effect="dark" content="" placement="top">
        <span>贫困生</span>
    </el-tooltip>

</div>
</template>

<script>
    import {Tooltip} from 'element-ui'
    export default {
        components:{
            "el-tooltip":Tooltip
        },
        name: "Poverty"
    }
</script>

<style scoped>

</style>
