<template>
    <div :class="$style.wrap">
        <sign :class="$style.sign"></sign>
        <navi :class="$style.navi"></navi>
        <con :class="$style.content"></con>
        </div>
    </div>
</template>
<script>
import navigation from './navigation.vue'
import sign from './sign.vue'
import content from './content.vue'
export default {
    data() {
            return {
            }
        },
        components: {
            "navi": navigation,
            "sign": sign,
            "con": content
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
.sign {
    height: 30px;
    width: 100px;
    color: #959595;
    background: #dcdcdc;
    margin: 0px -2px;
    font-size: 14px;
    position: fixed;
    right: 0px;
    top: 0px;
}
.content {
    margin-left: 250px;
    width: 600px;
    height: 550px;
    overflow: hidden;
}
</style>