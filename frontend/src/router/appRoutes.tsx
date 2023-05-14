import { App } from "@components/app/App"
import { createBrowserRouter } from "react-router-dom"
import { ErrorPage } from "src/pages/error/ErrorPage"
import { LoginPage } from "src/pages/login/LoginPage"
import { RegistrationPage } from "src/pages/registration/RegistrationPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        // path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/registration",
        element: <RegistrationPage />,
      },
    ],
  },
])
