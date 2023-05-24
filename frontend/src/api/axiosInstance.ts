import axios from "axios"
import { API } from "src/api"

export const baseUrl = "http://localhost:7777"

export const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
})

axiosInstance.interceptors.request.use((config) => {
  console.log("interceptors")
  const accessToken = localStorage.getItem("accessToken")

  config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : undefined

  return config
})

axiosInstance.interceptors.response.use(
  (config) => config,
  async (error) => {
    const config = error.config

    if (error.response.status === 401 && !config._isRetry) {
      config._isRetry = true

      const { data } = await API.User.refreshAccess({
        //@ts-ignore
        _isRetry: true,
      })

      localStorage.setItem("accessToken", data.accessToken)

      return axiosInstance.request(config)
    }

    return Promise.reject(error)
  }
)
