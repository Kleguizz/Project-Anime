import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleSuccess = (credentialResponse: CredentialResponse) => {
    console.log(credentialResponse);
    // Aquí manejaremos la respuesta exitosa del login
    navigate('/dashboard');
  };

  const handleError = () => {
    console.log('Login Failed');
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
            Iniciar Sesión
          </Typography>
          <GoogleLogin
            onSuccess={handleSuccess}
            onError={handleError}
            useOneTap
            theme="filled_blue"
          />
        </Paper>
      </Box>
    </Container>
  );
};

export default Login; 