import { AuthForm, IAuthFormProps } from "@components/authForm/AuthForm"
import { Container } from "@mui/material"
import { observer } from "mobx-react-lite"
import { FC, useCallback } from "react"
import { appStore } from "src/store/rootStore"

export const RegistrationPage: FC = observer(() => {
  const handleRegistration: IAuthFormProps["onSubmit"] = useCallback(async (formData) => {
   await appStore.auth.registration(formData.email, formData.password)
  }, [])

  return (
    <Container maxWidth="sm">
      <AuthForm onSubmit={handleRegistration} isRegisterForm />
    </Container>
  )
})
