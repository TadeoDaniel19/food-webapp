import axios from 'axios'

const baseURL = 'https://resource-food-api.herokuapp.com/food/'

export const apiCall = (url, data, headers, method) => axios({
  method,
  url: baseURL + url,
  data,
  headers
})