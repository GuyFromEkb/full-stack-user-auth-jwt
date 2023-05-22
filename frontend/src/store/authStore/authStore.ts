import { makeAutoObservable, runInAction } from "mobx"

import { API } from "src/api"
import { ResponseBaseUserBody } from "src/api/swaggerGenerateApi"
import { toastAxiosError } from "src/utils"

export class AuthStore {
  user: ResponseBaseUserBody | null = null
  isLoading = false
  isAppInit = false

  constructor() {
    makeAutoObservable(this)
  }

  login = async (email: string, password: string) => {
    this.isLoading = true
    try {
      const { data } = await API.User.loginUser({ email, password })

      localStorage.setItem("accessToken", data.token.accessToken)

      runInAction(() => {
        this.user = data.user
      })

      return data.user
    } catch (error) {
      toastAxiosError(error)
    } finally {
      runInAction(() => {
        this.isLoading = false
        this.isAppInit = true
      })
    }
  }

  registration = async (email: string, password: string) => {
    this.isLoading = true
    try {
      const { data } = await API.User.registerUser({ email, password })

      localStorage.setItem("accessToken", data.token.accessToken)

      runInAction(() => {
        this.user = data.user
      })

      return data.user
    } catch (error) {
      toastAxiosError(error)
    } finally {
      runInAction(() => {
        this.isLoading = false
        this.isAppInit = true
      })
    }
  }

  checkAuth = async () => {
    if (!localStorage.getItem("accessToken")) {
      this.isAppInit = true
      return
    }

    this.isLoading = true
    try {
      const { data } = await API.User.getOwnUser()

      runInAction(() => {
        this.user = data.user
      })
    } catch (error) {
      toastAxiosError(error)
    } finally {
      runInAction(() => {
        this.isLoading = false
        this.isAppInit = true
      })
    }
  }

  logOut = async () => {
    this.isLoading = true
    try {
      await API.User.logout()
    } finally {
      localStorage.removeItem("accessToken")
      runInAction(() => {
        this.isLoading = false
        this.user = null
      })
    }
  }
}
