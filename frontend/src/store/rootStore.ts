import { makeAutoObservable } from "mobx"
import { API } from "src/api/axiosInstance"

export class RootStore {
  number = 0

  constructor() {
    makeAutoObservable(this)
  }

  incrementNumber = () => {
    this.number = this.number + 1
  }

  login = async (email: string, password: string) => {
    const res = await API.post("user/login", {
      email,
      password,
    })
    console.log("RES", res)
  }

  register = async (email: string, password: string) => {
    const res = await API.post("user/registration", {
      email,
      password,
    })
    console.log("RES", res)
  }
}

export const rootStore = new RootStore()
