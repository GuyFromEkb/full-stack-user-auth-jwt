import { isAxiosError } from "axios"
import { makeAutoObservable } from "mobx"
import { enqueueSnackbar } from "notistack"
import { Api } from "src/api"

export class AuthStore {
  constructor() {
    makeAutoObservable(this)
  }

  login = (email: string, pasword: string) => {
    //
  }

  registration = async (email: string, password: string) => {
    try {
      return await Api.Auth.postRegistration({ email, password })
    } catch (error) {
      if (isAxiosError<{ message: string; error?: unknown[] }>(error) && error.response) {
        enqueueSnackbar(error.response.data.message, { variant: "error" })
      }
    }
  }

  checkAuth = () => {
    //
  }

  logOut = () => {
    //
  }
}
