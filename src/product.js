import Vue from 'vue'
import Product from './components/Product'
import style from './scss/reset.scss'

new Vue({
    el: '#product',
    render: h => h(Product)
})