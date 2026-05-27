import { Box, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { featuredProducts } from '../data/products'
import ProductGrid from '../components/ProductGrid'
import { asset } from '../utils/asset'

function Home() {
  return (
    <Box>
      {/* Hero */}
      <Box
        sx={{
          height: { xs: '50vh', md: '70vh' },
          backgroundImage: `url(${asset('/images/intro.jpg')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: 'white',
          textShadow: '1px 1px 6px rgba(0,0,0,0.6)',
          px: 2,
        }}
      >
        <Typography variant="h3" gutterBottom>
          Welcome to GZ Jawhara
        </Typography>
        <Typography variant="h6" gutterBottom>
          Your luxury collection starts here
        </Typography>
        <Button variant="contained" component={Link} to="/shop" sx={{ mt: 2 }}>
          Shop Now
        </Button>
      </Box>

      {/* Featured products */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom>
          Featured
        </Typography>
        <ProductGrid products={featuredProducts} />
      </Box>
    </Box>
  )
}

export default Home
