import axios from 'axios'
import config from './config'

/**
 * 请求拦截器
 */
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('LHToken')
  if (token) {
    config.headers.setToken = token
  }
  if (config.data.name === 'JsonWebTokenError' && !token) {
    location.href = '#/sign_in'
  }
  console.log(config)
  return config
}, function (error) {
  return Promise.reject(error)
})

/**
 * 响应拦截器
 */
axios.interceptors.response.use((response) => {
  return response
}, function (error) {
  return Promise.reject(error)
})

/**
 * 账号注册
 */
export const register = async (params) => {
  const result = await axios.post(`${config.url}/user/register`,
    params)
  return result
}

/**
 * 登录
 */
export const login = async (params) => {
  const result = await axios.post(`${config.url}/user/login`,
    params)
  return result
}

/**
 * 获取用户列表
 */
export const userlist = async (params) => {
  const result = await axios.get(`${config.url}/api/userlist`,
    params)
  return result
}
