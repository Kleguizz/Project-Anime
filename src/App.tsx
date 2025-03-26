import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import AnimeCarousel from './components/Carousel/AnimeCarousel';
import LoginForm from './components/Login/LoginForm';
import VideoBackground from './components/VideoBackground/VideoBackground';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <VideoBackground />
      <Box
        sx={{
          position: 'relative',
          width: '100vw',
          height: '100vh',
          display: 'flex',
          overflow: 'hidden',
        }}
      >
        {/* Carrusel en la parte izquierda */}
        <Box
          sx={{
            width: '60%',
            height: '100%',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <AnimeCarousel />
        </Box>

        {/* Login en la parte derecha */}
        <Box
          sx={{
            width: '40%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            padding: '20px',
          }}
        >
          <LoginForm />
        </Box>
      </Box>
    </>
  );
};

export default App; 