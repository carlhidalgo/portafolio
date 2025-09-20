
import { useEffect, useState, useRef } from 'react';
// Componente para luces animadas que siguen el mouse
function MovingLights() {
  const lightRef1 = useRef<HTMLDivElement | null>(null);
  const lightRef2 = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      if (lightRef1.current) {
        lightRef1.current.style.left = `${x * 100}%`;
        lightRef1.current.style.top = `${y * 100}%`;
      }
      if (lightRef2.current) {
        lightRef2.current.style.left = `${(1 - x) * 100}%`;
        lightRef2.current.style.top = `${(1 - y) * 100}%`;
      }
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);
  return (
    <>
      <div ref={lightRef1} className="fixed w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none z-10 transition-all duration-300" style={{ left: '50%', top: '50%', transform: 'translate(-50%,-50%)' }} />
      <div ref={lightRef2} className="fixed w-80 h-80 bg-pink-400/10 rounded-full blur-3xl pointer-events-none z-10 transition-all duration-300" style={{ left: '60%', top: '60%', transform: 'translate(-50%,-50%)' }} />
    </>
  );
}
import { PortfolioProvider } from '@/contexts/PortfolioProvider';
import { HeroSection, AboutSection, ProjectsSection, ContactSection } from '@/components/sections';

import ParticleField from '@/components/3d/ParticleField';
import FloatingCube from '@/components/3d/FloatingCube';


const App = () => {
  // Detectar preferencia de color del sistema y aplicar clase 'dark' al html
  useEffect(() => {
    const root = window.document.documentElement;
    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const applyTheme = () => {
      if (darkQuery.matches) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    };
    applyTheme();
    darkQuery.addEventListener('change', applyTheme);
    return () => darkQuery.removeEventListener('change', applyTheme);
  }, []);

  // Parallax para el fondo 3D
  const [parallaxY, setParallaxY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setParallaxY(window.scrollY * 0.18);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <PortfolioProvider>
      <div className="min-h-screen relative text-dark-50 dark:text-dark-900 transition-colors duration-500 overflow-x-hidden">
  {/* Fondo 3D global con parallax, cubos flotantes y luces animadas */}
        <div
          className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none select-none"
          style={{ transform: `translateY(${parallaxY}px)` }}
        >
          <img
            src="/hero-bg.png"
            alt="Fondo 3D global"
            loading="lazy"
            className="w-full h-full object-cover blur-[2px] opacity-40 scale-110 animate-pulse-slow"
            style={{ filter: 'drop-shadow(0 0 60px #00f2fe)' }}
          />
          {/* Cubos 3D flotantes */}
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            <div className="absolute left-[10%] top-[20%] w-32 h-32 opacity-70">
              <FloatingCube color="#38bdf8" opacity={0.7} scale={[1.2,1.2,1.2]} rotation={[0.2,0.4,0.1]} />
            </div>
            <div className="absolute right-[12%] top-[35%] w-24 h-24 opacity-60">
              <FloatingCube color="#f472b6" opacity={0.6} scale={[0.8,0.8,0.8]} rotation={[0.1,0.2,0.3]} />
            </div>
            <div className="absolute left-[25%] bottom-[18%] w-20 h-20 opacity-50">
              <FloatingCube color="#facc15" opacity={0.5} scale={[0.7,0.7,0.7]} rotation={[0.3,0.1,0.2]} />
            </div>
            <div className="absolute right-[20%] bottom-[10%] w-28 h-28 opacity-65">
              <FloatingCube color="#a78bfa" opacity={0.65} scale={[1,1,1]} rotation={[0.2,0.3,0.2]} />
            </div>
            {/* Cubo central interactivo */}
            <div className="absolute left-1/2 top-1/2 w-40 h-40 opacity-80" style={{ transform: 'translate(-50%,-50%)' }}>
              <FloatingCube color="#f472b6" opacity={0.8} scale={[1.5,1.5,1.5]} rotation={[0.2,0.2,0.2]} text="👾" />
            </div>
          </div>
          {/* Luces animadas que siguen el mouse */}
          <MovingLights />
          {/* Gradiente animado */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/60 via-dark-900/80 to-dark-800/90 animate-gradient-x" />
        </div>
        {/* Partículas luminosas */}
        <div className="fixed inset-0 z-10 pointer-events-none">
          <ParticleField count={1200} size={0.04} speed={1.2} color="#38bdf8" opacity={0.45} />
        </div>
        <div className="relative z-20">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </div>
        {/* Animación de gradiente personalizada */}
        <style>
          {`
            @keyframes gradient-x {
              0%, 100% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
            }
            .animate-gradient-x {
              background-size: 200% 200%;
              animation: gradient-x 12s ease-in-out infinite;
            }
            .animate-pulse-slow {
              animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
            }
            @keyframes pulse {
              0%, 100% { opacity: 0.4; }
              50% { opacity: 0.55; }
            }
          `}
        </style>
      </div>
    </PortfolioProvider>
  );
};

export default App;
