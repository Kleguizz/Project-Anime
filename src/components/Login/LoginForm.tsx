import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  InputAdornment,
  Paper,
  Divider,
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  Google,
  Facebook,
  Apple,
} from '@mui/icons-material';

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de autenticación
  };

  return (
    <Paper
      elevation={0}
      sx={{
        width: '100%',
        maxWidth: 400,
        p: 4,
        backgroundColor: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 2,
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
      }}
    >
      <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            mb: 4,
            color: '#fff',
            fontWeight: 500,
            textAlign: 'center',
            fontFamily: '"Playfair Display", serif',
          }}
        >
          Bienvenido
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
              backgroundColor: 'rgba(255,255,255,0.05)',
              '& fieldset': {
                borderColor: 'rgba(255,255,255,0.1)',
              },
              '&:hover fieldset': {
                borderColor: 'rgba(255,255,255,0.2)',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#fff',
              },
              '& input': {
                color: '#fff',
              },
            },
            '& .MuiInputLabel-root': {
              color: 'rgba(255,255,255,0.7)',
              '&.Mui-focused': {
                color: '#fff',
              },
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
                  sx={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            mb: 3,
            '& .MuiOutlinedInput-root': {
              backgroundColor: 'rgba(255,255,255,0.05)',
              '& fieldset': {
                borderColor: 'rgba(255,255,255,0.1)',
              },
              '&:hover fieldset': {
                borderColor: 'rgba(255,255,255,0.2)',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#fff',
              },
              '& input': {
                color: '#fff',
              },
            },
            '& .MuiInputLabel-root': {
              color: 'rgba(255,255,255,0.7)',
              '&.Mui-focused': {
                color: '#fff',
              },
            },
          }}
        />

        <Button
          fullWidth
          variant="contained"
          type="submit"
          sx={{
            mb: 3,
            py: 1.5,
            backgroundColor: '#fff',
            color: '#000',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.9)',
            },
          }}
        >
          Iniciar Sesión
        </Button>

        <Divider sx={{ mb: 3, borderColor: 'rgba(255,255,255,0.1)' }}>
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255,255,255,0.7)',
              px: 2,
            }}
          >
            O continúa con
          </Typography>
        </Divider>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
            mb: 3,
          }}
        >
          <IconButton
            sx={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.2)',
              },
            }}
          >
            <Google sx={{ color: '#fff' }} />
          </IconButton>
          <IconButton
            sx={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.2)',
              },
            }}
          >
            <Facebook sx={{ color: '#fff' }} />
          </IconButton>
          <IconButton
            sx={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.2)',
              },
            }}
          >
            <Apple sx={{ color: '#fff' }} />
          </IconButton>
        </Box>

        <Typography
          variant="body2"
          sx={{
            color: 'rgba(255,255,255,0.7)',
            textAlign: 'center',
          }}
        >
          ¿No tienes una cuenta?{' '}
          <Button
            sx={{
              color: '#fff',
              textTransform: 'none',
              p: 0,
              minWidth: 'auto',
              '&:hover': {
                backgroundColor: 'transparent',
                textDecoration: 'underline',
              },
            }}
          >
            Regístrate
          </Button>
        </Typography>
      </Box>
    </Paper>
  );
};

export default LoginForm; 