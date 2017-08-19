<template>
    <div :class="$style.wrap">
        <sign :class="$style.sign"></sign>
        <navi :class="$style.navi"></navi> 
        <div :class="$style.middle_right">
            <con :class="$style.cont" 
                 :items="this.items" 
                 :page_count="this.page_count"
                 :blog_num = "this.blog_num" 
                 v-on:pageUp="PageUp" 
                 v-on:pageDown="PageDown">
            </con>
            <tagBox :class="$style.tagBox"></tagBox>
            <archiveBox :class="$style.archiveBox"></archiveBox>
        </div>
    </div>
</template>

<script>
    import navigation from './navigation.vue'
    import sign from './sign.vue'
    import content from './content.vue'
    import tags from './tags.vue'
    import archive from './archive.vue'
    export default {
        data() {
            return {
                items: [],
                year: 0,
                month: 0
            }
        },
        components: {
            "navi": navigation,
            "sign": sign,
            "con": content,
            "tagBox": tags,
            "archiveBox": archive
        },
        mounted() {
            var api = window.location.pathname
            this.year = api.split('/')[2]
            this.month = api.split('/')[3]
            fetch('/api/v2.0/get_month/' + this.year + '/' + this.month + '/').then(res => {
                    return res.json()
                })
                .then(res => {
                    this.items = res.blogs
                    this.pages_count = res.pages_count
                    this.page_num = res.page
                    this.blog_num = res.blog_num
                })
        },
        methods: {
            PageUp() {
                if (this.page_num != this.pages_count) {
                    this.page_num += 1;
                    fetch('/api/v2.0/get_month/' + this.year + '/' + this.month + '/?page=' + this.page_num).then(res => {
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
                    fetch('/api/v2.0/get_month/' + this.year + '/' + this.month + '/?page=' + this.page_num).then(res => {
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
    @import '../scss/common.scss';
</style>