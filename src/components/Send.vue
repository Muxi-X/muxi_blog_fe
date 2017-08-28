<template>
    <div>
        <navi class="navi"></navi>
        <sign class="sign"></sign>
        <div class="main">
            <textarea v-model="title" class="title margin" placeholder="文章标题"></textarea>
            <div class="group margin">
                <label for="Web">
                    <input type="radio" id="Web" value="1" v-model="group"> Web
                </label>
                <label for="Android">
                    <input type="radio" id="Android" value="3" v-model="group"> Android
                </label>
                <label for="Design">
                    <input type="radio" id="Design" value="2" v-model="group"> Design
                </label>
                <label for="Product">
                    <input type="radio" id="Product" value="4" v-model="group"> Product
                </label>
            </div>
            <div class="group margin">
                <input v-model="newTag" @keyup.enter="addTag" placeholder="add tag?" autofocus class="write_tag inline-block">
                <button v-on:click="addTag" class="add_tag inline-block">ADD</button>
                <div v-for="tag in tags" class="tag_list inline-block"> {{tag}}
                    <button v-on:click="removeTag(tag)" class="delete">X</button>
                </div>
                <div v-if="this.tip" class="tip">最多五个标签</div>
            </div>
            <textarea v-model.trim="summary" class="summary" placeholder="Summary...(no more than 200 words)" maxlength="200"></textarea>
            <div class="editor">
                <textarea :value="input" @input="update" class="write"></textarea>
                <div class="md_box">
                    <div v-html="compiledMarkdown" class="view_md"></div>
                </div>
            </div>
            <button v-on:click="submit" class="submit">POST</button>
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
            summary: "",
            tip: false,
            newTag: "",
            tags: []
        }
    },
    components: {
        "navi": navigation,
        "sign": sign
    },
    computed: {
        compiledMarkdown: function () {
            return marked(this.input, {
                sanitize: true
            })
        }
    },
    methods: {
        addTag() {
            var tag = this.newTag.trim();
            if (tag && this.tags.length < 5) {
                this.tags.push(tag);
                this.newTag = "";
            } else if (this.tags.length >= 5 && this.newTag) {
                this.tip = true
            }
        },
        removeTag(tag) {
            var index = this.tags.indexOf(tag);
            this.tags.splice(index, 1);
        },
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
                    tags: this.tags
                })
            }).then(value => {
                window.location.pathname = "/"
            })
        },
        update: _.debounce(function (e) {
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
    width: 800px;
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
    display: inline-block;
    width: 402px;
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

.write_tag {
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
</style>

