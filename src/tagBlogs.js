import Vue from 'vue'
import TagBlogs from './components/tagBlogs'
import style from './scss/reset.scss'

new Vue({
    el: '#tagBlogs',
    render: h => h(TagBlogs)
})