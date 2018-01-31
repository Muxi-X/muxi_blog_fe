<template>
    <div>
        <edit-blog :flag = "this.edit_flag"></edit-blog>
    </div>
</template>
<script>
import Cookie from '../common/cookie.js'
import edit from './EditSend.vue'

export default {
    data() {
        return {
            edit_flag: true
        }
    },
    components: {
        "edit-blog": edit
    }
}
</script>


