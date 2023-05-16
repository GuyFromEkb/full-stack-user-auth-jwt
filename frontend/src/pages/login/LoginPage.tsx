import { AuthForm, IAuthFormProps } from "@components/authForm/AuthForm"
import { Container, Box, TextField, Button, Typography, Link } from "@mui/material"
import { observer } from "mobx-react-lite"
import { FC, useCallback } from "react"
import { appStore } from "src/store/rootStore"

export const LoginPage: FC = observer(() => {
  const handleLogin: IAuthFormProps["onSubmit"] = useCallback(async (formData) => {
    await appStore.auth.login(formData.email, formData.password)
  }, [])

  return (
    <Container maxWidth="sm">
      <AuthForm onSubmit={handleLogin} />
    </Container>
  )
})
