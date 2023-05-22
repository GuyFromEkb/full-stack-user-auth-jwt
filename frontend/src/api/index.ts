import { axiosInstance, baseUrl } from "src/api/axiosInstance"
import * as swaggerApi from "./swaggerGenerateApi"

export const configuration = undefined

export const API = {
  User: new swaggerApi.UserApi(configuration, baseUrl, axiosInstance),
  Users: new swaggerApi.UsersApi(configuration, baseUrl, axiosInstance),
}
