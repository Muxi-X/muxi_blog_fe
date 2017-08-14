import Vue from 'vue'
import ArchiveBlogs from './components/archiveBlogs'
import style from './reset.scss'

new Vue({
    el: '#archiveBlogs',
    render: h => h(ArchiveBlogs)
})