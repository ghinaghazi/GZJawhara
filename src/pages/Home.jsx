import { Box, Typography, Button } from '@mui/material'

function Home() {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: '#f5f5f5',
          p: 6,
          textAlign: 'center',
          borderRadius: 2,
        }}
      >
        <Typography variant="h3" gutterBottom>
          Welcome to GZ-Jawhara
        </Typography>

        <Typography variant="h6" gutterBottom>
          Discover amazing products at great prices
        </Typography>

        <Button
          variant="contained"
          sx={{ mt: 2, backgroundColor: '#800020' }}
        >
          Shop Now
        </Button>
      </Box>

      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom>
          Featured Products
        </Typography>

        <Typography>
          (Products will be displayed here later)
        </Typography>
      </Box>

    </Box>
  )
}

export default Home