<template>
    <div>
        <div class="main">
            <textarea v-model="title" class="title margin" placeholder="文章标题"></textarea>
            <div class="group margin">
                <label for="web">
                    <input type="radio" id="web" value="1" v-model="group"> Web
                </label>
                <label for="android">
                    <input type="radio" id="android" value="3" v-model="group"> Android
                </label>
                <label for="design">
                    <input type="radio" id="design" value="2" v-model="group"> Design
                </label>
                <label for="product">
                    <input type="radio" id="product" value="4" v-model="group"> Product
                </label>
            </div>
            <div class="group margin">
                <input v-model="this.image" placeholder="博客的封面图url（选填）" class="image">
            </div>
            <textarea v-model.trim="summary" class="summary" placeholder="Summary (不超过100字)" maxlength="100"></textarea>
            <div class="editor">
                <textarea :value="input" @input="update" class="write inline_block"></textarea>
                <div class="md_box inline_block">
                    <div v-html="compiledMarkdown" class="view_md"></div>
                </div>
            </div>
            <div class="group">
                <input v-model="new_tag" @blur="isBlur" @keyup.enter="addTag" placeholder="标签" autofocus class="write_tag inline_block">
                <button v-on:click="addTag" class="add_tag inline_block">ADD</button>
                <div v-for="tag in tags" class="new_tag inline_block" :key="tags.indexOf(tag)"> {{tag}}
                    <button v-on:click="removeTag(tag)" class="delete">X</button>
                </div>
                <div v-if="this.tip" class="tip">最多五个标签</div>
            </div>
            <button v-on:click="submit" class="submit">POST</button>
        </div>
        <modal v-if="this.login_tip" v-on:cancel="this.cancel">
        </modal>
    </div>
</template>

<script>
    import modal from './modal.vue'
    import Cookie from '../common/cookie.js'
    var _ = require('lodash');
    var marked = require('marked')
    
    marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: true,
        smartLists: true,
        smartypants: false
    });
    
    export default {
        data() {
            return {
                id: 0,
                input: "",
                group: "",
                title: "",
                summary: "",
                tip: false,
                new_tag: "",
                tags: [],
                login_tip: false,
                image: "",
                blog: {
                    type: Object
                },
                url: "",
                used_method: ""
            }
        },
        props: ['flag'],
        components: {
            "modal": modal
        },
        mounted() {
            this.token = Cookie.getCookie("token");
            if (this.flag) {
                this.get_blog();
            }

            if (!this.token) {
                this.login_tip = true
            }
        },
        computed: {
            compiledMarkdown: function() {
                return marked(this.input, {
                    sanitize: true
                })
            }
        },
        methods: {
            isBlur() {
                this.tip = false
            },
            get_blog() {
                this.id = window.location.pathname.split('/')[2];
                fetch('/api/v2.0/' + this.id + '/views/').then(res => {
                return res.json()
            }).then(res => {
                this.blog = res.blog

                this.input = this.blog.body
                this.title = this.blog.title
                this.group = this.blog.type
                this.tags = this.blog.tags
                this.image = this.blog.img_url,
                this.summary = this.blog.summary
            })
            },
            addTag() {
                var tag = this.new_tag.trim();
                if (tag && this.tags.length < 5) {
                    this.tags.push(tag);
                    this.new_tag = "";
                } else if (this.tags.length >= 5 && this.new_tag) {
                    this.tip = true
                }
            },
            removeTag(tag) {
                var index = this.tags.indexOf(tag);
                this.tags.splice(index, 1);
            },
            cancel() {
                this.login_tip = false
            },
            submit() {
                if (this.image == "")
                    this.image = "http://upload-images.jianshu.io/upload_images/4938344-0b55e372b7787ed3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"

                if (this.token) {
                    if (this.flag) { // edit
                        this.url = '/api/v2.0/' + this.id + '/edit/';
                        this.used_method = 'PUT';
                    } else { // send
                        this.url = '/api/v2.0/send/';
                        this.used_method = 'POST';
                    }

                    fetch(this.url, {
                        method: this.used_method,
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'token': this.token
                        },
                        body: JSON.stringify({
                            title: this.title, // 博客的标题
                            summary: this.summary, // 博客小结
                            body: this.input, // 博客的内容
                            img_url: this.image, //图片  
                            type_id: this.group, // 1是web ， 2 是设计 ， 3 是安卓，4是产品  
                            tags: this.tags
                        })
                    }).then(res => {
                        if (res.ok)
                            return res.json()
                        else 
                            this.login_tip = true;
                    }).then(res => {
                        window.location.pathname = "/second/" + res.id
                    })                         
                } else {
                    this.login_tip = true
                }
            },
            update: _.debounce(function(e) {
                this.input = e.target.value
            }, 300)
        }
    }
</script>

<style lang="scss">
@import '../scss/send.scss';
</style>

