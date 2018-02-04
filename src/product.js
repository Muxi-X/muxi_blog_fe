import Vue from 'vue'
import Sort from './components/pc/Sort.vue'
import style from './scss/reset.scss'


const Product = {
    template: "#product",
    mixins: [Sort]
}

Product.el = "#product"
const product = new Vue(Product)