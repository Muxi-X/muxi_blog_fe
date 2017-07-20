<template>
    <div>
    <navigation class="navi"></navigation>
    <!-- <archieve></archieve> -->
    <div>
        lalalal
        </div>
        </div>
</template>
<script>
import navigation from './navigation.vue'
//import archieve from './archieve'

export default {
    data() {
            return {
            }
        },
        components: {
            "navigaiton": navigation,
            "archieve": archieve
        },
        methods: {
        }
}
</script>
<style lang="scss" mudule>
.navi {
    height: 100%;
    width: 200px;
    position: fixed;
    left: 0px;
    top: 0px;
    background: #ffffff;
    overflow: hidden;
}
</style>