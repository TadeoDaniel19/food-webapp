import axios from 'axios'

const baseURL = 'http://localhost:5000/food/'

export const apiCall = (url, data, headers, method) => axios({
  method,
  url: baseURL + url,
  data,
  headers
})