import { Box, AppBar, Toolbar, Typography, Button, Container } from "@mui/material"
import { observer } from "mobx-react-lite"
import { FC, ReactNode } from "react"

export const MainLayout: FC<{ children: ReactNode }> = observer(({ children }) => {
  return (
    <Box>
      <Box component={"header"} sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Container
        sx={{
          pt: 3,
        }}
        component={"main"}
      >
        {children}
      </Container>
    </Box>
  )
})
