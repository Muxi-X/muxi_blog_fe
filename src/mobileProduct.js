import Vue from 'vue'
import Mobile from './components/mobile/mobile.vue'
import style from './scss/reset.scss'

const MobileProduct = {
    template: "#mobileProduct",
    mixins: [Mobile]
}

MobileProduct.el = "#mobileProduct"
const mobileProduct = new Vue(MobileProduct)