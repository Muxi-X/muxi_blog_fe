import Vue from 'vue'
import App from './components/App'
import style from './reset.scss'
import navigation from './components/navigation'
import sign from './components/sign'
import content from './components/content'
// import archive from './components/archive'

new Vue({
    el: '#app',
    render: h => h(App)
})