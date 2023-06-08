import { makeAutoObservable } from "mobx"
import { AuthStore } from "src/store/authStore/authStore"

export class AppStore {
  auth = new AuthStore()

  constructor() {
    makeAutoObservable(this)
  }
}

export const appStore = new AppStore()
