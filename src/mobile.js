import Vue from 'vue'
import Mobile from './components/mobile'
import style from './scss/reset.scss'

// const App_mobile = {
//     template: "#app_mobile",
//     mixins: [app_mobile]
// }

// App_mobiled.el = "#app_mobile"
// const app_mobile = new Vue(App_mobile)

new Vue({
    el: "#mobile",
    render: h => h(Mobile)
})