import axios from 'axios'
import Config from '@/config'
import Vue from 'vue'

// 创建一个拥有通用配置的axios实例
const http = axios.create({
    baseURL: Config.baseUrl, // api 的 base_url
    transformResponse: [data => JSON.parse(data)], // 对 data 进行任意转换处理
    timeout: 5000, // 请求超时
    // 定义可获得的http响应状态码
    // return true、设置为null或者undefined，promise将resolved,否则将rejected
    // validateStatus(status) {
    //   return status >= 200 && status < 500
    // },
})


// 返回结果处理
http.interceptors.response.use(
    res => res.data,
    (error) => {
        Vue.prototype.$message.error("请求发生错误");
        console.log('error', error)
    },
)

// http instance
export default http

/**
 * @param {string} url
 * @param {object} data
 * @param {object} params
 */
export function post(url, data = {}, params = {}) {
    return http({
        method: 'post',
        url,
        data,
        params,
    })
}

/**
 * @param {string} url
 * @param {object} params
 */
export function get(url, params = {}) {
    return http({
        method: 'get',
        url,
        params,
    })
}