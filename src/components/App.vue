<template>
    <div>
    <navi :class="$style.navi"></navi>
    <div>
        
        </div>
        </div>
</template>
<script>
import navigation from './navigation.vue'

export default {
    data() {
            return {
            }
        },
        components: {
            "navi": navigation
        },
        methods: {
        }
}
</script>
<style lang='scss' module>
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