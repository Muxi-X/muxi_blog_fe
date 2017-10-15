import Vue from 'vue'
import Mobile from './components/Mobile'
import style from './scss/reset.scss'

const MobileTag = {
    template: "#mobileTag",
    mixins: [Mobile]
}

MobileTag.el = "#mobileTag"
const mobileTag = new Vue(MobileTag)