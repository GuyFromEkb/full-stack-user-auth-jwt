import { FC, useEffect, useMemo } from "react"
import { observer } from "mobx-react-lite"

import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { SnackbarProvider } from "notistack"
import { appStore } from "src/store/rootStore"
import { routeTree } from "src/router/appRoutes"
import { Loader } from "@components/loader"
import { filterRouteTree } from "src/utils/filterRoutTree/filterRoutTree"

export const App: FC = observer(() => {
  useEffect(() => {
    appStore.auth.checkAuth()
  }, [])

  const router = useMemo(
    () => createBrowserRouter(filterRouteTree(routeTree, !!appStore.auth.user)),
    [appStore.auth.user]
  )

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
