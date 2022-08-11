<template>
<div class="resume">
  <div class="resume-content">
    <div class="personal-info">
      <PersonalInfo :personalData="data.personalData"></PersonalInfo>
    </div>
    <div class="personal-education">
      <PersonalEducation v-for="item in data.personalEducation" :education-data="item"></PersonalEducation>
    </div>
    <div class="personal-work-experience">
      <PersonalWorkExperience v-for="(item,index) in data.workExperiences" :data="item" :key="index"></PersonalWorkExperience>
    </div>
    <div class="personal-project-experience">
      <PersonalProject v-for="(item,index) in data.projectExperiences" :key="index" :data="item"></PersonalProject>
    </div>
  </div>

</div>
</template>

<script setup lang="ts">
import data from '@/assets/information'
import PersonalInfo from '@/components/Resume/PersonalInfo.vue'
import PersonalEducation from '@/components/Resume/PersonalEducation.vue'
import PersonalWorkExperience from '@/components/Resume/PersonalWorkExperience.vue'
import PersonalProject from '@/components/Resume/PersonalProject.vue'
console.log('data',data);
</script>

<style scoped lang="scss">
.resume{
  width: 100%;
  height: 95vh;
  overflow: auto;
  .resume-content{
    width: 60vw;
    border: 0.5vh solid #ffffff;
    margin: 0 auto 3vh;
    padding-top: 3vh;
    padding-bottom: 3vh;
    -webkit-border-radius:1vh ;
    -moz-border-radius:1vh ;
    border-radius:1vh ;
    .personal-info{
      display: flex;
      margin-bottom: 3vh;
    }
    .personal-education{
      display: flex;
      justify-content: space-evenly;
      margin-bottom: 3vh;
    }
    .personal-work-experience{
      margin-bottom: 3vh;
      display: flex;
      justify-content: space-evenly;
    }
  }
}
@media (max-width: 1050px) {
  .resume{
    .resume-content{
      width: 95%;
      border: none;
      padding-left: 3vw;
      padding-right: 3vw;
    }
    .personal-info{
    }
    .personal-education{
      flex-direction: column;
    }
    .personal-work-experience{
      flex-direction: column;
    }
  }

}
</style>