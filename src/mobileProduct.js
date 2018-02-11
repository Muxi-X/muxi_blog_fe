import Vue from 'vue'
import Mobile from './components/mobile.vue'

const MobileProduct = {
    template: "#mobileProduct",
    mixins: [Mobile]
}

MobileProduct.el = "#mobileProduct"
const mobileProduct = new Vue(MobileProduct)
