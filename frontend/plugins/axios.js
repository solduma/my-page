
export default function ({ $axios, store }, inject) {
  const api = $axios.create({
    baseURL: '/api',
    timeout: 20000,
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': store.state.accessToken
    }
  })
  
  async function refresh(error) {
    if (error.response && error.response.status === 419) {
      location.reload()
    }
    return Promise.reject(error)
  }
  
  api.interceptors.response.use(response => response, refresh)
  inject('http', api)
}
  