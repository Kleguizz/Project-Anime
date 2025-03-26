import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Typography } from '@mui/material';

const VideoBackground: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);

  useEffect(() => {
    const video = document.querySelector('video');
    if (video) {
      video.addEventListener('loadeddata', () => setIsLoaded(true));
    }
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        overflow: 'hidden',
      }}
    >
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity,
        }}
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-liquid-art-background-101532-large.mp4" type="video/mp4" />
      </motion.video>
      
      {/* Overlay principal para mejorar legibilidad */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0.6))',
          opacity: useTransform(scrollY, [0, 300], [0.9, 0.7]),
        }}
      />

      {/* Overlay adicional para la parte superior (donde está el login) */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '40%',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.95), rgba(0,0,0,0.7))',
          opacity: useTransform(scrollY, [0, 300], [0.95, 0.8]),
        }}
      />

      {/* Efecto de carga */}
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: '#000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
          }}
        >
          <Typography sx={{ color: '#fff' }}>Loading video...</Typography>
        </motion.div>
      )}
    </Box>
  );
};

export default VideoBackground; 