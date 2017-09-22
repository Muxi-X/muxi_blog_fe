import Vue from 'vue'
import Mobile from './components/Mobile'
import style from './scss/reset.scss'

const MobileDesign = {
    template: "#mobileDesign",
    mixins: [Mobile]
}

MobileDesign.el = "#mobileDesign"
const mobileDesign = new Vue(MobileDesign)