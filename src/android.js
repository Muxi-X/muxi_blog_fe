import Vue from 'vue'
import Android from './components/Android'
import style from './reset.scss'
import navigation from './components/navigation'
import sign from './components/sign'
import content from './components/content'
// import archive from './components/archive'

new Vue({
    el: '#android',
    render: h => h(Android)
})