<template>
    <div class="wrap">
        <sign class="sign"></sign>
        <navi class="navi"></navi>
        <div class="boxs">
            <tagBox class="tagBox"></tagBox>
            <archiveBox class="archiveBox"></archiveBox>
        </div>
        <con class="cont" 
             :items="this.items" 
             :pages_count="this.pages_count" 
             :blog_num="this.blog_num"
             v-on:pageUp="PageUp" 
             v-on:pageDown="PageDown">
        </con>
        
    </div>
</template>
<script>
import navigation from './navigation.vue'
import sign from './sign.vue'
import content from './content.vue'
import tags from './tags.vue'
import archive from './archive.vue'
import FecthSort from '../common/sortMap.js'

export default {
    data() {
        return {
            items: [],
            page_num: 1,
            kind: 0,
            tag: "",
            year: 0,
            month: 0,
            Url: ""
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
        var find = api.split('/')[1]
        this.kind = FecthSort.SortMap[find];

        if (this.kind == 0) {
            this.Url = "";
        } else if (this.kind == 5) {
            this.tag = api.split('/')[2];
            this.Url = "/" + this.tag + "/find_blogs";
        } else if (this.kind == 6) {
            this.year = api.split('/')[2];
            this.month = api.split('/')[3];
            this.Url = "/get_month/" + this.year + "/" + this.month;
        } else {
            this.Url = "/sort/?sort=" + this.kind;
        }
        this.FetchUrl()
    },
    methods: {
        PageUp() {
            if (this.page_num != this.pages_count) {
                this.page_num += 1;
                this.FetchUrl()
            }
        },
        PageDown() {
            if (this.page_num != 1) {
                this.page_num -= 1;
                this.FetchUrl()
            }
        },
        FetchUrl() {
            fetch('/api/v2.0' + this.Url + '/?page=' + this.page_num).then(res => {
                return res.json()
            })
                .then(res => {
                    this.items = res.blogs
                    this.pages_count = res.pages_count
                    this.page_num = res.page
                    this.blog_num = res.blog_num
                })
        }
    }
}
</script>
<style lang='scss'>
@import '../scss/pc.scss';
@import '../scss/utility.scss';
</style>