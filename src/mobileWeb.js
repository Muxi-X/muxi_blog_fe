import Vue from 'vue'
import Mobile from './components/Mobile'
import style from './scss/reset.scss'

const MobileWeb = {
    template: "#mobileWeb",
    mixins: [Mobile]
}

MobileArchive.el = "#mobileWeb"
const mobileWeb = new Vue(MobileWeb)