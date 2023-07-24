import { ref } from 'vue'
import { defineStore } from 'pinia'
import { storeToRefs } from 'pinia'
import axiosInstance from '../config.js'
import router from '../router/index.js'

import { useAuthenticationStore } from '../stores/Authentication'
const authenticationStore = useAuthenticationStore()
const { token } = storeToRefs(authenticationStore)

export const useCallsStore = defineStore('calls', () => {
  const calls = ref({})
  const loading = ref(false)
  function get_calls(data) {
    loading.value = true
    axiosInstance
      .get(
        '/api/call' +
          '?limit=' +
          data.limit +
          '&from=' +
          data.from +
          '&to=' +
          data.to +
          '&call_id=' +
          data.call_id +
          '&date_from=' +
          data.date_from +
          '&date_to=' +
          data.date_to +
          '&trashed=' +
          data.trashed +
          '&page=' +
          data.page,

        {
          headers: {
            Authorization: 'Bearer ' + token.value
          }
        }
      )
      .then((res) => {
        calls.value = res.data
      })
      .catch((error) => {
        console.log(error)
        if (error.response.status === 401) {
          authenticationStore.logout
        }
        if (error.response && error.response.status == 404) {
          router.push({
            name: '404Resource',
            params: { resource: 'calls' }
          })
        } else {
          router.push({ name: 'NetworkError' })
        }
      })
      .finally(() => {
        loading.value = false
      })
  }

  function delete_call(id) {
    return new Promise((resolve, reject) => {
      axiosInstance
        .delete('/api/call/' + id, {
          headers: {
            Authorization: 'Bearer ' + token.value
          }
        })
        .then((res) => {
          if (res.status == 204) {
            resolve(res)
          }
        })
        .catch((e) => {
          reject(e)
        })
    })
  }

  return { calls, loading, get_calls, delete_call }
})
