import Vue from 'vue'
import Mobile from './components/mobile.vue'
import style from './scss/reset.scss'

const WebMobile = {
    template: "#mobileWeb",
    mixins: [Mobile]
}

WebMobile.el = "#mobileWeb"
const mobileWeb = new Vue(WebMobile)