<template>
<div class="personal-project">
  <div class="personal-project-title">项目经历</div>
  <div>{{projectExperiences.projectName}}</div>
  <div>{{projectExperiences.role}}</div>
  <div>{{projectExperiences.projectDes}}</div>
  <div>{{projectExperiences.responseFor}}</div>
  <div><div v-for="item in projectExperiences.programming">{{item}}</div></div>
  <div><div v-for="(item,index) in projectExperiences.star">{{index+1}}:{{item}}</div></div>
</div>
</template>

<script setup lang="ts">
type Props = {
  data:any
}
const prop = defineProps<Props>()

let projectExperiences = prop.data
</script>

<style scoped>

</style>