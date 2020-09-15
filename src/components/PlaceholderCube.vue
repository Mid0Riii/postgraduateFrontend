<template>
    <div>
        <div data-role="cube" class="placehoder-cube"></div>
        <span id="motto">格物致新 厚德泽人</span>
    </div>
</template>

<script>
    export default {
        name: "placehoder-cube"
    }
</script>

<style scoped>
    #motto {
        display: inline-block;
        vertical-align: middle;
        font-weight: 200;
        font-size: 2rem;
        font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Roboto", "Ubuntu", "Helvetica Neue", sans-serif;
    }
    .placehoder-cube{
        vertical-align: middle;
        margin-top: 10%;
    }
</style>
