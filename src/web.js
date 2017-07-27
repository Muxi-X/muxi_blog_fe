import Vue from 'vue'
import Web from './components/Web'
import style from './reset.scss'
import navigation from './components/navigation'
import sign from './components/sign'
import content from './components/content'
// import archive from './components/archive'

new Vue({
    el: '#web',
    render: h => h(Web)
})