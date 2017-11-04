<template>
    <div>
        <!-- <navi class="navi"></navi> -->
        <sign class="sign"></sign>
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
                <input v-model="this.image" placeholder="博客的封面图" class="image">
                <input v-model="new_tag" @keyup.enter="add_tag" placeholder="标签" autofocus class="write_tag inline_block">
                <button v-on:click="add_tag" class="add_tag inline_block">ADD</button>
                <div v-for="tag in tags" class="tag_list inline_block" :key="tags.indexOf(tag)"> {{tag}}
                    <button v-on:click="remove_tag(tag)" class="delete">X</button>
                </div>
                <div v-if="this.tip" class="tip">最多五个标签</div>
            </div>
            <textarea v-model.trim="summary" class="summary" placeholder="Summary...(no more than 100 words)" maxlength="100"></textarea>
            <div class="editor">
                <textarea :value="input" @input="update" class="write inline_block"></textarea>
                <div class="md_box inline_block">
                    <div v-html="compiledMarkdown" class="view_md"></div>
                </div>
            </div>
            <button v-on:click="submit" class="submit">POST</button>
        </div>
        <modal v-if="this.login_tip" v-on:cancel="this.cancel">
        </modal>
    </div>
</template>

<script>
    // import navigation from './navigation.vue'
    import sign from './sign.vue'
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
                input: "",
                group: "",
                title: "",
                summary: "",
                tip: false,
                new_tag: "",
                tags: [],
                login_tip: false,
                image: ""
            }
        },
        components: {
            // "navi": navigation,
            "sign": sign,
            "modal": modal
        },
        computed: {
            compiledMarkdown: function() {
                return marked(this.input, {
                    sanitize: true
                })
            }
        },
        methods: {
            addTag() {
                var tag = this.new_tag.trim();
                if (tag && this.tags.length < 5) {
                    this.tags.push(tag);
                    this.new_tag = "";
                } else if (this.tags.length >= 5 && this.new_tag) {
                    this.tip = true
                }
            },
            remove_tag(tag) {
                var index = this.tags.indexOf(tag);
                this.tags.splice(index, 1);
            },
            show_tip() {
                this.login_tip = true
            },
            cancel() {
                this.login_tip = false
            },
            submit() {
                if (this.image == "")
                    this.image = "http://upload-images.jianshu.io/upload_images/4938344-0b55e372b7787ed3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
                if (Cookie.getCookie("token")) {
                    fetch('/api/v2.0/send/', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'token': Cookie.getCookie("token")
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
                           window.location.pathname = "/"
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
    @import '../scss/utility.scss';
    @import '../scss/pc.scss';
    code {
        color: #f29a76;
    }
    
    .title {
        height: 22px;
        font-size: 22px;
        width: 796px;
        font-weight: bold;
        text-align: center;
        overflow: hidden;
        outline: 0;
        flex-direction: column;
        white-space: nowrap;
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
        border-bottom: 2px solid #d9dcdc;
        width: 764px;
    }
    
    .editor {
        font-size: 0;
        overflow: scroll;
    }
    
    .write,
    .md_box {
        width: 400px;
        height: 700px;
        vertical-align: top;
        box-sizing: border-box;
        padding: 10px 20px;
        font-size: 16px;
        border-top: 2px solid #d9dcdc;
        border-bottom: 2px solid #d9dcdc;
    }
    
    .md_box {
        background-color: #f6f6f6;
        border-left: 2px solid #d9dcdc;
        overflow: scroll;
    }
    
    .summary {
        height: 80px;
        width: 760px;
        padding: 10px 20px;
        font-size: 16px;
    }
    
    .submit {
        width: 64px;
        height: 36px;
        border-radius: 2px;
        color: #fff;
        background-color: #ffc162;
        margin-left: 100px;
        margin-top: 30px;
    }
    
    .write_tag,
    .image {
        width: 80px;
        height: 20px;
        font-size: 16px;
        border: 2px solid #ffc162;
        margin-right: 20px;
    }
    
    .add_tag {
        color: #fff;
        background-color: #ffc162;
        border-radius: 2px;
    }
    
    .add_tag:hover {
        background-color: #f29a76;
        cursor: pointer;
    }
    
    .tag_list {
        margin-left: 20px;
        color: #ffc162;
    }
    
    .tip {
        color: #f29a76;
    }
    
    .delete {
        border-radius: 2px;
        font-size: 12px;
        color: #ffffff;
        width: 14px;
        height: 14px;
        vertical-align: middle;
        text-align: center;
    }
    
    .delete:hover {
        cursor: pointer;
        background-color: #f29a76;
        color: #fff;
    }
    
    .image {
        width: 100%;
        margin: 10px 0;
    }
</style>

