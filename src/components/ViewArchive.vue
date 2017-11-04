<template>
    <div class="mobile full_height full_width">
        <mobile-header v-on:clickButton="this.show"></mobile-header>
        <div class="full_width cont">
            <archive-box class="box_style"></archive-box>
        </div>
        <transition name="slide-fade">
            <mobile-navi class="moblie_navi" v-show="this.show_navi" v-on:click_mask="this.show"></mobile-navi>
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
            show_navi: true
        }
    },
    components: {
        "mobile-header": header,
        "mobile-navi": mobileNavi,
        "archive-box": archive
    },
    methods: {
        show() {
            this.show_navi = !this.show_navi
        }
    }
}
</script>
<style lang="scss">
@import '../scss/mobile.scss';
@import '../scss/utility.scss';
</style>


