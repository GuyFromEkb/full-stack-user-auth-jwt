import { FC, useEffect } from "react"
import { observer } from "mobx-react-lite"
import { MainLayout } from "@components/layout/mainLayout/MainLayout"
import { Outlet } from "react-router-dom"
import { SnackbarProvider } from "notistack"
import { appStore } from "src/store/rootStore"
export const App: FC = observer(() => {
  useEffect(() => {
    appStore.auth.checkAuth()
  }, [])

  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{ horizontal: "right", vertical: "top" }}
      autoHideDuration={4000}
    >
      <MainLayout>
        <Outlet />
      </MainLayout>
    </SnackbarProvider>
  )
})
