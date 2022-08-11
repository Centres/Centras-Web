<template>
<div class="work-experience">
  <div class="work-experience-title">
    工作经历
  </div>
  <div class="work-experience-company-name">{{workExperiences.companyName}}</div>
  <div style="display: flex;justify-content: space-between">
    <div>{{workExperiences.department}}</div>
    <div>{{workExperiences.location}}</div>
  </div>
  <div>{{workExperiences.workTime}}</div>
  <div><span>介绍：</span>{{workExperiences.description}}</div>
  <div><span>职责：</span>{{workExperiences.workDuty}}</div>
</div>
</template>

<script setup lang="ts">

type Props = {
  data:any
}
const prop = defineProps<Props>()

console.log('prop',prop.data);
const workExperiences = prop.data
</script>

<style scoped lang="scss">
.work-experience{
  width: 100%;
  min-width: 200px;
  -webkit-border-radius: 2vw;
  -moz-border-radius: 2vw;
  border-radius: 2vw;
  padding: 2vw;
  box-sizing: border-box;
  line-height: 4vh;
  .work-experience-title{
    border-bottom: 0.1vh solid #ffffff;
    font-weight: bold;
    font-size: 1.5vw;
    margin-bottom: 2vh;
  }
  .work-experience-company-name{
    font-size: 1.3vw;
  }
  div{
    span{
      font-weight: bold;
      font-size: 1.5vw;
    }
  }
  &:hover{
    animation: bright 1s infinite;
  }
}
@keyframes bright {
  0%{ box-shadow:  0.1vw 0.1vw 0.5vw 0.1vw white;}
  50%{box-shadow:  0.1vw 0.1vw 1.5vw 0.1vw white;}
  100%{box-shadow:  0.1vw 0.1vw 0.5vw 0.1vw white;}
}
</style>