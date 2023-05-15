import { AuthForm, IAuthFormProps } from "@components/authForm/AuthForm"
import { Container, Typography } from "@mui/material"
import { observer } from "mobx-react-lite"
import { FC } from "react"

export const RegistrationPage: FC = observer(() => {
  const handleLogin: IAuthFormProps["onSubmit"] = (data) => {
    //
  }

  return (
    <Container maxWidth="sm">
      <AuthForm onSubmit={handleLogin} isRegisterForm />
    </Container>
  )
})
