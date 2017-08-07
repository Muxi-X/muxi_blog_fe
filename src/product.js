import Vue from 'vue'
import Product from './components/Product'
import style from './reset.scss'
import navigation from './components/navigation'
import sign from './components/sign'
import content from './components/content'
// import archive from './components/archive'

new Vue({
    el: '#product',
    render: h => h(Product)
})