import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <AppBar position="static" sx={{background: '#800020'}}>
      <Toolbar sx={{ position: 'relative' }}>
        <Typography variant="h6" 
        sx={{
          position: 'absolute',
          left: '50%',
          transform:'translatex(-50%)',
          }}>
          My Shop
        </Typography>

        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/about">About</Button>
        <Button color="inherit" component={Link} to="/shop">Shop</Button>
        <Button color="inherit" component={Link} to="/login">Login</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header