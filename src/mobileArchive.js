import Vue from 'vue'
import Mobile from './components/mobile/mobile.vue'
import style from './scss/reset.scss'

const MobileArchive = {
    template: "#mobileArchive",
    mixins: [Mobile]
}

MobileArchive.el = "#mobileArchive"
const mobileArchive = new Vue(MobileArchive)