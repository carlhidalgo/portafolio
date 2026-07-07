import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui';
import React, { Suspense } from 'react';
const ParticleField = React.lazy(() => import('@/components/3d/ParticleField'));
import { usePortfolio } from '@/contexts/PortfolioContext';
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';

const HeroSection = () => {
  const { data } = usePortfolio();
  const [currentWord, setCurrentWord] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  const roles = [
    'Desarrollador Full-Stack',
    'Python & Django Expert',
    'Mobile Developer',
    'Backend Engineer',
  ];

  // Typewriter effect
  useEffect(() => {
    const word = roles[currentWord] ?? '';
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setCurrentWord((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, currentWord]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.18 },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const socialLinks = [
    { icon: FaGithub, href: data.socialMedia.github, label: 'GitHub' },
    { icon: FaLinkedin, href: data.socialMedia.linkedin, label: 'LinkedIn' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent">

      {/* Background Particles */}
      <Suspense fallback={null}>
        <ParticleField
          count={1200}
          size={0.015}
          speed={0.5}
          color="#3b82f6"
          opacity={0.4}
          className="z-0"
        />
      </Suspense>

      {/* Atmospheric blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-primary-700/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-accent-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary-700/10 rounded-full blur-[90px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-900/20 to-dark-900/80 z-10" />

      {/* === MAIN CONTENT === */}
      <motion.div
        className="relative z-20 text-center px-6 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        {/* Eyebrow label */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-500/40 bg-primary-500/10 text-primary-300 text-sm font-mono tracking-widest uppercase backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse" />
            Disponible para trabajar
          </span>
        </motion.div>

        {/* Name — split for gradient + glow */}
        <motion.h1
          variants={itemVariants}
          className="font-extrabold tracking-tight leading-none mb-4"
          style={{ fontSize: 'clamp(2.8rem, 8vw, 7rem)' }}
        >
          <span
            style={{
              background: 'linear-gradient(135deg, #60a5fa 0%, #06b6d4 50%, #818cf8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 32px rgba(96, 165, 250, 0.55))',
            }}
          >
            {data.personalInfo.name}
          </span>
        </motion.h1>

        {/* Typewriter subtitle */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-2 mb-6 h-10"
        >
          <span className="text-xl md:text-2xl text-dark-200 font-mono">
            {displayed}
            <span className="inline-block w-0.5 h-6 bg-primary-400 ml-1 animate-pulse align-middle" />
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-dark-300 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          {data.personalInfo.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <button
            onClick={() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-3.5 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
              boxShadow: '0 0 24px rgba(59, 130, 246, 0.4)',
            }}
          >
            <span className="relative z-10">Ver Proyectos</span>
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
          </button>

          <button
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3.5 rounded-xl font-semibold text-primary-300 border border-primary-500/50 bg-primary-500/5 hover:bg-primary-500/15 hover:border-primary-400 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
          >
            Contactar
          </button>
        </motion.div>

        {/* Social links */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) =>
            href ? (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group w-10 h-10 rounded-full border border-dark-600 bg-dark-800/60 backdrop-blur-sm flex items-center justify-center text-dark-400 hover:text-primary-400 hover:border-primary-500/60 hover:bg-primary-500/10 transition-all duration-300 hover:scale-110"
              >
                <Icon size={18} />
              </a>
            ) : null
          )}
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-dark-600" />
          <span className="text-dark-500 text-xs font-mono tracking-wider">Valparaíso, Chile</span>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
      >
        <span className="text-dark-500 text-xs font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FaArrowDown className="text-primary-400/60" size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
