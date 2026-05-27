import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material'
import { useCart } from '../context/CartContext'

function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <CardMedia
        component="img"
        height="220"
        image={product.image}
        alt={product.name}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle1">{product.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {product.category}
        </Typography>
        <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
          ${product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button fullWidth variant="contained" onClick={() => addItem(product)}>
          Add to Bag
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProductCard
