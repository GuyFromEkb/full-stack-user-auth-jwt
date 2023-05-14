import { FC } from "react"
import { observer } from "mobx-react-lite"
import { MainLayout } from "@components/layout/mainLayout/MainLayout"
import { Outlet } from "react-router-dom"
export const App: FC = observer(() => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  )
})

