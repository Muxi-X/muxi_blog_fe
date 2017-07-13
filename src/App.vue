<template>
  <div id="app">
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
      message: 'Hello Ninja!'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 180px;
  text-align: center;
}
h2 {
  font-size: 40px;
}
a {
  display: block;
  color: skyblue;
  font-size: 20px;
  margin-top: 10px;
}
</style>