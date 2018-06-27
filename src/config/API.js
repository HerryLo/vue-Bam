import axios from 'axios'
import config from './config'
import { constants } from 'zlib';

/**
 * 请求拦截器
 */
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('LHToken')
  if (token) {
    config.headers.setToken = token
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

/**
 * 响应拦截器
 */
axios.interceptors.response.use((response) => {
  const token = localStorage.getItem('LHToken')
  if (response.data.error === 'JsonWebTokenError' && !token) {
    location.href = '#/sign_in'
  }
  // console.log(config)
  return response
}, function (error) {
  const response = error.response
  if (response.data.error === 'JsonWebTokenError') {
    location.href = '#/sign_in'
  }
  return Promise.reject(error)
})

/**
 * 账号注册
 */
export const register = async (params) => {
  const url = `${config.url}/user/register`
  const result = await axios.post(url, params)
  return result
}

/**
 * 登录
 */
export const login = async (params) => {
  const url = `${config.url}/user/login`
  const result = await axios.post(url, params)
  return result
}

/**
 * 获取用户列表
 */
export const userlist = async (params) => {
  const url = `${config.url}/api/userlist`
  const result = await axios.get(url, params)
  return result.data
}

/**
 * 创建文章
 */
export const createarticle = async (params) => {
  const url = `${config.url}/api/createarticle`
  const result = await axios.post(url, params)
  return result.data
}

/**
 * 获取文章列表
 */
export const articlelist = async (params) => {
  const url = `${config.url}/api/articlelist`
  const result = await axios.post(url, params)
  return result.data
}

