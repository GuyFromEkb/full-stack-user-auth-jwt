import { makeAutoObservable, runInAction } from "mobx"
import { Api } from "src/api"
import { IUser } from "src/api/Auth/types"
import { toastAxiosError } from "src/utils"

export class AuthStore {
  user: IUser | null = null
  isLoading = false
  isInitApp = false

  constructor() {
    makeAutoObservable(this)
  }

  login = async (email: string, password: string) => {
    this.isLoading = true
    try {
      const { data } = await Api.Auth.postLogin({ email, password })

      localStorage.setItem("accessToken", data.token.accessToken)
      runInAction(() => {
        this.user = data.user
      })

      return data
    } catch (error) {
      toastAxiosError(error)
    } finally {
      runInAction(() => {
        this.isLoading = false
        this.isInitApp = true
      })
    }
  }

  registration = async (email: string, password: string) => {
    this.isLoading = true
    try {
      const { data } = await Api.Auth.postRegistration({ email, password })
      localStorage.setItem("accessToken", data.token.accessToken)
    } catch (error) {
      toastAxiosError(error)
    } finally {
      runInAction(() => {
        this.isLoading = false
        this.isInitApp = true
      })
    }
  }

  checkAuth = async () => {
    if (!localStorage.getItem("accessToken")) {
      this.isInitApp = true
      return
    }

    this.isLoading = true
    try {
      const { data } = await Api.Auth.getOwnUser()

      runInAction(() => {
        this.user = data
      })
    } catch (error) {
      toastAxiosError(error)
    } finally {
      runInAction(() => {
        this.isLoading = false
        this.isInitApp = true
      })
    }
  }

  logOut = () => {
    //
  }
}
