import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../services/auth';

function LandingPage() {
  const { user, login } = useAuth();
  const navigate = useNavigate();

  const handleAction = () => {
    if (user) {
      navigate('/users');
    } else {
      login();
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage:
          'url(https://images.unsplash.com/photo-1533264132752-21e3eb533347?q=80&w=1483&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1,
        },
      }}
    >
      <Helmet>
        <title>Photo Explorer - Welcome</title>
      </Helmet>
      <Container
        maxWidth='md'
        sx={{
          textAlign: 'center',
          zIndex: 2,
          backgroundColor: 'rgba(255, 245, 230, 0.9)',
          borderRadius: 3,
          padding: 4,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Typography
          variant='h3'
          gutterBottom
          sx={{ color: '#e65100', fontWeight: 'bold', letterSpacing: 1 }}
        >
          Welcome to Photo Explorer
        </Typography>
        <Typography
          variant='h6'
          sx={{ color: '#333', mb: 2, fontStyle: 'italic' }}
        ></Typography>
        <Typography
          variant='body1'
          sx={{ color: '#555', mb: 4, maxWidth: '600px', mx: 'auto' }}
        >
          Explore users, their albums, and photos! Log in to view details and
          edit photo titles. Powered by JSONPlaceholder and built with{' '}
          <FavoriteIcon
            sx={{
              color: '#e65100',
              fontSize: '1.2rem',
              verticalAlign: 'middle',
            }}
          />{' '}
          by Chris.
        </Typography>
        <Button
          variant='contained'
          onClick={handleAction}
          sx={{
            backgroundColor: '#e65100',
            color: '#fff',
            padding: '10px 24px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            borderRadius: 2,
            '&:hover': {
              backgroundColor: '#ff5722',
              transform: 'scale(1.05)',
              transition: 'all 0.2s ease-in-out',
            },
          }}
        >
          {user ? 'Go to Users' : 'Login with Google'}
        </Button>
      </Container>
    </Box>
  );
}

export default LandingPage;
