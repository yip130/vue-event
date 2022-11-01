import axios from 'axios'

// 创建一个带配置项的自定义axios函数
const myAxios = axios.create({
  baseURL: 'http://big-event-vue-api-t.itheima.net'
})
export default myAxios
