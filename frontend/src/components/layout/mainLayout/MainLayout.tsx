import { Box, AppBar, Toolbar, Typography, Button, Container, TextField, Link } from "@mui/material"
import { observer } from "mobx-react-lite"
import { FC, ReactNode } from "react"

import { rootStore } from "src/store/rootStore"

export const MainLayout: FC<{ children: ReactNode }> = observer(({ children }) => {
  const login = () => {
    rootStore.login("321321321@yandex.ru", "321321123")
  }

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      {children}
    </div>
  )
})
