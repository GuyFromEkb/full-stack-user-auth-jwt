import { AuthForm, IAuthFormProps } from "@components/authForm/AuthForm"
import { Container, Box, TextField, Button, Typography, Link } from "@mui/material"
import { observer } from "mobx-react-lite"
import { FC, useCallback } from "react"
import { axiosInstance } from "src/api/axiosInstance"
import { appStore } from "src/store/rootStore"

export const LoginPage: FC = observer(() => {
  const handleLogin: IAuthFormProps["onSubmit"] = useCallback(async (formData) => {
    await appStore.auth.login(formData.email, formData.password)
  }, [])

  const test = () => {
    axiosInstance.get("user/test")
  }
  return (
    <Container maxWidth="sm">
      <Button onClick={test}> test</Button>
      <AuthForm onSubmit={handleLogin} />
    </Container>
  )
})
