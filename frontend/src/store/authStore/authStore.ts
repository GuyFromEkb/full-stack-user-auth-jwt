import { makeAutoObservable } from "mobx"
import { Api } from "src/api"

export class AuthStore {
  constructor() {
    makeAutoObservable(this)
  }

  login = (email: string, pasword: string) => {
    //
  }

  registration = async (email: string, password: string) => {
    await Api.Auth.postRegistration({ email, password })
  }

  checkAuth = () => {
    //
  }

  logOut = () => {
    //
  }
}
