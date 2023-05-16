import { AxiosInstance } from "axios"
import { IAuthResponse, IUser } from "src/api/Auth/types"

export class ApiAuth {
  constructor(readonly api: AxiosInstance) {}

  postRegistration = (body: { email: string; password: string }) => {
    return this.api.post<IAuthResponse>("/user/registration", body)
  }

  postLogin = (body: { email: string; password: string }) => {
    return this.api.post<IAuthResponse>("/user/login", body)
  }

  getOwnUser = () => {
    return this.api.get<IUser>("/user/getOwnUser")
  }

  getLogout = () => {
    return this.api.get("/user/logout")
  }
}
