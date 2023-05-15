import { AxiosInstance } from "axios"
import { IAuthResponse } from "src/api/Auth/types"

export class ApiAuth {
  constructor(readonly api: AxiosInstance) {}

  postRegistration = (body: { email: string; password: string }) => {
    return this.api.post<IAuthResponse>("/user/registration", body)
  }
}
