import { RouteObject } from "react-router-dom"
import { ErrorPage } from "src/pages/error/ErrorPage"
import { LoginPage } from "src/pages/login/LoginPage"
import { HomePage } from "src/pages/home/HomePage"
import { RegistrationPage } from "src/pages/registration/RegistrationPage"
import { RootPage } from "src/pages/root/rootPage"

export type CustomRoutObj = Omit<RouteObject, "children"> & {
  isNeedAuth?: boolean
  isFirstChildrenIndexTrue?: boolean
} & {
  children?: CustomRoutObj[]
}

export const routeTree: CustomRoutObj[] = [
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    isFirstChildrenIndexTrue: true,
    children: [
      {
        element: <HomePage />,
        isNeedAuth: true,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/registration",
        element: <RegistrationPage />,
      },
    ],
  },
]
