export interface IAuthResponse {
  token: Token
  user: User
}

interface Token {
  accessToken: string
  refreshToken: string
}

interface User {
  email: string
  id: string
  isActivated: boolean
}
