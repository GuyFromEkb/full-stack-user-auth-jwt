import axios from "axios"

const baseUrl = "http://localhost:7777/"

export const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: { "Content-Type": "application/json" },
})
