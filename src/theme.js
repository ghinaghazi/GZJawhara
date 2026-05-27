import { createTheme } from '@mui/material/styles'

// Single source of truth for site-wide styling. Components reference the
// palette (color="primary", bgcolor: 'background.default') instead of
// hardcoding colors, so there is no scattered inline CSS.
const theme = createTheme({
  palette: {
    primary: { main: '#8a0a0a' },
    background: { default: '#fffaf7' },
  },
  typography: {
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
    },
  },
})

export default theme
