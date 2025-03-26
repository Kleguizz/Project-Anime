import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Star, ChevronLeft, ChevronRight } from '@mui/icons-material';
import { useSpring, animated, config } from '@react-spring/web';

const BASE_URL = import.meta.env.VITE_MYANIMELIST_BASE_URL;

const animes = [
  { 
    id: 1, 
    title: 'Attack on Titan', 
    image: '/images/animes/attack-on-titan.jpg', 
    rating: 4.8,
    description: 'La humanidad vive rodeada por enormes muros que los protegen de los titanes. La historia sigue a Eren Yeager y sus amigos en su lucha por la supervivencia.'
  },
  { 
    id: 2, 
    title: 'Demon Slayer', 
    image: '/images/animes/demon-slayer.jpg', 
    rating: 4.7,
    description: 'Tanjiro Kamado se convierte en un cazador de demonios después de que su familia es asesinada y su hermana transformada en demonio.'
  },
  { 
    id: 3, 
    title: 'Jujutsu Kaisen', 
    image: '/images/animes/jujutsu-kaisen.jpg', 
    rating: 4.9,
    description: 'Yuji Itadori se une a una escuela de hechicería después de verse involucrado en un mundo de maldiciones y energía maldita.'
  },
  { 
    id: 4, 
    title: 'Hunter x Hunter', 
    image: '/images/animes/demon-slayer.jpg',
    rating: 4.8,
    description: 'Gon Freecss se embarca en una aventura para convertirse en un cazador profesional y encontrar a su padre, quien lo abandonó cuando era niño.'
  },
  { 
    id: 5, 
    title: 'Naruto', 
    image: '/images/animes/steins-gate.jpg',
    rating: 4.7,
    description: 'Un joven ninja busca convertirse en el Hokage, el líder de su aldea, mientras lucha contra fuerzas oscuras que amenazan su mundo.'
  },
  { 
    id: 6, 
    title: 'Dragon Ball Z', 
    image: '/images/animes/fullmetal-alchemist.jpg',
    rating: 4.6,
    description: 'Goku y sus amigos protegen la Tierra de poderosos enemigos mientras buscan las esferas del dragón para cumplir sus deseos.'
  },
  { 
    id: 7, 
    title: 'Fullmetal Alchemist', 
    image: '/images/animes/fullmetal-alchemist.jpg', 
    rating: 4.8,
    description: 'Dos hermanos buscan la Piedra Filosofal para recuperar sus cuerpos después de un fallido intento de resucitar a su madre mediante alquimia.'
  },
  { 
    id: 8, 
    title: 'Steins;Gate', 
    image: '/images/animes/steins-gate.jpg', 
    rating: 4.8,
    description: 'Un autoproclamado científico loco descubre accidentalmente una forma de enviar mensajes al pasado, desencadenando una serie de eventos que alteran la realidad.'
  },
  { 
    id: 9, 
    title: 'Code Geass', 
    image: '/images/animes/code-geass.jpg', 
    rating: 4.7,
    description: 'Un príncipe exiliado obtiene el poder de controlar las mentes de otros y lo usa para liderar una rebelión contra el Imperio Británico.'
  },
  { 
    id: 10, 
    title: 'Violet Evergarden', 
    image: '/images/animes/violet-evergarden.jpg', 
    rating: 4.8,
    description: 'Una ex-soldado trabaja como escritora de cartas mientras aprende el significado del amor y las emociones humanas.'
  }
];

const AnimeCard: React.FC<{
  title: string;
  image: string;
  rating: number;
  description: string;
  isActive?: boolean;
  style?: any;
}> = ({ title, image, rating, description, isActive = true, style }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleImageError = () => {
    setError(true);
    setIsLoaded(true);
    console.error(`Error loading image for: ${title}`);
  };

  const fallbackImage = 'https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png';

  const AnimatedBox = animated(Box);

  return (
    <AnimatedBox
      style={style}
      sx={{
        width: 800,
        height: 450,
        margin: '0 10px',
        borderRadius: 2,
        overflow: 'hidden',
        cursor: 'pointer',
        position: 'relative',
        backgroundColor: 'rgba(0,0,0,0.2)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.05)',
        backdropFilter: 'blur(8px)',
        '&:hover': {
          boxShadow: '0 8px 30px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1)',
        }
      }}
    >
      <Box
        sx={{
          position: 'relative',
          height: '100%',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Box
          sx={{
            width: '45%',
            height: '100%',
            position: 'relative',
            backgroundColor: 'rgba(0,0,0,0.3)',
          }}
        >
          <img
            src={error ? fallbackImage : image}
            alt={title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'scale(1)' : 'scale(1.1)',
              transition: 'opacity 0.3s ease, transform 0.3s ease',
              imageRendering: '-webkit-optimize-contrast',
              WebkitBackfaceVisibility: 'hidden',
              MozBackfaceVisibility: 'hidden',
              backfaceVisibility: 'hidden',
            }}
            onLoad={() => setIsLoaded(true)}
            onError={handleImageError}
            loading="lazy"
          />
        </Box>

        <Box
          sx={{
            width: '55%',
            height: '100%',
            padding: '35px',
            background: 'linear-gradient(to right, rgba(0,0,0,0.98), rgba(0,0,0,0.95))',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Typography 
            variant="h6"
            sx={{ 
              fontWeight: 700,
              letterSpacing: 1,
              fontSize: '26px',
              color: '#fff',
              mb: 2,
              fontFamily: '"Montserrat", sans-serif',
              lineHeight: 1.2,
            }}
          >
            {title}
          </Typography>

          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center',
              gap: 0.5,
              backgroundColor: 'rgba(255,255,255,0.1)',
              padding: '6px 16px',
              borderRadius: '6px',
              alignSelf: 'flex-start',
              mb: 3,
              backdropFilter: 'blur(5px)',
            }}
          >
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                sx={{
                  color: i < Math.floor(rating) ? '#fff' : 'rgba(255,255,255,0.2)',
                  fontSize: 16,
                }}
              />
            ))}
            <Typography
              sx={{
                color: '#fff',
                fontSize: '14px',
                fontWeight: 500,
                ml: 0.5,
              }}
            >
              {rating.toFixed(1)}
            </Typography>
          </Box>

          <Typography
            sx={{
              fontSize: '17px',
              color: 'rgba(255,255,255,0.95)',
              mb: 2,
              lineHeight: 1.7,
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 300,
              letterSpacing: 0.3,
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </AnimatedBox>
  );
};

const AnimeCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % animes.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % animes.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + animes.length) % animes.length);
  };

  const visibleAnimes = [
    animes[(currentIndex - 2 + animes.length) % animes.length],
    animes[(currentIndex - 1 + animes.length) % animes.length],
    animes[currentIndex],
    animes[(currentIndex + 1) % animes.length],
    animes[(currentIndex + 2) % animes.length],
  ];

  return (
    <Box sx={{ 
      position: 'relative', 
      width: '100%',
      height: '100vh',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      pl: '5%',
    }}>
      <Box
        ref={carouselRef}
        sx={{
          position: 'relative',
          width: '900px',
          minHeight: '1400px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          perspective: '1500px',
          zIndex: 3,
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
            const yOffset = (index - 2) * 300;
            const scale = (() => {
              if (index === 2) return 1;
              if (index === 1 || index === 3) return 0.8;
              return 0.6;
            })();
            const opacity = (() => {
              if (index === 2) return 1;
              if (index === 1 || index === 3) return 0.4;
              return 0.2;
            })();
            const blur = (() => {
              if (index === 2) return 0;
              if (index === 1 || index === 3) return 2;
              return 4;
            })();
            const zIndex = 5 - Math.abs(index - 2);

            const animeWithDescription = {
              ...anime,
              description: anime.description || 'Información no disponible'
            };

            return (
              <AnimeCard 
                key={`${anime.id}-${index}`}
                {...animeWithDescription} 
                isActive={index === 2}
                style={useSpring({
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: `translate(-50%, -50%) translateY(${yOffset}px) scale(${scale})`,
                  opacity,
                  filter: `blur(${blur}px)`,
                  zIndex,
                  config: { ...config.gentle }
                })}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default AnimeCarousel;