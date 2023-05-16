import axios from "axios"

const baseUrl = "http://localhost:7777/"

export const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: { "Content-Type": "application/json" },
})

axiosInstance.interceptors.request.use((config) => {
  console.log("interceptors")
  const accessToken = localStorage.getItem("accessToken")

  config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : undefined

  return config
})

axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.request.status === 401) {
      console.log("Поймал 401")
    }
  }
)
