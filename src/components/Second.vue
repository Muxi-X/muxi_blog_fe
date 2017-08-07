<template>
    <div>
        <navi :class="$style.navi"></navi>
    <div :class="$style.main">
        <img :class="$style.avatar">
        <div :class="$style.right">
            <div :class="$style.blog_title"></div>
            <div :class="$style.info">
                <div :class="$style.author">作者</div>
                <div :class="$style.time">时间</div>
            </div>
        </div>
        </div>
        </div>
</template>
<script>
import navigation from './navigation.vue'
export default {
    data() {
        return {
            // "id": "",
            // "url": ""
        }
    },
    components: {
        "navi": navigation
    },
    mounted() {
        //this.url = window.location.split('/')
    }
}
</script>
<style lang="scss" module>

</style>
