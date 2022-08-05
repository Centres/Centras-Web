<template>
  <div class="box">
    <div class="box-left"></div>
    <div class="box-center" id="China">
      <CovidMap></CovidMap>
    </div>
    <div class="box-right" >
      <CovidTable></CovidTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useStore} from "@/stores/covidList";
import {getCurrentInstance, onMounted} from "vue";
import CovidMap from "@/components/Covid/Covid-map.vue";
import CovidTable from '@/components/Covid/Covid-table.vue'

const store = useStore()

const instance = getCurrentInstance()

onMounted(async () => {
  await store.getList()
  instance?.proxy?.$Bus.emit('get-map-data')
  // renderMap()
})
// const renderMap = ()=>{
//   let mapData = store.list.diseaseh5Shelf.areaTree[0].children
//   let firstTableData = mapData.filter(e=>e.name==='广东')
//   store.item = firstTableData[0].children
//   let data = mapData.map((e: {
//     children: any; name: string;
//   })=> {
//     return{
//       name:e.name,
//       value:geoCoordMap[e.name],
//       count:e.children[0].total.confirm,
//       children:e.children
//     }
//   })
//   const charts = echarts.init(document.querySelector('#China') as HTMLDivElement)
//   charts.setOption({
//     geo: {
//       map: "china",
//       aspectScale: 0.8,
//       layoutCenter: ["50%", "50%"],
//       layoutSize: "100%",
//       itemStyle: {
//
//         areaColor: {
//           type: "linear-gradient",
//           x: 0,
//           y: 1200,
//           x2: 1000,
//           y2: 0,
//           colorStops: [
//             {
//               offset: 0,
//               color: "#152E6E", // 0% 处的颜色
//             },
//             {
//               offset: 1,
//               color: "#0673AD", // 50% 处的颜色
//             },
//           ],
//           global: true, // 缺省为 false
//         },
//         shadowColor: "#0f5d9d",
//         shadowOffsetX: 0,
//         shadowOffsetY: 15,
//         opacity: 0.5,
//
//
//       },
//       emphasis: {
//         areaColor: "#0f5d9d",
//       },
//       regions: [
//         {
//           name: "南海诸岛",
//           itemStyle: {
//             areaColor: "rgba(0, 10, 52, 1)",
//             borderColor: "rgba(0, 10, 52, 1)",
//
//             opacity: 0,
//             label: {
//               show: false,
//               color: "#009cc9",
//             },
//
//           },
//           label: {
//             show: true,
//             color: "#FFFFFF",
//             fontSize: 12,
//           },
//         },
//       ],
//     },
//     series: [
//       {
//         type: "map",
//         selectedMode: "single",
//         map: "china",
//         aspectScale: 0.8,
//         layoutCenter: ["50%", "50%"], //地图位置
//         layoutSize: "100%",
//         zoom: 1, //当前视角的缩放比例
//         roam: false, //是否开启平游或缩放
//         scaleLimit: {
//           //滚轮缩放的极限控制
//           min: 1,
//           max: 2,
//         },
//         label: {
//           show: true,
//           color: "#FFFFFF",
//           fontSize: 12,
//         },
//         itemStyle: {
//
//           areaColor: "#0c3653",
//           borderColor: "#1cccff",
//           borderWidth: 1.8,
//
//
//         },
//         emphasis: {
//           areaColor: "#56b1da",
//           label: {
//             show: true,
//             color: "#fff",
//           },
//         },
//         data: data,
//       },
//       {
//         type: 'scatter',
//         coordinateSystem: 'geo',
//         //   symbol: 'image://http://ssq168.shupf.cn/data/biaoji.png',
//         // symbolSize: [30,120],
//         // symbolOffset:[0, '-40%'] ,
//         symbol:'pin',
//         symbolSize:[45,45],
//         label: {
//           formatter(value:any){
//             return value.data.count
//           },
//           show: true,
//           color:'white'
//         },
//         itemStyle: {
//
//           color: 'pink', //标志颜色
//
//         },
//         data: data,
//       },
//     ],
//   })
//   charts.on('click',(e:any)=>{
//     console.log(e.data.children);
//     store.item = e.data.children
//   })
// }
</script>

<style scoped lang="scss">
.box {
  height: 100%;
  display: flex;

  .box-left {
    width: 400px;
  }

  .box-center {
    flex: 1;
  }

  .box-right {
    width: 400px;
    table{
      width: 100%;
      background: #212028;
      tr{
        th{
          white-space: nowrap;
        }
        td{
          white-space: nowrap;
        }
      }
    }
  }
}
</style>