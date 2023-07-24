import axios from 'axios'

const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';
export default axios.create({
  baseURL: corsProxyUrl + import.meta.env.VITE_APP_BACKEND_URL,
  timeout: 15000,
  headers: {
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
    // Authorization: "Bearer "+ token,
  }
})
