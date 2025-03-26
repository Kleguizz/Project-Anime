import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  InputAdornment,
  Container,
  Link,
} from '@mui/material';
import { Visibility, VisibilityOff, Google } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

interface LoginFormProps {
  onRegisterClick: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onRegisterClick }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleGoogleLogin = () => {
    // Implementar login con Google
  };

  return (
    <Box
      sx={{
        minHeight: '85vh',
        width: '50vw',
        display: 'flex',
        position: 'fixed',
        right: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        background: 'transparent',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth={false} sx={{ width: '100%', height: '100%', p: 3, background: 'transparent' }}>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            height: '100%',
            position: 'relative',
            background: 'transparent',
            backdropFilter: 'blur(10px)',
            borderRadius: '30px',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            zIndex: 2,
          }}
        >
          {/* Panel Izquierdo - Decorativo */}
          <Box
            sx={{
              flex: '1.2',
              position: 'relative',
              background: 'linear-gradient(135deg, rgba(147,51,234,0.8), rgba(79,70,229,0.8))',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'center',
              p: 4,
              color: '#fff',
              textAlign: 'center',
              overflow: 'hidden',
              marginLeft: '0px',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '150%',
                height: '150%',
                background: 'radial-gradient(circle at center, rgba(147,51,234,0.4) 0%, transparent 50%)',
                animation: 'rotate 20s linear infinite',
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '30px 30px',
                animation: 'backgroundMove 15s linear infinite',
                opacity: 0.3,
                width: '150%',
                left: '-25%',
              },
              '@keyframes rotate': {
                '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
                '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' }
              },
              '@keyframes backgroundMove': {
                '0%': { transform: 'translateY(0)' },
                '100%': { transform: 'translateY(-20px)' }
              },
              '@keyframes shine': {
                '0%': { transform: 'translateX(-100%) skewX(-15deg)' },
                '100%': { transform: 'translateX(200%) skewX(-15deg)' }
              }
            }}
          >
            <Box
              sx={{
                position: 'relative',
                zIndex: 2,
                padding: '1.2rem',
                borderRadius: '15px',
                background: 'rgba(0,0,0,0.2)',
                backdropFilter: 'blur(5px)',
                border: '1px solid rgba(255,255,255,0.1)',
                overflow: 'hidden',
                marginTop: '1rem',
                width: '115%',
                marginLeft: '0%',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                  transform: 'translateX(-100%) skewX(-15deg)',
                  animation: 'shine 8s infinite',
                }
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  marginBottom: 2.5,
                  fontFamily: 'Roboto, sans-serif',
                  textShadow: '0 2px 15px rgba(0,0,0,0.2)',
                  fontSize: '1.8rem',
                  whiteSpace: 'nowrap',
                  position: 'relative',
                  letterSpacing: '0.05em',
                  width: '100%',
                  textAlign: 'center',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '50%',
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
                  }
                }}
              >
                Project Anime
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  maxWidth: '100%',
                  lineHeight: 1.3,
                  fontWeight: 400,
                  opacity: 0.9,
                  fontSize: '0.9rem',
                  margin: '0 auto',
                  fontFamily: 'Roboto, sans-serif',
                  letterSpacing: '0.03em',
                  textAlign: 'center',
                }}
              >
                Explora el fascinante mundo del anime con nuestra comunidad
              </Typography>
            </Box>

            {/* Social Media Links */}
            <Box
              sx={{
                display: 'flex',
                gap: 3,
                justifyContent: 'center',
                mt: 'auto',
                mb: 4,
                position: 'relative',
                zIndex: 2,
              }}
            >
              <Link
                href="https://github.com/Kleguizz"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  position: 'relative',
                  textDecoration: 'none',
                }}
              >
                <Box
                  sx={{
                    width: '45px',
                    height: '45px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(23,23,23,0.6)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'rgba(23,23,23,0.8)',
                      borderColor: 'rgba(255,255,255,0.2)',
                      transform: 'translateY(-2px)',
                      '& .icon': {
                        color: '#fff',
                      }
                    }
                  }}
                >
                  <GitHubIcon
                    className="icon"
                    sx={{
                      fontSize: '1.5rem',
                      color: 'rgba(255,255,255,0.7)',
                      transition: 'color 0.3s ease',
                      zIndex: 1,
                    }}
                  />
                </Box>
              </Link>

              <Link
                href="https://linkedin.com/in/tuusuario"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  position: 'relative',
                  textDecoration: 'none',
                }}
              >
                <Box
                  sx={{
                    width: '45px',
                    height: '45px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(23,23,23,0.6)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'rgba(23,23,23,0.8)',
                      borderColor: 'rgba(255,255,255,0.2)',
                      transform: 'translateY(-2px)',
                      '& .icon': {
                        color: '#fff',
                      }
                    }
                  }}
                >
                  <LinkedInIcon
                    className="icon"
                    sx={{
                      fontSize: '1.5rem',
                      color: 'rgba(255,255,255,0.7)',
                      transition: 'color 0.3s ease',
                      zIndex: 1,
                    }}
                  />
                </Box>
              </Link>

              <Link
                href="https://instagram.com/tuusuario"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  position: 'relative',
                  textDecoration: 'none',
                }}
              >
                <Box
                  sx={{
                    width: '45px',
                    height: '45px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(23,23,23,0.6)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'rgba(23,23,23,0.8)',
                      borderColor: 'rgba(255,255,255,0.2)',
                      transform: 'translateY(-2px)',
                      '& .icon': {
                        color: '#fff',
                      }
                    }
                  }}
                >
                  <InstagramIcon
                    className="icon"
                    sx={{
                      fontSize: '1.5rem',
                      color: 'rgba(255,255,255,0.7)',
                      transition: 'color 0.3s ease',
                      zIndex: 1,
                    }}
                  />
                </Box>
              </Link>
            </Box>
          </Box>

          {/* Panel Derecho - Formulario */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              flex: '1.2',
              p: 6,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 3,
              background: 'rgba(17, 17, 30, 0.3)',
              margin: '20px',
              borderRadius: '20px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: '#fff',
                fontWeight: 600,
                mb: 4,
                textAlign: 'center',
                fontFamily: '"Poppins", sans-serif',
                fontSize: '2rem',
              }}
            >
              Bienvenido de nuevo
            </Typography>

            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  height: '56px',
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '12px',
                  '& fieldset': {
                    borderColor: 'rgba(255,255,255,0.1)',
                    borderWidth: '2px',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(255,255,255,0.2)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#FF0080',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'rgba(255,255,255,0.7)',
                  '&.Mui-focused': {
                    color: '#FF0080',
                  },
                },
                '& .MuiInputBase-input': {
                  color: '#fff',
                  fontSize: '1rem',
                  padding: '14px 18px',
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
                      sx={{ color: 'rgba(255,255,255,0.7)', mr: 1 }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  height: '56px',
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '12px',
                  '& fieldset': {
                    borderColor: 'rgba(255,255,255,0.1)',
                    borderWidth: '2px',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(255,255,255,0.2)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#FF0080',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'rgba(255,255,255,0.7)',
                  '&.Mui-focused': {
                    color: '#FF0080',
                  },
                },
                '& .MuiInputBase-input': {
                  color: '#fff',
                  fontSize: '1rem',
                  padding: '14px 18px',
                },
              }}
            />

            <Button
              fullWidth
              type="submit"
              sx={{
                height: '56px',
                background: 'linear-gradient(45deg, rgba(147,51,234,0.9) 30%, rgba(79,70,229,0.9) 90%)',
                borderRadius: '12px',
                color: '#fff',
                fontSize: '1rem',
                fontWeight: 600,
                textTransform: 'none',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  background: 'linear-gradient(45deg, rgba(79,70,229,0.9) 30%, rgba(147,51,234,0.9) 90%)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(147,51,234,0.4)',
                },
              }}
            >
              Iniciar Sesión
            </Button>

            <Button
              fullWidth
              variant="outlined"
              startIcon={<Google />}
              onClick={handleGoogleLogin}
              sx={{
                height: '56px',
                borderColor: 'rgba(255,255,255,0.2)',
                color: '#fff',
                borderRadius: '12px',
                textTransform: 'none',
                fontSize: '1rem',
                border: '2px solid rgba(255,255,255,0.2)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                backgroundColor: 'transparent',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                '& .MuiButton-startIcon': {
                  margin: 0,
                },
                '&:hover': {
                  borderColor: '#FF0080',
                  backgroundColor: 'rgba(255,0,128,0.1)',
                },
              }}
            >
              Continuar con Google
            </Button>

            <Box sx={{ textAlign: 'center', mt: 1 }}>
              <Typography
                component="span"
                sx={{
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '0.9rem',
                }}
              >
                ¿No tienes una cuenta?{' '}
                <Button
                  onClick={onRegisterClick}
                  sx={{
                    color: '#FF0080',
                    textTransform: 'none',
                    fontWeight: 600,
                    '&:hover': {
                      background: 'transparent',
                      color: '#7928CA',
                    },
                  }}
                >
                  Regístrate
                </Button>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LoginForm; 