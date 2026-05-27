import { Box, Typography } from '@mui/material'

function Footer() {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: 'primary.main', color: 'white', textAlign: 'center', p: 3 }}
    >
      <Typography variant="subtitle1" gutterBottom>Contact us</Typography>
      <Typography variant="body2">Email: gzjawhara@gmail.com</Typography>
      <Typography variant="body2">Phone: +961 76 722 884 / +961 76 701 554</Typography>
    </Box>
  )
}

export default Footer
