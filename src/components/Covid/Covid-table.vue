<template>
  <table style="text-align:center;" cellspacing="0" border="">
    <thead>
    <tr>
      <th>地区</th>
      <th>新增确诊</th>
      <th>累计确诊</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in store.item">
      <td>{{item.name}}</td>
      <td>{{item.today.confirm}}</td>
      <td>{{item.total.confirm}}</td>
    </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import {useStore} from "@/stores/covidList";

const store = useStore()

console.log(store);
</script>

<style scoped>

</style>