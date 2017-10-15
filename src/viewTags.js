import Vue from 'vue'
import ViewTags from './components/ViewTags.vue'
import style from './scss/reset.scss'

new Vue({
    el: "#viewTags",
    render: h => h(ViewTags)
})