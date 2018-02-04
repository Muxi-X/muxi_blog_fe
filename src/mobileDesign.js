import Vue from 'vue'
import Mobile from './components/mobile/mobile.vue'
import style from './scss/reset.scss'

const MobileDesign = {
    template: "#mobileDesign",
    mixins: [Mobile]
}

MobileDesign.el = "#mobileDesign"
const mobileDesign = new Vue(MobileDesign)