import Vue from 'vue'
import Mobile from './components/Mobile'
import style from './scss/reset.scss'

const MobileHome = {
    template: "#mobile",
    mixins: [Mobile]
}

Mobile.el = "#mobile"
const mobile = new Vue(Mobile)