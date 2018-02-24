<template>
    <div class="load">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
</template>

<style lang="scss" scoped>
 @import "../scss/color.scss";
  .load .line:nth-last-child(2) {
    animation: loading .6s .2s linear infinite;
  }
  
  .line {
    display: inline-block;
    width: 30px;
    height: 30px;
    background-color: $yellow;
    margin-right: 10px;
    border-radius: 3px;
  }
  
  .load .line:nth-last-child(1) {
    animation: loading .6s .1s linear infinite;
  }
  
  .load .line:nth-last-child(2) {
    animation: loading .6s .2s linear infinite;
  }
  
  .load .line:nth-last-child(3) {
    animation: loading .6s .3s linear infinite;
  }
  
  @keyframes loading {
    0 {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(0, 30px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
</style>