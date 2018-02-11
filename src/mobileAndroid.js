import Vue from 'vue'
import Mobile from './components/mobile'

const MobileAndroid = {
    template: "#mobileAndroid",
    mixins: [Mobile]
}

MobileAndroid.el = "#mobileAndroid"
const mobileAndroid = new Vue(MobileAndroid)
