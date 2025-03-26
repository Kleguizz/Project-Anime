import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Star, ChevronLeft, ChevronRight } from '@mui/icons-material';
import { useSpring, animated, config } from '@react-spring/web';

const BASE_URL = import.meta.env.VITE_MYANIMELIST_BASE_URL;

const animes = [
  { id: 1, title: 'Attack on Titan', image: `${BASE_URL}10/47347l.jpg`, rating: 4.8 },
  { id: 2, title: 'Demon Slayer', image: `${BASE_URL}1286/99889l.jpg`, rating: 4.7 },
  { id: 3, title: 'Jujutsu Kaisen', image: `${BASE_URL}1171/109222l.jpg`, rating: 4.9 },
  { id: 4, title: 'One Punch Man', image: `${BASE_URL}12/76049l.jpg`, rating: 4.6 },
  { id: 5, title: 'My Hero Academia', image: `${BASE_URL}10/78745l.jpg`, rating: 4.5 },
  { id: 6, title: 'Death Note', image: `${BASE_URL}9/9453l.jpg`, rating: 4.7 },
  { id: 7, title: 'Fullmetal Alchemist', image: `${BASE_URL}1208/94745l.jpg`, rating: 4.8 },
  { id: 8, title: 'Hunter x Hunter', image: `${BASE_URL}1337/99013l.jpg`, rating: 4.9 },
  { id: 9, title: 'Steins;Gate', image: `${BASE_URL}5/73199l.jpg`, rating: 4.8 },
  { id: 10, title: 'Code Geass', image: `${BASE_URL}1032/106242l.jpg`, rating: 4.7 },
  { id: 11, title: 'Violet Evergarden', image: 'https://cdn.myanimelist.net/images/anime/1795/95088l.jpg', rating: 4.8 },
  { id: 12, title: 'Your Name', image: 'https://cdn.myanimelist.net/images/anime/1122/96435l.jpg', rating: 4.9 },
  { id: 13, title: 'A Silent Voice', image: 'https://cdn.myanimelist.net/images/anime/1122/96435l.jpg', rating: 4.8 },
  { id: 14, title: 'Made in Abyss', image: 'https://cdn.myanimelist.net/images/anime/1194/93405l.jpg', rating: 4.7 },
  { id: 15, title: 'The Promised Neverland', image: 'https://cdn.myanimelist.net/images/anime/1277/106216l.jpg', rating: 4.6 },
  { id: 16, title: 'Dr. Stone', image: 'https://cdn.myanimelist.net/images/anime/1337/99013l.jpg', rating: 4.5 },
  { id: 17, title: 'Vinland Saga', image: 'https://cdn.myanimelist.net/images/anime/1500/103005l.jpg', rating: 4.8 },
  { id: 18, title: 'The Rising of the Shield Hero', image: 'https://cdn.myanimelist.net/images/anime/1490/95012l.jpg', rating: 4.4 },
  { id: 19, title: 'Demon Slayer: Mugen Train', image: 'https://cdn.myanimelist.net/images/anime/1286/99889l.jpg', rating: 4.9 },
  { id: 20, title: 'Jujutsu Kaisen 0', image: 'https://cdn.myanimelist.net/images/anime/1171/109222l.jpg', rating: 4.8 },
  { id: 21, title: 'Attack on Titan: The Final Season', image: 'https://cdn.myanimelist.net/images/anime/10/47347l.jpg', rating: 4.9 },
  { id: 22, title: 'My Hero Academia: World Heroes Mission', image: 'https://cdn.myanimelist.net/images/anime/10/78745l.jpg', rating: 4.7 },
  { id: 23, title: 'One Punch Man Season 2', image: 'https://cdn.myanimelist.net/images/anime/12/76049l.jpg', rating: 4.5 },
  { id: 24, title: 'Demon Slayer: Entertainment District Arc', image: 'https://cdn.myanimelist.net/images/anime/1286/99889l.jpg', rating: 4.8 },
  { id: 25, title: 'Jujutsu Kaisen Season 2', image: 'https://cdn.myanimelist.net/images/anime/1171/109222l.jpg', rating: 4.9 },
  { id: 26, title: 'Attack on Titan: The Final Season Part 2', image: 'https://cdn.myanimelist.net/images/anime/10/47347l.jpg', rating: 4.9 },
  { id: 27, title: 'My Hero Academia Season 6', image: 'https://cdn.myanimelist.net/images/anime/10/78745l.jpg', rating: 4.7 },
  { id: 28, title: 'One Punch Man Season 3', image: 'https://cdn.myanimelist.net/images/anime/12/76049l.jpg', rating: 4.6 },
  { id: 29, title: 'Demon Slayer: Swordsmith Village Arc', image: 'https://cdn.myanimelist.net/images/anime/1286/99889l.jpg', rating: 4.8 },
  { id: 30, title: 'Jujutsu Kaisen: Hidden Inventory Arc', image: 'https://cdn.myanimelist.net/images/anime/1171/109222l.jpg', rating: 4.9 },
  { id: 31, title: 'Attack on Titan: The Final Season Part 3', image: 'https://cdn.myanimelist.net/images/anime/10/47347l.jpg', rating: 4.9 },
  { id: 32, title: 'My Hero Academia: Ultra Impact', image: 'https://cdn.myanimelist.net/images/anime/10/78745l.jpg', rating: 4.7 },
  { id: 33, title: 'One Punch Man: Road to Hero', image: 'https://cdn.myanimelist.net/images/anime/12/76049l.jpg', rating: 4.6 },
  { id: 34, title: 'Demon Slayer: Hashira Training Arc', image: 'https://cdn.myanimelist.net/images/anime/1286/99889l.jpg', rating: 4.8 },
  { id: 35, title: 'Jujutsu Kaisen: Shibuya Incident Arc', image: 'https://cdn.myanimelist.net/images/anime/1171/109222l.jpg', rating: 4.9 },
  { id: 36, title: 'Attack on Titan: The Final Season Part 4', image: 'https://cdn.myanimelist.net/images/anime/10/47347l.jpg', rating: 4.9 },
  { id: 37, title: 'My Hero Academia: World Heroes Festival', image: 'https://cdn.myanimelist.net/images/anime/10/78745l.jpg', rating: 4.7 },
  { id: 38, title: 'One Punch Man: Hero Hunter', image: 'https://cdn.myanimelist.net/images/anime/12/76049l.jpg', rating: 4.6 },
  { id: 39, title: 'Demon Slayer: Infinity Castle Arc', image: 'https://cdn.myanimelist.net/images/anime/1286/99889l.jpg', rating: 4.8 },
  { id: 40, title: 'Jujutsu Kaisen: Culling Game Arc', image: 'https://cdn.myanimelist.net/images/anime/1171/109222l.jpg', rating: 4.9 },
  { id: 41, title: 'Attack on Titan: The Final Season Part 5', image: 'https://cdn.myanimelist.net/images/anime/10/47347l.jpg', rating: 4.9 },
  { id: 42, title: 'My Hero Academia: Ultra Rumble', image: 'https://cdn.myanimelist.net/images/anime/10/78745l.jpg', rating: 4.7 },
  { id: 43, title: 'One Punch Man: Hero Association', image: 'https://cdn.myanimelist.net/images/anime/12/76049l.jpg', rating: 4.6 },
  { id: 44, title: 'Demon Slayer: Final Arc', image: 'https://cdn.myanimelist.net/images/anime/1286/99889l.jpg', rating: 4.8 },
  { id: 45, title: 'Jujutsu Kaisen: Final Arc', image: 'https://cdn.myanimelist.net/images/anime/1171/109222l.jpg', rating: 4.9 },
  { id: 46, title: 'Attack on Titan: The Final Season Part 6', image: 'https://cdn.myanimelist.net/images/anime/10/47347l.jpg', rating: 4.9 },
  { id: 47, title: 'My Hero Academia: Ultra Alliance', image: 'https://cdn.myanimelist.net/images/anime/10/78745l.jpg', rating: 4.7 },
  { id: 48, title: 'One Punch Man: Hero Hunter 2', image: 'https://cdn.myanimelist.net/images/anime/12/76049l.jpg', rating: 4.6 },
  { id: 49, title: 'Demon Slayer: Final Battle', image: 'https://cdn.myanimelist.net/images/anime/1286/99889l.jpg', rating: 4.8 },
  { id: 50, title: 'Jujutsu Kaisen: Final Battle', image: 'https://cdn.myanimelist.net/images/anime/1171/109222l.jpg', rating: 4.9 }
];

// Función para mezclar el array de animes
const shuffleArray = (array: typeof animes) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const AnimeCard: React.FC<{
  title: string;
  image: string;
  rating: number;
  isActive?: boolean;
  style?: any;
}> = ({ title, image, rating, isActive = true, style }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleImageError = () => {
    setError(true);
    setIsLoaded(true);
  };

  const AnimatedBox = animated(Box);

  return (
    <AnimatedBox
      style={style}
      sx={{
        width: 320,
        height: 450,
        margin: '0 10px',
        borderRadius: 2,
        overflow: 'hidden',
        cursor: 'pointer',
        position: 'relative',
        backgroundColor: 'rgba(0,0,0,0.2)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.05)',
        '&:hover': {
          boxShadow: '0 8px 30px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1)',
        }
      }}
    >
      <div
        style={{
          position: 'relative',
          height: '100%',
          overflow: 'hidden',
        }}
      >
        {!error ? (
          <img
            src={image}
            alt={title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'scale(1)' : 'scale(1.1)',
              transition: 'opacity 0.3s ease, transform 0.3s ease',
              imageRendering: 'auto',
            }}
            onLoad={() => setIsLoaded(true)}
            onError={handleImageError}
            loading="lazy"
          />
        ) : (
          <Box
            sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0,0,0,0.3)',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <Typography sx={{ color: '#fff' }}>
              Error al cargar la imagen
            </Typography>
          </Box>
        )}
        {!isLoaded && !error && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0,0,0,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <Typography sx={{ color: '#fff' }}>
              Cargando...
            </Typography>
          </Box>
        )}
      </div>
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          alignItems: 'center',
          justifyContent: 'flex-end',
          background: isActive ? 'linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.7) 50%, transparent)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <Typography 
          variant="h6"
          sx={{ 
            fontWeight: 700,
            letterSpacing: 2,
            fontSize: '18px',
            textShadow: '0 2px 4px rgba(0,0,0,0.8)',
            color: '#fff',
            textAlign: 'center',
            fontFamily: '"Montserrat", sans-serif',
            lineHeight: 1.2,
            maxWidth: '90%',
            opacity: 0.95,
          }}
        >
          {title}
        </Typography>
        {isActive && (
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center',
              gap: 0.5,
              backgroundColor: 'rgba(0,0,0,0.6)',
              padding: '4px 12px',
              borderRadius: '4px',
              marginTop: '4px',
            }}
          >
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                sx={{
                  color: i < Math.floor(rating) ? '#fff' : 'rgba(255,255,255,0.2)',
                  fontSize: 16,
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))',
                }}
              />
            ))}
            <Typography
              sx={{
                color: '#fff',
                fontSize: '12px',
                fontWeight: 500,
                ml: 0.5,
                textShadow: '0 2px 4px rgba(0,0,0,0.5)',
              }}
            >
              {rating.toFixed(1)}
            </Typography>
          </Box>
        )}
      </Box>
    </AnimatedBox>
  );
};

const AnimeCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffledAnimes, setShuffledAnimes] = useState(() => {
    // Seleccionar 10 animes aleatorios únicos
    const selectedAnimes = shuffleArray(animes).slice(0, 10);
    return selectedAnimes;
  });
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % shuffledAnimes.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [shuffledAnimes.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % shuffledAnimes.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + shuffledAnimes.length) % shuffledAnimes.length);
  };

  const visibleAnimes = [
    shuffledAnimes[(currentIndex - 2 + shuffledAnimes.length) % shuffledAnimes.length],
    shuffledAnimes[(currentIndex - 1 + shuffledAnimes.length) % shuffledAnimes.length],
    shuffledAnimes[currentIndex],
    shuffledAnimes[(currentIndex + 1) % shuffledAnimes.length],
    shuffledAnimes[(currentIndex + 2) % shuffledAnimes.length],
  ];

  return (
    <Box sx={{ 
      position: 'relative', 
      width: '100%', 
      height: '100vh',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px 0',
    }}>
      <Box
        ref={carouselRef}
        sx={{
          position: 'relative',
          width: '340px',
          minHeight: '1400px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          perspective: '1500px',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {visibleAnimes.map((anime, index) => {
            const yOffset = (index - 2) * 280;
            const scale = (() => {
              if (index === 2) return 1;
              if (index === 1 || index === 3) return 0.85;
              return 0.7;
            })();
            const opacity = (() => {
              if (index === 2) return 1;
              if (index === 1 || index === 3) return 0.6;
              return 0.3;
            })();
            const blur = (() => {
              if (index === 2) return 0;
              if (index === 1 || index === 3) return 1;
              return 2;
            })();
            const zIndex = 5 - Math.abs(index - 2);

            return (
              <AnimeCard 
                key={`${anime.id}-${index}`}
                {...anime} 
                isActive={index === 2}
                style={useSpring({
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: `translate(-50%, calc(-50% + ${yOffset}px)) scale(${scale})`,
                  opacity,
                  filter: `blur(${blur}px)`,
                  zIndex,
                  config: { tension: 280, friction: 60 }
                })}
              />
            );
          })}
        </Box>
      </Box>

      <IconButton
        onClick={handlePrev}
        sx={{
          position: 'absolute',
          top: '50px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: '#fff',
          backgroundColor: 'rgba(0,0,0,0.2)',
          '&:hover': {
            transform: 'translateX(-50%) scale(1.1)',
            backgroundColor: 'rgba(0,0,0,0.4)',
          },
          zIndex: 10,
          transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
      >
        <ChevronLeft sx={{ transform: 'rotate(90deg)' }} />
      </IconButton>

      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          bottom: '50px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: '#fff',
          backgroundColor: 'rgba(0,0,0,0.2)',
          '&:hover': {
            transform: 'translateX(-50%) scale(1.1)',
            backgroundColor: 'rgba(0,0,0,0.4)',
          },
          zIndex: 10,
          transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
      >
        <ChevronRight sx={{ transform: 'rotate(90deg)' }} />
      </IconButton>
    </Box>
  );
};

export default AnimeCarousel; 