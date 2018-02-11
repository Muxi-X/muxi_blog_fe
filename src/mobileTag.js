import Vue from 'vue'
import Mobile from './components/mobile.vue'

const MobileTag = {
    template: "#mobileTag",
    mixins: [Mobile]
}

MobileTag.el = "#mobileTag"
const mobileTag = new Vue(MobileTag)
