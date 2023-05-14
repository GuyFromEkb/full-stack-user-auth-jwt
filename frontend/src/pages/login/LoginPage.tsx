import { Container, Box, TextField, Button, Typography, Link } from "@mui/material"
import { observer } from "mobx-react-lite"
import { FC } from "react"
import { Link as ReactRouterLink } from "react-router-dom"

export const LoginPage: FC = observer(() => {
  const login = () => {
    //
  }
  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          mt: 4,
        }}
      >
        <TextField error={false} helperText={undefined} label="Email" variant="outlined" />
        <TextField label="Password" variant="outlined" />
        <Button onClick={login} variant="outlined">
          Войти
        </Button>
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
      </Box>
    </Container>
  )
})
