<template>
<div class="resume">
<div class="personal-info">
  <PersonalInfo :personalData="data.personalData"></PersonalInfo>
</div>
  <div class="personal-education">

  </div>
</div>
</template>

<script setup lang="ts">
import data from '@/assets/information'
import PersonalInfo from '@/components/Resume/PersonalInfo.vue'

console.log(data);
</script>

<style scoped lang="scss">
.resume{
  .personal-info{
    margin-left: 5vw;
  }
}
</style>