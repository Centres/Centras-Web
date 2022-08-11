<template>
  <div class="info-card">
    <div class="info-card-title" >个人信息</div>
      <div><span>姓名：</span>{{personalData.name}}</div>
      <div><span>性别：</span>{{personalData.gender}}</div>
      <div><span>邮箱：</span>{{personalData.email}}</div>
      <div><span>手机号码：</span>{{personalData.phone}}</div>
      <div><span>出生日期：</span>{{personalData.birth}}</div>
      <div><span>工作年限：</span>{{personalData.workTime}}</div>
      <div><span>求职意向：</span>{{personalData.workPrefer}}</div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

interface t  {
  name:String,
  gender:String,
  workTime:String,
  email:String,
  phone:Number,
  birth:String,
  workPrefer:String
}
type Props = {
  personalData:t
}
defineProps<Props>()
// const {personalData} = data

</script>

<style scoped lang="scss">
.info-card{
  box-sizing: border-box;
  width: 100%;
  -webkit-border-radius: 2vw;
  -moz-border-radius: 2vw;
  border-radius: 2vw;
  padding: 2vw;
  line-height: 4vh;
  font-size: 2vw;

  .info-card-title{
    border-bottom: 0.1vh solid #ffffff;
    font-weight: bold;
    font-size: 2.5vw;
    margin-bottom: 2vh;
    padding-bottom: 0.5vh;
  }
  div{
    span{
      width: 12vw;
      display: inline-block;
      text-align: right;
      font-size: 1.8vw;
      margin-right: 3vw;
      white-space: nowrap;
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