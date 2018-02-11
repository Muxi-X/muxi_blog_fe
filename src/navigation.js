import Vue from 'vue'
import Logo from './components/logo.vue'
import SendButton from './components/sendButton.vue'
import Sign from './components/sign.vue'

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
