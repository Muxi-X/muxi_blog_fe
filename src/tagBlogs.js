import Vue from 'vue'
import Sort from './components/Sort'
import style from './scss/reset.scss'

const TagBlogs = {
    template: "#tagBlogs",
    mixins: [Sort]
}
TagBlogs.el = "#tagBlogs"
const tagBlogs = new Vue(TagBlogs)