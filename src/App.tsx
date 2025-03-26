import React from 'react';
import { Box } from '@mui/material';
import AnimeCarousel from './components/Carousel/AnimeCarousel';
import LoginForm from './components/Auth/LoginForm';
import AnimatedBackground from './components/Background/AnimatedBackground';

const App: React.FC = () => {
  const handleRegisterClick = () => {
    // Implementar lógica de registro
  };

  return (
    <Box sx={{ 
      width: '100%', 
      height: '100vh',
      position: 'relative',
      overflow: 'hidden',
      background: 'transparent',
    }}>
      <AnimatedBackground />
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          zIndex: 1,
          background: 'transparent',
        }}
      >
        <Box sx={{ 
          width: '65%', 
          height: '100%',
          background: 'transparent',
        }}>
          <AnimeCarousel />
        </Box>
        <Box sx={{ 
          width: '35%', 
          height: '100%',
          background: 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <LoginForm onRegisterClick={handleRegisterClick} />
        </Box>
      </Box>
    </Box>
  );
};

export default App; 