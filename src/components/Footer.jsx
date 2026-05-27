import { Box, Typography } from '@mui/material'

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#800020',
        color: 'white',
        textAlign: 'center',
        p: 2,
      }}
    >
      <Typography variant="body2">
        Footer (empty for now)
      </Typography>
    </Box>
  )
}

export default Footer