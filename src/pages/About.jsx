import { Box, Typography } from '@mui/material'

function About() {
  return (
    <Box>

     
      <Typography variant="h3" gutterBottom>
        About GZ-Jawhara
      </Typography>

    
      <Typography variant="body1" sx={{ mb: 2 }}>
        GZ-Jawhara is a jewelry shop that offers elegant and high-quality pieces designed to enhance beauty and style.
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        Our collection includes rings, necklaces, bracelets, and more, carefully selected to suit different tastes and occasions.
      </Typography>

      <Typography variant="body1">
        This website is built using React and Material UI to provide a smooth and modern shopping experience.
      </Typography>

    </Box>
  )
}

export default About