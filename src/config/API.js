import axios from 'axios'
import config from './config'
/**
 * 账号注册
 */
export const register = async (params) => {
  const result = await axios.post(`${config.url}/user/register`, {
    params: params
  })
  return result
}
