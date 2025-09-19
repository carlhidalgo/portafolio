import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui';
import { ParticleField } from '@/components/3d';
import { useScroll } from '@/hooks/useScroll';
import { usePortfolio } from '@/contexts/PortfolioContext';

const HeroSection = () => {
  const { scrollY } = useScroll();
  const { data } = usePortfolio();

  // Tarjeta que baja con el scroll, más suave y se esconde detrás de Sobre mí
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      // Movimiento más suave
      const y = Math.min(window.scrollY * 0.18, 120);
      setOffset(y);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Tarjeta de fondo 3D que baja con el scroll y se esconde detrás de Sobre mí */}
      <div
        ref={parallaxRef}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-3xl h-[340px] rounded-3xl overflow-hidden shadow-2xl border-2 border-primary-900/30 transition-transform duration-700"
        style={{ willChange: 'transform', transform: `translate(-50%, calc(-50% + ${offset}px))`, zIndex: 1 }}
      >
        <img
          src="/24 jun 2025, 09_02_10 p.m..png"
          alt="Fondo 3D"
          className="w-full h-full object-cover blur-[1px] opacity-85 scale-110"
          style={{ filter: 'drop-shadow(0 0 60px #00f2fe)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/40 to-dark-800/60" />
      </div>

      {/* Background Particles */}
      <ParticleField
        count={3000}
        size={0.015}
        speed={0.5}
        color="#3b82f6"
        opacity={0.4}
        className="z-0"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900/50 via-dark-800/30 to-primary-900/20 z-10" />
      
      {/* Content */}
      <motion.div
        className="relative z-20 text-center px-4 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Name */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          variants={itemVariants}
        >
          <span className="text-gradient">
            {data.personalInfo.name}
          </span>
        </motion.h1>
        
        {/* Title */}
        <motion.h2
          className="text-2xl md:text-3xl text-dark-200 mb-8 font-medium"
          variants={itemVariants}
        >
          {data.personalInfo.title}
        </motion.h2>
        
        {/* Description */}
        <motion.p
          className="text-lg text-dark-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          {data.personalInfo.description}
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={itemVariants}
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto"
          >
            Ver Proyectos
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto"
          >
            Contactar
          </Button>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-primary-400 rounded-full mt-2"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Parallax Effect (burbujas de color) */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          y: scrollY * 0.5,
        }}
      >
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-500/20 rounded-full blur-xl" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-accent-500/20 rounded-full blur-xl" />
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-secondary-500/20 rounded-full blur-xl" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
