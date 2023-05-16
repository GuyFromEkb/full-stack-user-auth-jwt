import { isAxiosError } from "axios"
import { enqueueSnackbar } from "notistack"

export const toastAxiosError = (error: unknown) => {
  if (isAxiosError<{ message: string; error?: unknown[] }>(error) && error.response) {
    enqueueSnackbar(error.response.data.message, { variant: "error" })
  }
}
