import { MainLayout } from "@components/layout/mainLayout/MainLayout"
import { observer } from "mobx-react-lite"
import { FC } from "react"
import { Outlet } from "react-router-dom"

export const RootPage: FC = observer(() => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  )
})
