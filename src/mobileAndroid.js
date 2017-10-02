import Vue from 'vue'
import Mobile from './components/Mobile'
import style from './scss/reset.scss'

const MobileAndroid = {
    template: "#mobileAndroid",
    mixins: [Mobile]
}

MobileAndroid.el = "#mobileAndroid"
const mobileAndroid = new Vue(MobileAndroid)