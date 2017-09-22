import Vue from 'vue'
import Mobile from './components/Mobile'
import style from './scss/reset.scss'

const MobileHome = {
    template: "#mobileHome",
    mixins: [Mobile]
}

MobileHome.el = "#mobileHome"
const mobileHome = new Vue(MobileHome)