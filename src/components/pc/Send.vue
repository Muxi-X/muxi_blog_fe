<template>
    <div>
        <send-blog :flag = "this.edit_flag"></send-blog>
    </div>
</template>
<script>
import Cookie from '../../common/cookie.js'
import send from './EditSend.vue'

export default {
    data() {
        return {
            edit_flag: false
        }
    },
    components: {
        "send-blog": send
    }
}
</script>


