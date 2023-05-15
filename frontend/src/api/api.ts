import { AxiosInstance } from "axios"
import { ApiAuth } from "src/api/Auth/apiAuth"
import { axiosInstance } from "src/api/axiosInstance"

class AppApi {
  Auth: ApiAuth

  constructor(private readonly axiosInstance: AxiosInstance) {
    this.Auth = new ApiAuth(this.axiosInstance)
  }
}

export const Api = new AppApi(axiosInstance)
