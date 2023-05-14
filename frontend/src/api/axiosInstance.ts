import axios from "axios"

const baseUrl = "http://localhost:7777/"

export const API = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
})
