import { Box, CircularProgress } from "@mui/material"
import { observer } from "mobx-react-lite"
import { FC } from "react"

export const Loader: FC = observer(() => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <CircularProgress size={200} />
    </Box>
  )
})
