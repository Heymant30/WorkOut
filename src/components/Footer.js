import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
  return (
    <Box mt = "80px" bgcolor="#fff3f4">

      <Stack gap="40px" alignItems="center" px="24px">
        <Typography  variant='h5' pb = "40px" mt = "20px">
            Workout Wizard
        </Typography>
        <Typography  variant='h5' pb = "40px" mt = "20px">
            Made with ❤️ by Hemant
        </Typography>
      </Stack>
    </Box>
  )
}
