import { AuthForm, IAuthFormProps } from "@components/authForm/AuthForm"
import { Container, Box, TextField, Button, Typography, Link } from "@mui/material"
import { observer } from "mobx-react-lite"
import { FC } from "react"

export const LoginPage: FC = observer(() => {
  const handleLogin: IAuthFormProps["onSubmit"] = (data) => {
    //
  }

  return (
    <Container maxWidth="sm">
      <AuthForm onSubmit={handleLogin} />
    </Container>
  )
})
