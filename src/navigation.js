import Vue from 'vue'
import style from './scss/pc.scss' 
import Logo from './components/logo.vue'
import SendButton from './components/sendButton.vue'

new Vue({
    el: '#muxi-logo',
    render:h => h(Logo)
})
new Vue({
    el: '#send-button',
    render:h => h(SendButton)
})

