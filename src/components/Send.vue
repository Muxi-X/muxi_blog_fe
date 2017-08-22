<template>
    <div>
        <navi :class="$style.navi"></navi>
        <sign :class="$style.sign"></sign>
        <div :class="$style.main">
            <textarea v-model="title" :class="$style.title" placeholder="文章标题"></textarea>
            <div :class="$style.group">
                <input type="radio" id="Frontend" value="1" v-model="group">
                <label for="Frontend">Frontend</label>
                <input type="radio" id="Backend" value="1" v-model="group">
                <label for="Backend">Backend</label>
                <input type="radio" id="Android" value="3" v-model="group">
                <label for="Android">Android</label>
                <input type="radio" id="Design" value="2" v-model="group">
                <label for="Design">Design</label>
                <input type="radio" id="Product" value="4" v-model="group">
                <label for="Product">Product</label>
            </div>
            <textarea v-model="summary" :class="$style.summary" placeholder="Summary..."></textarea>
            <div :class="$style.editor">
                <textarea :value="input" @input="update" :class="$style.write"></textarea>
                <div :class="$style.md">
                    <div v-html="compiledMarkdown"></div>
                </div>
            </div>
            <button v-on:click="submit" :class="$style.submit">POST</button>
        </div>
    </div>
</template>

<script>
    import navigation from './navigation.vue'
    import sign from './sign.vue'
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
                input: "",
                group: "",
                title: "",
                summary: ""
            }
        },
        components: {
            "navi": navigation,
            "sign": sign
        },
        computed: {
            compiledMarkdown: function() {
                return marked(this.input, {
                    sanitize: true
                })
            }
        },
        methods: {
            submit() {
                fetch('/api/v2.0/send/', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'token': 'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6N30.P5rU9mV7xAVwTKf06RA7o1BOvF9jWLGDpYZ_fohWL6s'
                    },
                    body: JSON.stringify({
                        title: this.title, // 博客的标题
                        summary: this.summary, // 博客小结
                        body: this.input, // 博客的内容
                        img_url: "https://ooo.0o0.ooo/2017/07/01/5957bcf969294.jpg", //图片  
                        type_id: this.group, // 1是web ， 2 是设计 ， 3 是安卓，4是产品  
                        tags: "test"
                    })
                }).then(res => {
                    alert("success")
                })
            },
            update: _.debounce(function(e) {
                this.input = e.target.value
            }, 300)
    
        }
    }
</script>

<style lang="scss" module>
    @import '../scss/common.scss';
    .edit {
        display: inline-block;
        width: 49%;
        height: 100%;
        vertical-align: top;
        box-sizing: border-box;
        padding: 0 20px;
    }
    
    code {
        color: #f29a76;
    }
    
    .title,
    .group,
    .edit {
        composes: full-width from "sass-loader!../scss/utility.scss";
        composes: margin from "sass-loader!../scss/utility.scss";
    }
    
    .title {
        font-size: 22px;
        height: 22px;
        width: 800px;
        font-weight: bold;
        text-align: center;
        overflow: hidden; //resize: none;
        outline: 0;
        flex-direction: column;
        cursor: auto;
        white-space: pre-wrap;
        word-wrap: break-word;
        border-bottom: 2px solid #d9dcdc;
        padding-bottom: 15px;
    }
    
    .main {
        border: 2px solid #d9dcdc;
        border-radius: 2px;
    }
    
    .group {
        padding: 10px 20px;
    }
    
    .editor {
        font-size: 0;
        min-height: 400px;
    }
    
    .write,
    .md {
        composes: inline-block from "sass-loader!../scss/utility.scss"; //width: 400px;
        display: inline-block;
        width: 400px;
        vertical-align: top;
        box-sizing: border-box;
        padding: 0 20px;
        font-size: 16px;
        border-top: 2px solid #d9dcdc;
        border-bottom: 2px solid #d9dcdc;
    }
    
    .write {
        min-height: 400px;
    }
    
    .md {
        background-color: #f6f6f6;
        border-left: 2px solid #d9dcdc;
    }
    
    .summary {
        width: 98%;
        height: 100px;
    }
    
    .submit {
        width: 64px;
        height: 36px;
        border-radius: 2px;
        color: #000;
    }
</style>

