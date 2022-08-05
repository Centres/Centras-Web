import { defineStore } from 'pinia'
import {getApiList} from "@/server";

export const useStore = defineStore({
  id: 'list',
  state: () => ({
    list:<any>[],
    item:<any>[]
  }),
  actions:{
    async getList(){
      const result = await getApiList()
      console.log(result);
      this.list = result.data
    }
  }
})
