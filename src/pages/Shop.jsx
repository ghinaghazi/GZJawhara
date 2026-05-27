import { Box, Typography } from '@mui/material'
import products from '../data/products'
import ProductGrid from '../components/ProductGrid'

function Shop() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Shop All
      </Typography>
      <ProductGrid products={products} />
    </Box>
  )
}

export default Shop
