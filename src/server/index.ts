import axios from "axios";

const server = axios.create({
    timeout: 60*1000,
    // baseURL:'http://127.0.0.1:3333/'
    baseURL:'https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=chinaDayList,chinaDayAddList,cityStatis,provinceCompare,statisGradeCityDetail,diseaseh5Shelf'
})

// export const getApiList = () => server.get('/api/list').then(res=>res.data)
export const getApiList = () => server.get('').then(res=>res.data)