import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const EpicVideoBG: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (window.innerWidth - e.pageX) / 100;
      const y = (window.innerHeight - e.pageY) / 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        overflow: 'hidden',
      }}
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
      }}
      transition={{ type: 'spring', stiffness: 75, damping: 15 }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to right, rgba(10,10,10,0.9), rgba(10,10,10,0.7))',
          zIndex: 1,
        }}
      />
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src="/anime-bg.mp4" type="video/mp4" />
      </video>
    </motion.div>
  );
};

export default EpicVideoBG; 