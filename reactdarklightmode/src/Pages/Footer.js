import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


function Footer(props) {
  const { description, title } = props;

  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 1 , position: 'absolute', bottom: 0, width:'100%'}}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {description}
        </Typography>
      </Container>
    </Box>
  );
}



export default Footer;