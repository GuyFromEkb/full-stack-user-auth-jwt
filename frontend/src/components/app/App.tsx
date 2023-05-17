import { FC, useEffect } from "react"
import { observer } from "mobx-react-lite"

import { RouterProvider } from "react-router-dom"
import { SnackbarProvider } from "notistack"
import { appStore } from "src/store/rootStore"
import { router } from "src/router/appRoutes"
import { Loader } from "@components/loader"

export const App: FC = observer(() => {
  useEffect(() => {
    appStore.auth.checkAuth()
  }, [])

  if (!appStore.auth.isAppInit && appStore.auth.isLoading) return <Loader />

  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{ horizontal: "right", vertical: "top" }}
      autoHideDuration={4000}
    >
      <RouterProvider router={router} />
    </SnackbarProvider>
  )
})
