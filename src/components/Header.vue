<template>
<div class="header">
  <div class="header-left" @click="toPage('/home')">Centras</div>
  <div class="header-center">
    <div class="nav">
      <div class="nav-button" @click="toPage('/resume')">Resume</div>
      <div class="nav-button" @click="toPage('/project')">Project</div>
      <div class="nav-button">Note</div>
    </div>
  </div>
  <div class="header-right"></div>
</div>
</template>

<script setup lang="ts">

import router from "@/router";

const toPage = (url:string) =>{
  router.push(url)
}
</script>

<style scoped lang="scss">
.header{
display: flex;
  height: 5vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  .header-left{
    width: 8vw;
    line-height: 5vh;
    font-size: 1.8vw;
    padding: 0.5vw;
    align-items: center;
    display: flex;
    justify-content: center;
  }
  .header-center{
    flex: 1;
    height: 100%;
    .nav{
      width: 50%;
      height: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      font-size: 1.5vw;
      .nav-button{
        width: 10vw;
        height: 100%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  .header-right{
    width: 10vw;
  }
}
</style>