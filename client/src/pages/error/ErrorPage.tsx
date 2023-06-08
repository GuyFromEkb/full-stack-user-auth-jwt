import { observer } from "mobx-react-lite"
import { useRouteError } from "react-router-dom"

export const ErrorPage = observer(() => {
  const error: any = useRouteError()

  return (
    <div>
      <h1>Уупс!</h1>
      <p>Извините, произошла непредвиденная ошибка.</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
    </div>
  )
})
