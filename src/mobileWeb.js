import Vue from 'vue'
import Mobile from './components/mobile.vue'
import style from './scss/reset.scss'

const MobileWeb = {
    template: "#mobileWeb",
    mixins: [Mobile]
}

MobileWeb.el = "#mobileWeb"
const mobileWeb = new Vue(MobileWeb)