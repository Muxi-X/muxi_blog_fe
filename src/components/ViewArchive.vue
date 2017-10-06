<template>
    <div class="mobile full_height full_width">
        <mobileHeader v-on:clickButton="this.show"></mobileHeader>
        <div class="full_width cont">
                <archiveBox class="box_style"></archiveBox>
        </div>
        <transition name="slide-fade">
            <mobileNavi class="moblie_navi" v-show="this.showNavi" v-on:clickMask="this.show"></mobileNavi>
        </transition>
    </div>
</template>
<script>
import header from './header'
import mobileNavi from './mobileNavi'
import archive from './archive.vue'

export default {
    data() {
        return {
            showNavi: true
        }
    },
    components: {
        "mobileHeader": header,
        "mobileNavi": mobileNavi,
        "archiveBox": archive
    },
    methods: {
        show() {
            this.showNavi = !this.showNavi
        }
    }
}
</script>
<style lang="scss">
@import '../scss/mobile.scss';
@import '../scss/utility.scss';
</style>


