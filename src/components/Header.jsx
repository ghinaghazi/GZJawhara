import { useState } from 'react'
import {
  AppBar, Toolbar, Typography, Button, IconButton, Badge, Box,
  Menu, MenuItem,
} from '@mui/material'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'
import CartDrawer from './CartDrawer'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'About', to: '/about' },
]

function Header() {
  const { count } = useCart()
  const { user, logout } = useAuth()
  const [cartOpen, setCartOpen] = useState(false)
  const [menuAnchor, setMenuAnchor] = useState(null)

  const closeMenu = () => setMenuAnchor(null)

  return (
    <AppBar position="static">
      <Toolbar sx={{ gap: 1 }}>
        <Typography
          variant="h5"
          component={Link}
          to="/"
          sx={{ flexGrow: 1, color: 'inherit', textDecoration: 'none', fontWeight: 700 }}
        >
          GZ Jawhara
        </Typography>

        {/* Desktop nav */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
          {navLinks.map((link) => (
            <Button key={link.to} color="inherit" component={Link} to={link.to}>
              {link.label}
            </Button>
          ))}
          {user ? (
            <>
              <Typography variant="body2">Hi, {user.name}</Typography>
              <Button color="inherit" onClick={logout}>Logout</Button>
            </>
          ) : (
            <Button color="inherit" component={Link} to="/login">Login</Button>
          )}
        </Box>

        {/* Cart (always visible) */}
        <IconButton color="inherit" onClick={() => setCartOpen(true)} aria-label="open cart">
          <Badge badgeContent={count} color="secondary">
            <ShoppingBagIcon />
          </Badge>
        </IconButton>

        {/* Mobile hamburger */}
        <IconButton
          color="inherit"
          edge="end"
          aria-label="open navigation menu"
          onClick={(e) => setMenuAnchor(e.currentTarget)}
          sx={{ display: { xs: 'inline-flex', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Menu anchorEl={menuAnchor} open={Boolean(menuAnchor)} onClose={closeMenu}>
        {navLinks.map((link) => (
          <MenuItem key={link.to} component={Link} to={link.to} onClick={closeMenu}>
            {link.label}
          </MenuItem>
        ))}
        {user ? (
          <MenuItem onClick={() => { logout(); closeMenu() }}>
            Logout ({user.name})
          </MenuItem>
        ) : (
          <MenuItem component={Link} to="/login" onClick={closeMenu}>
            Login
          </MenuItem>
        )}
      </Menu>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </AppBar>
  )
}

export default Header
