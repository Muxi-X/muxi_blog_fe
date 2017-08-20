import Vue from 'vue'
import Sort from './components/Sort'
import style from './scss/reset.scss'

const App = {
    template: "#app",
    mixins: [Sort]
}
const TagBlogs = {
    template: "#tagBlogs",
    mixins: [Sort]
}
const ArchiveBlogs = {
    template: "#archiveBlogs",
    mixins: [Sort]
}
const Web = {
    template: "#web",
    mixins: [Sort]
}
const Android = {
    template: "#android",
    mixins: [Sort]
}
const Design = {
    template: "#design",
    mixins: [Sort]
}
const Product = {
    template: "#product",
    mixins: [Sort]
}

App.el = "#app"
const app = new Vue(App)

TagBlogs.el = "#tagBlogs"
const tagBlogs = new Vue(TagBlogs)

ArchiveBlogs.el = "#archiveBlogs"
const archiveBlogs = new Vue(ArchiveBlogs)

Web.el = "#web"
const web = new Vue(Web)

Android.el = "#android"
const android = new Vue(Android)

Design.el = "#design"
const design = new Vue(Design)

Product.el = "#product"
const product = new Vue(Product)



