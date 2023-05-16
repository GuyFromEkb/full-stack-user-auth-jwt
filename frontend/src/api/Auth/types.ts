export interface IAuthResponse {
  token: IToken
  user: IUser
}

interface IToken {
  accessToken: string
  refreshToken: string
}

export interface IUser {
  email: string
  id: string
  isActivated: boolean
}
