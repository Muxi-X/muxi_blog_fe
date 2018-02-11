import Vue from 'vue'
import Mobile from './components/mobile/mobile.vue'

const MobileHome = {
    template: "#mobile",
    mixins: [Mobile]
}

Mobile.el = "#mobile"
const mobile = new Vue(Mobile)
