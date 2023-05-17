import { createBrowserRouter } from "react-router-dom"
import { ErrorPage } from "src/pages/error/ErrorPage"
import { LoginPage } from "src/pages/login/LoginPage"
import { HomePage } from "src/pages/home/HomePage"
import { RegistrationPage } from "src/pages/registration/RegistrationPage"
import { RootPage } from "src/pages/root/rootPage"
import { ProtectedRoute } from "@components/protectedRoute"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        ),
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
])
