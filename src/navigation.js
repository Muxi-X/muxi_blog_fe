import Vue from 'vue'
import style from './scss/pc.scss' 
import Logo from './components/pc/logo.vue'
import SendButton from './components/pc/sendButton.vue'
import Sign from './components/pc/sign.vue'

new Vue({
    el: '#muxi-logo',
    render:h => h(Logo)
})
new Vue({
    el: '#send-button',
    render:h => h(SendButton)
})
new Vue({
    el: '#sign',
    render:h => h(Sign)
})
