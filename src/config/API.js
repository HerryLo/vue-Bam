import axios from 'axios'

const url = `http://localhost:3222`

export const artListAPI = (params) => {
  return axios.get(`${url}/api/artlist`, {
    params: params
  })
}
