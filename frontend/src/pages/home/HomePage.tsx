import { Box, Stack, Typography } from "@mui/material"
import { observer } from "mobx-react-lite"
import { FC } from "react"

export const HomePage: FC = observer(() => {
  return (
    <Box>
      <Stack direction="column" useFlexGap flexWrap="wrap" alignItems={"center"} spacing={2}>
        <Typography variant="h3">Hello from Main Page</Typography>
      </Stack>
    </Box>
  )
})
