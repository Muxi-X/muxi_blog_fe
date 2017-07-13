<template>
    <div id="app"  :class="$style.app">
        <h2> {{ message }} </h2>
        <a href="https://github.com/Muxi-Studio/ninja">
      github
    </a>
        <a href="http://muxistudio.com/">
      @Muxi-Studio
    </a>
    </div>
</template>
<script>
export default {
    name: 'app',
    data() {
        return {
            message: 'Second!'
        }
    }
}
</script>
<style lang="scss" module>
.app {
    margin: 0;
}

.foo {
    margin-top: 180px;
}
</style>
