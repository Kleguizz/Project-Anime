import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import { motion } from 'framer-motion';
import EpicVideoBG from '../Background/EpicVideoBG';
import AnimeCarousel from '../Carousel/AnimeCarousel';

const AuthContainer: React.FC = () => {
  const handleSuccess = (credentialResponse: any) => {
    console.log(credentialResponse);
  };

  const handleError = () => {
    console.log('Login Failed');
  };

  return (
    <>
      <EpicVideoBG />
      <Container maxWidth="lg" sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ mt: 4, mb: 6 }}>
            <AnimeCarousel />
          </Box>
        </motion.div>

        <Box
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Box
              sx={{
                p: 4,
                width: '100%',
                maxWidth: 400,
                borderRadius: 2,
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 0 20px rgba(229, 56, 59, 0.3)',
              }}
            >
              <Box sx={{ mb: 4, textAlign: 'center' }}>
                <Typography
                  variant="h4"
                  sx={{
                    color: '#f0f0f0',
                    fontWeight: 'bold',
                    textShadow: '0 0 10px rgba(229, 56, 59, 0.5)',
                  }}
                >
                  アニメ
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: 'rgba(240, 240, 240, 0.8)',
                    mt: 1,
                  }}
                >
                  Descubre el mundo del anime
                </Typography>
              </Box>

              <Box sx={{ mb: 3 }}>
                <GoogleLogin
                  onSuccess={handleSuccess}
                  onError={handleError}
                  useOneTap
                  theme="filled_black"
                  size="large"
                  width="100%"
                />
              </Box>

              <Box sx={{ textAlign: 'center' }}>
                <Button
                  variant="text"
                  sx={{
                    color: '#f0f0f0',
                    textTransform: 'none',
                    '&:hover': {
                      background: 'rgba(29, 53, 87, 0.3)',
                    },
                  }}
                >
                  Explorar como invitado
                </Button>
              </Box>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </>
  );
};

export default AuthContainer; 