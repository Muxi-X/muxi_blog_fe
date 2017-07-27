<template>
    <div :class="$style.wrap" id="web">
        sdfsdf
        <sign :class="$style.sign"></sign>
        <navi :class="$style.navi"></navi>
        <con :class="$style.cont" :items="this.items"></con>
    </div>
</template>
<script>
import navigation from './navigation.vue'
import sign from './sign.vue'
import content from './content.vue'
export default {
    data() {
        return {
            items:[]
        }
    },
    components: {
        "navi": navigation,
        "sign": sign,
        "con": content
    },
    mounted() {
        fetch('/web/').then(res => {
            return res.json()
            })
            .then(res => {
                this.items = res.blogs
                this.page_Num = res.pages_count
                this.current_page = res.page
            })
    },
    methods: {
        }
}
</script>
<style lang='scss' module>
@import '../common.scss'
</style>