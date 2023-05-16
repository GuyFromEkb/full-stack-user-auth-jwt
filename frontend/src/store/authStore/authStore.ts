import { makeAutoObservable } from "mobx"

import { Api } from "src/api"
import { toastAxiosError } from "src/utils"
export class AuthStore {
  constructor() {
    makeAutoObservable(this)
  }

  login = async (email: string, password: string) => {
    try {
      const { data } = await Api.Auth.postLogin({ email, password })
      localStorage.setItem("accessToken", data.token.accessToken)
    } catch (error) {
      toastAxiosError(error)
    }
  }

  registration = async (email: string, password: string) => {
    try {
      const { data } = await Api.Auth.postRegistration({ email, password })
      localStorage.setItem("accessToken", data.token.accessToken)
    } catch (error) {
      toastAxiosError(error)
    }
  }

  checkAuth = () => {
    //
  }

  logOut = () => {
    //
  }
}
