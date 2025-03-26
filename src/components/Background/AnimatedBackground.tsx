import React from 'react';
import { Box } from '@mui/material';

const AnimatedBackground: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        background: 'rgb(13,12,24)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(103,93,172,0.15) 0%, rgba(13,12,24,0) 70%)',
          opacity: 1,
          animation: 'pulseGlow 12s ease-in-out infinite',
          zIndex: 0,
        }
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'hidden',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        {/* Partículas brillantes que flotan hacia arriba */}
        {[...Array(200)].map((_, i) => (
          <Box
            key={`particle-up-${i}`}
            sx={{
              position: 'absolute',
              width: '2px',
              height: '2px',
              background: 'rgba(255, 255, 255, 0.3)',
              boxShadow: '0 0 8px rgba(255, 255, 255, 0.6), 0 0 12px rgba(103,93,172,0.6)',
              borderRadius: '50%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `floatUp ${Math.random() * 12 + 10}s linear infinite`,
              '@keyframes floatUp': {
                '0%': {
                  opacity: 0,
                  transform: 'translateY(100vh) scale(1)',
                },
                '50%': {
                  opacity: 0.6,
                  transform: 'translateY(50vh) scale(1.2)',
                },
                '100%': {
                  opacity: 0,
                  transform: 'translateY(0) scale(1)',
                },
              },
            }}
          />
        ))}

        {/* Partículas de energía que pulsan */}
        {[...Array(30)].map((_, i) => (
          <Box
            key={`particle-pulse-${i}`}
            sx={{
              position: 'absolute',
              width: '4px',
              height: '4px',
              background: 'rgba(103,93,172,0.4)',
              boxShadow: '0 0 15px rgba(103,93,172,0.6), 0 0 30px rgba(103,93,172,0.4)',
              borderRadius: '50%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `pulsate ${Math.random() * 6 + 4}s ease-in-out infinite`,
              '@keyframes pulsate': {
                '0%': {
                  transform: 'scale(1)',
                  opacity: 0.3,
                },
                '50%': {
                  transform: 'scale(2.5)',
                  opacity: 0.5,
                },
                '100%': {
                  transform: 'scale(1)',
                  opacity: 0.3,
                },
              },
            }}
          />
        ))}

        {/* Líneas de energía que se mueven */}
        {[...Array(15)].map((_, i) => (
          <Box
            key={`energy-line-${i}`}
            sx={{
              position: 'absolute',
              width: '150px',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(103,93,172,0.4), transparent)',
              boxShadow: '0 0 20px rgba(103,93,172,0.2)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `energyLine ${Math.random() * 12 + 10}s linear infinite`,
              '@keyframes energyLine': {
                '0%': {
                  opacity: 0,
                  transform: `rotate(${Math.random() * 360}deg) translateX(-150px)`,
                },
                '50%': {
                  opacity: 0.4,
                },
                '100%': {
                  opacity: 0,
                  transform: `rotate(${Math.random() * 360}deg) translateX(150px)`,
                },
              },
            }}
          />
        ))}

        {/* Efecto de neblina que se mueve */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at center, rgba(103,93,172,0.05) 0%, rgba(103,93,172,0.02) 50%, transparent 70%)',
            animation: 'fogMove 20s ease-in-out infinite',
            '@keyframes fogMove': {
              '0%': {
                transform: 'translate(0%, 0%) scale(1)',
                opacity: 0.3,
              },
              '50%': {
                transform: 'translate(2%, 2%) scale(1.1)',
                opacity: 0.4,
              },
              '100%': {
                transform: 'translate(0%, 0%) scale(1)',
                opacity: 0.3,
              },
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default AnimatedBackground; 