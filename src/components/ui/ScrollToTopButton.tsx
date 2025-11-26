import { useState, useEffect } from 'react';

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('sobre-mi');
      if (!aboutSection) return;
      const rect = aboutSection.getBoundingClientRect();
      setVisible(rect.top < -100); // Aparece cuando ya pasaste Sobre Mí
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 z-50 bg-primary-500 hover:bg-primary-400 text-white rounded-full shadow-lg p-3 transition-all duration-300 animate-bounce"
      aria-label="Subir arriba"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
