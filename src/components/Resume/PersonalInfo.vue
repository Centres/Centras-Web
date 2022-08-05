<template>
  <div class="info-card">
    <div class="info-card-title">个人信息</div>
    <div>姓名：{{personalData.name}}</div>
    <div>性别：{{personalData.gender}}</div>
    <div>工作年限：{{personalData.workTime}}</div>
    <div>邮箱：{{personalData.email}}</div>
    <div>手机号码：{{personalData.phone}}</div>
    <div>出生日期：{{personalData.birth}}</div>
  </div>
</template>

<script setup lang="ts">
interface t  {
  name:String,
  gender:String,
  workTime:String,
  email:String,
  phone:Number,
  birth:String
}
type Props = {
  personalData:t
}
defineProps<Props>()
// const {personalData} = data
</script>

<style scoped lang="scss">
.info-card{
  width: 20vw;
  min-width: 200px;
  border: 1px solid #ffffff;
  -webkit-border-radius: 2vw;
  -moz-border-radius: 2vw;
  border-radius: 2vw;
  padding: 1vw;
  box-shadow:  0.1vw 0.1vw 0.5vw 0.1vw white;
  line-height: 4vh;
  .info-card-title{
    border-bottom: 0.1vh solid #ffffff;
    font-weight: bold;
    font-size: 1.5vw;
    margin-bottom: 2vh;
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