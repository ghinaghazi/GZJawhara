import { useState } from 'react'
import {
  Drawer, Box, Typography, List, ListItem, ListItemText,
  IconButton, Divider, Button, Snackbar, Alert,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'

function CartDrawer({ open, onClose }) {
  const { items, removeItem, total, clearCart } = useCart()
  const { user } = useAuth()
  const navigate = useNavigate()
  const [snack, setSnack] = useState({ open: false, severity: 'success', message: '' })

  const closeSnack = () => setSnack((s) => ({ ...s, open: false }))

  function handleCheckout() {
    onClose()
    if (!user) {
      setSnack({ open: true, severity: 'info', message: 'Please log in to place your order.' })
      navigate('/login')
      return
    }
    clearCart()
    setSnack({ open: true, severity: 'success', message: 'Thank you! Your order has been placed.' })
  }

  return (
    <>
      <Drawer anchor="right" open={open} onClose={onClose}>
        <Box sx={{ width: 340, p: 2 }} role="presentation">
          <Typography variant="h6" gutterBottom>
            Shopping Bag
          </Typography>
          <Divider />

          {items.length === 0 ? (
            <Typography sx={{ mt: 2 }} color="text.secondary">
              Your bag is empty.
            </Typography>
          ) : (
            <List>
              {items.map((item) => (
                <ListItem
                  key={item.id}
                  secondaryAction={
                    <IconButton edge="end" aria-label="remove" onClick={() => removeItem(item.id)}>
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemText
                    primary={item.name}
                    secondary={`$${item.price} × ${item.qty}`}
                  />
                </ListItem>
              ))}
            </List>
          )}

          <Divider sx={{ my: 2 }} />
          <Typography variant="subtitle1">
            Total: ${total.toFixed(2)}
          </Typography>
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 2 }}
            disabled={items.length === 0}
            onClick={handleCheckout}
          >
            Checkout
          </Button>
        </Box>
      </Drawer>

      <Snackbar
        open={snack.open}
        autoHideDuration={4000}
        onClose={closeSnack}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity={snack.severity} onClose={closeSnack} sx={{ width: '100%' }}>
          {snack.message}
        </Alert>
      </Snackbar>
    </>
  )
}

export default CartDrawer
