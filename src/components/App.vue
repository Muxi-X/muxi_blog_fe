<template>
    <div :class="$style.wrap">
        <sign :class="$style.sign"></sign>
        <navi :class="$style.navi"></navi>
        <con :class="$style.cont" 
             :items="this.items" 
             :page_count="this.page_count" 
             v-on:pageUp="PageUp" 
             v-on:pageDown="PageDown"></con>
    </div>
</template>
<script>
import navigation from './navigation.vue'
import sign from './sign.vue'
import content from './content.vue'
export default {
    data() {
        return {
            items: []
        }
    },
    components: {
        "navi": navigation,
        "sign": sign,
        "con": content
    },
    mounted() {
        this.page_num
        fetch('/blogs/1').then(res => {
        //fetch('/api/v2.0/1').then(res => {
            return res.json()
            })
            .then(res => {
                this.items = res.blogs
                this.pages_count = res.pages_count
                //this.page_num = res.page
            })
    },
    methods: {
        PageUp() {
            if (this.page_num != this.pages_count) {
                this.page_num += 1;
                //console.log(this.page_num)
                fetch('/api/v2.0/'+ this.page_num).then(res => {
                    return res.json()
                })
                .then(res => {
                    this.items = res.blogs
                    this.pages_count = res.pages_count
                })
            }
        },
        PageDown() {
            if (this.page_num != 1) {
                this.page_num -= 1;
                //console.log(this.page_num)
                fetch('/api/v2.0/'+ this.page_num).then(res => {
                    return res.json()
                })
                .then(res => {
                    this.items = res.blogs
                    this.pages_count = res.pages_count
                })
            }
        }
    }
}
</script>
<style lang='scss' module>
@import '../common.scss'
</style>