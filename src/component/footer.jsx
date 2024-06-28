import React from 'react';
import { lightGreen } from '@mui/material/colors';
import { Box, Typography, Container } from '@mui/material';

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: lightGreen[500],
        width: '100%',
        height: '200px',
        padding: '30px 0',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <Container>
        <Typography variant="h6">
          Thank you
        </Typography>
        <Typography variant="body2" sx={{ marginTop: '10px' }}>
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
