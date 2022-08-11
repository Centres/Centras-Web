<template>
<div class="education-card">
  <div class="education-title">学历-{{personalEducation.degree}}</div>

    <div class="education-content">
      <div class="education-content-top">
        <div>{{personalEducation.school}}</div>
        <div>{{personalEducation.time}}</div>
      </div>
      <div class="education-content-middle">
        <div>{{personalEducation.degree}}</div>
        <div>{{personalEducation.major}}</div>
        <div>{{personalEducation.location}}</div>
      </div>
      <div class="education-content-bottom">
        <div v-for="item in personalEducation.courses" class="course-card">{{item}}</div>
      </div>
  </div>

</div>
</template>

<script setup lang="ts">
import data from '@/assets/information'
import {defineProps, ref} from "vue";

type Props={
  educationData:any
}
const prop = defineProps<Props>()

const personalEducation = prop.educationData

</script>

<style scoped lang="scss">
.education-card{
  width: 100%;
  min-width: 200px;
  -webkit-border-radius: 2vw;
  -moz-border-radius: 2vw;
  border-radius: 2vw;
  padding: 2vw;
  box-sizing: border-box;
  line-height: 4vh;
  &:hover{
    animation: bright 1s infinite;
  }
  .education-title{
    border-bottom: 0.1vh solid #ffffff;
    font-weight: bold;
    font-size: 1.5vw;
    margin-bottom: 2vh;
  }
  .education-content{
    font-size: 1.5vw;
    &-top{
      display: flex;
      justify-content: space-between;
    }
    &-middle{
      display: flex;
      justify-content: space-between;
    }
    &-bottom{
      .course-card{
        display: inline-block;
        padding: 1vh;
        background: rgba(95,158,160,0.3);
        -webkit-border-radius: 1vw;
        -moz-border-radius: 1vw;
        border-radius: 1vw;
        border: 1px solid #000;
        margin-right: 1vw;
        margin-top: 2vh;
      }
    }
  }
}
@keyframes bright {
  0%{ box-shadow:  0.1vw 0.1vw 0.5vw 0.1vw white;}
  50%{box-shadow:  0.1vw 0.1vw 1.5vw 0.1vw white;}
  100%{box-shadow:  0.1vw 0.1vw 0.5vw 0.1vw white;}
}
</style>