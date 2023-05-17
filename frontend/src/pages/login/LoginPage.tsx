import { AuthForm, IAuthFormProps } from "@components/authForm/AuthForm"
import { Container, Button } from "@mui/material"
import { observer } from "mobx-react-lite"
import { FC, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { axiosInstance } from "src/api/axiosInstance"
import { appStore } from "src/store/rootStore"

export const LoginPage: FC = observer(() => {
  const navigate = useNavigate()

  const handleLogin: IAuthFormProps["onSubmit"] = useCallback(async (formData) => {
    const res = await appStore.auth.login(formData.email, formData.password)
    if (res) navigate("/")
  }, [])

  return (
    <Container maxWidth="sm">
      <AuthForm onSubmit={handleLogin} />
    </Container>
  )
})
