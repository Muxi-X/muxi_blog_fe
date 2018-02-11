import Vue from 'vue'
import Mobile from './components/mobile/mobile.vue'

const MobileDesign = {
    template: "#mobileDesign",
    mixins: [Mobile]
}

MobileDesign.el = "#mobileDesign"
const mobileDesign = new Vue(MobileDesign)
