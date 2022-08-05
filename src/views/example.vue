<template>
<div>
  项目1：数据可视化疫情查看
  <button @click="toPage">点此进入</button>
</div>
</template>

<script setup lang="ts">
import router from "@/router";

const toPage = () =>{
  router.push('/covid')
}
</script>

<style scoped>

</style>