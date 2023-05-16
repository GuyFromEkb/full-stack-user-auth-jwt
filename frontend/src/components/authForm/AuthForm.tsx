import { Box, TextField, Button, Typography, Link } from "@mui/material"
import { observer } from "mobx-react-lite"
import { FC } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { Link as ReactRouterLink } from "react-router-dom"

interface IAuthFormValues {
  email: string
  password: string
}

export interface IAuthFormProps {
  onSubmit: SubmitHandler<IAuthFormValues>
  isRegisterForm?: boolean
}

export const AuthForm: FC<IAuthFormProps> = observer(({ onSubmit, isRegisterForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuthFormValues>()

  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        mt: 4,
      }}
    >
      <TextField
        error={!!errors.email}
        helperText={errors.email?.message}
        label="Email"
        variant="outlined"
        {...register("email", {
          required: { value: true, message: "Обязательно к заполнению" },
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Введите корректный email",
          },
        })}
      />
      <TextField
        error={!!errors.password}
        helperText={errors.password?.message}
        label="Password"
        variant="outlined"
        {...register("password", {
          required: { value: true, message: "Обязательно к заполнению" },
          minLength: { value: 6, message: "Минимальная длинна пароля 6 символов" },
        })}
      />
      <Button variant="outlined" type="submit">
        {isRegisterForm ? "Зарегистрироваться" : "Войти"}
      </Button>
      {!isRegisterForm && (
        <Typography
          fontSize={12}
          sx={{
            ml: "auto",
          }}
        >
          У вас нет аккаунта? Вы можете{" "}
          <Link component={ReactRouterLink} to={"/registration"}>
            зарегистрироваться
          </Link>
        </Typography>
      )}
    </Box>
  )
})
