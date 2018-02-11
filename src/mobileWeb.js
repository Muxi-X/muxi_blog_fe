import Vue from 'vue'
import Mobile from './components/mobile/mobile.vue'

const WebMobile = {
    template: "#mobileWeb",
    mixins: [Mobile]
}

WebMobile.el = "#mobileWeb"
const mobileWeb = new Vue(WebMobile)
