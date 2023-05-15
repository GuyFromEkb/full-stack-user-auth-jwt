import React from "react"
import ReactDOM from "react-dom/client"

import "./styles/global.css"

import { RouterProvider } from "react-router-dom"
import { router } from "src/router/appRoutes"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
)
