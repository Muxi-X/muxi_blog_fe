import Vue from 'vue'
import Sort from './components/pc/Sort.vue'

const TagBlogs = {
    template: "#tagBlogs",
    mixins: [Sort]
}
TagBlogs.el = "#tagBlogs"
const tagBlogs = new Vue(TagBlogs)
