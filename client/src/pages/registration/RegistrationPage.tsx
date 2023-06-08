import { AuthForm, IAuthFormProps } from "@components/authForm/AuthForm"
import { Container } from "@mui/material"
import { observer } from "mobx-react-lite"

import { FC, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { appStore } from "src/store/rootStore"

export const RegistrationPage: FC = observer(() => {
  const navigate = useNavigate()

  const handleRegistration: IAuthFormProps["onSubmit"] = useCallback(async (formData) => {
    const res = await appStore.auth.registration(formData.email, formData.password)
    if (res) navigate("/")
  }, [])

  return (
    <Container maxWidth="sm">
      <AuthForm onSubmit={handleRegistration} isRegisterForm />
    </Container>
  )
})
