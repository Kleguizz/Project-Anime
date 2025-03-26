import React from 'react';
import { Box, Container, Typography, Paper, Link } from '@mui/material';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const navigate = useNavigate();

  const handleSuccess = (credentialResponse: CredentialResponse) => {
    console.log(credentialResponse);
    // Aquí manejaremos la respuesta exitosa del registro
    navigate('/dashboard');
  };

  const handleError = () => {
    console.log('Registration Failed');
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
            Registro
          </Typography>
          <GoogleLogin
            onSuccess={handleSuccess}
            onError={handleError}
            useOneTap
            theme="filled_blue"
          />
          <Box sx={{ mt: 2 }}>
            <Link href="/login" variant="body2">
              ¿Ya tienes una cuenta? Inicia sesión
            </Link>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Register; 