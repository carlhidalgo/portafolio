import { PortfolioProvider } from '@/contexts/PortfolioContext';
import { HeroSection, AboutSection, ProjectsSection, ContactSection } from '@/components/sections';

const App = () => {
  return (
    <PortfolioProvider>
      <div className="min-h-screen bg-dark-900 text-dark-50">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </PortfolioProvider>
  );
};

export default App;
