import { FC } from "react"
import Button from "@mui/material/Button"
import { Box, AppBar, Toolbar, IconButton, Typography, TextField, Container } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { observer } from "mobx-react-lite"
import { rootStore } from "src/store/rootStore"

export const App: FC = observer(() => {
  const login = () => {
    rootStore.login("321321321@yandex.ru", "321321123")
  }
  const register = () => {
    rootStore.register("123456@ya21312n123.ru", "12345678")
  }
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Container maxWidth="sm">
        <Typography variant="h4">{rootStore.number}</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mt: 4,
          }}
        >
          <TextField label="Email" variant="outlined" />
          <TextField label="Password" variant="outlined" />
          <Button onClick={login} variant="outlined">
            Login
          </Button>
          <Button onClick={register} variant="outlined">
            Register
          </Button>
        </Box>
      </Container>
    </div>
  )
})
