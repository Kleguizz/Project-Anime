import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Divider,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { Visibility, VisibilityOff, Google } from '@mui/icons-material';

interface LoginFormProps {
  onRegisterClick: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onRegisterClick }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar lógica de login
  };

  const handleGoogleLogin = () => {
    // Implementar login con Google
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: '100%',
        maxWidth: 400,
        p: 4,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        borderRadius: 2,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{
          mb: 4,
          textAlign: 'center',
          fontWeight: 'bold',
        }}
      >
        Iniciar Sesión
      </Typography>

      <TextField
        fullWidth
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{
          mb: 2,
          '& .MuiOutlinedInput-root': {
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            '&:hover fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.3)',
            },
          },
          '& .MuiInputLabel-root': {
            color: 'rgba(255, 255, 255, 0.7)',
          },
        }}
      />

      <TextField
        fullWidth
        label="Contraseña"
        type={showPassword ? 'text' : 'password'}
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{
          mb: 3,
          '& .MuiOutlinedInput-root': {
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            '&:hover fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.3)',
            },
          },
          '& .MuiInputLabel-root': {
            color: 'rgba(255, 255, 255, 0.7)',
          },
        }}
      />

      <Button
        fullWidth
        type="submit"
        variant="contained"
        sx={{
          mb: 3,
          py: 1.5,
          backgroundColor: '#00f5d4',
          '&:hover': {
            backgroundColor: '#00e5c4',
          },
        }}
      >
        Iniciar Sesión
      </Button>

      <Divider sx={{ my: 3, borderColor: 'rgba(255, 255, 255, 0.1)' }}>
        <Typography
          sx={{
            color: 'rgba(255, 255, 255, 0.5)',
            px: 2,
          }}
        >
          o
        </Typography>
      </Divider>

      <Button
        fullWidth
        variant="outlined"
        startIcon={<Google />}
        onClick={handleGoogleLogin}
        sx={{
          mb: 3,
          py: 1.5,
          borderColor: 'rgba(255, 255, 255, 0.3)',
          color: '#fff',
          '&:hover': {
            borderColor: '#fff',
          },
        }}
      >
        Continuar con Google
      </Button>

      <Typography
        sx={{
          textAlign: 'center',
          color: 'rgba(255, 255, 255, 0.7)',
        }}
      >
        ¿No tienes una cuenta?{' '}
        <Button
          onClick={onRegisterClick}
          sx={{
            color: '#00f5d4',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: 'transparent',
              color: '#00e5c4',
            },
          }}
        >
          Regístrate
        </Button>
      </Typography>
    </Box>
  );
};

export default LoginForm; 