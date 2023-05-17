import { Box, AppBar, Toolbar, Typography, Container } from "@mui/material"
import { observer } from "mobx-react-lite"
import { FC, ReactNode, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { appStore } from "src/store/rootStore"
import LoadingButton from "@mui/lab/LoadingButton"
import LogoutIcon from "@mui/icons-material/Logout"

export const MainLayout: FC<{ children: ReactNode }> = observer(({ children }) => {
  const navigate = useNavigate()

  const handleLogOut = useCallback(async () => {
    await appStore.auth.logOut()
    navigate("/login")
  }, [])

  return (
    <Box>
      <Box component={"header"} sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              JWT Auth FullStack App
            </Typography>
            {appStore.auth.user && (
              <LoadingButton
                sx={{ ":hover": { backgroundColor: "rgba(0, 0, 0, 0.04)" }, color: "white" }}
                variant="outlined"
                onClick={handleLogOut}
                loading={appStore.auth.isLoading}
              >
                <LogoutIcon />
              </LoadingButton>
            )}
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
