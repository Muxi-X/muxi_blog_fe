import Vue from 'vue'
import Sort from './components/Sort'
import style from './scss/reset.scss'

const ArchiveBlogs = {
    template: "#archiveBlogs",
    mixins: [Sort]
}

ArchiveBlogs.el = "#archiveBlogs"
const archiveBlogs = new Vue(ArchiveBlogs)