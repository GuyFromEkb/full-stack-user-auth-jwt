import { FC } from "react"
import Button from "@mui/material/Button"
import { Box, AppBar, Toolbar, IconButton, Typography, TextField, Container } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"

export const App: FC = () => {
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
          <Button variant="outlined">Login</Button>
        </Box>
      </Container>
    </div>
  )
}
