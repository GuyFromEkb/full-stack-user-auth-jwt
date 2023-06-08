import { FC, ReactNode } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { observer } from "mobx-react-lite"
import { appStore } from "src/store/rootStore"

export const ProtectedRoute: FC<{ children: ReactNode }> = observer(({ children }) => {
  const location = useLocation().pathname
  console.log("appStore.auth.user", appStore.auth.user)
  
  return appStore.auth.user ? (
    <>{children}</>
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  )
})
