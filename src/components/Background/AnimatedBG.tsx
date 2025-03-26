import React from 'react';
import { Box } from '@mui/material';

const AnimatedBG: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(45deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)',
          zIndex: 1,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.8) 100%)',
          zIndex: 2,
        }
      }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src="https://assets.codepen.io/3364143/7btrrd.mp4" type="video/mp4" />
      </video>
      <Box
        sx={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          background: 'url(https://grainy-gradients.vercel.app/noise.svg)',
          opacity: 0.15,
          zIndex: 3,
          pointerEvents: 'none',
        }}
      />
    </Box>
  );
};

export default AnimatedBG; 