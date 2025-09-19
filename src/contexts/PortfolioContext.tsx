import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { Project, Experience, Skill, ContactInfo } from '@/types';
import { projects } from '@/data/projects';
import { experience } from '@/data/experience';
import { skills } from '@/data/skills';

interface PortfolioData {
  personalInfo: {
    name: string;
    title: string;
    description: string;
    longDescription: string;
    email: string;
    phone?: string;
    location: string;
    avatar?: string;
    resumeUrl?: string;
  };
  socialMedia: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
    behance?: string;
    dribbble?: string;
  };
  projects: Project[];
  experience: Experience[];
  skills: Skill[];
  contactInfo: ContactInfo;
}

interface PortfolioContextType {
  data: PortfolioData;
  updatePersonalInfo: (info: Partial<PortfolioData['personalInfo']>) => void;
  updateSocialMedia: (social: Partial<PortfolioData['socialMedia']>) => void;
  addProject: (project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateProject: (id: string, project: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  getFeaturedProjects: () => Project[];
  getProjectsByCategory: (category: string) => Project[];
  getProjectsByStatus: (status: string) => Project[];
}

const defaultData: PortfolioData = {
  personalInfo: {
    name: 'Carlos Hidalgo',
    title: 'Ingeniero de Software',
    description: 'Especializado en desarrollo full-stack con React, Node.js y tecnologías modernas.',
    longDescription: 'Soy un ingeniero de software apasionado por crear soluciones innovadoras y experiencias digitales excepcionales. Con más de 5 años de experiencia en desarrollo full-stack, me especializo en tecnologías modernas y metodologías ágiles.',
    email: 'tu.email@ejemplo.com',
    phone: '+34 123 456 789',
    location: 'Madrid, España',
    avatar: '/images/avatar.jpg',
    resumeUrl: '/docs/cv.pdf',
  },
  socialMedia: {
    github: 'https://github.com/tu-usuario',
    linkedin: 'https://linkedin.com/in/tu-perfil',
    twitter: 'https://twitter.com/tu-usuario',
    instagram: 'https://instagram.com/tu-usuario',
    youtube: 'https://youtube.com/@tu-canal',
    behance: 'https://behance.net/tu-perfil',
    dribbble: 'https://dribbble.com/tu-perfil',
  },
  projects,
  experience,
  skills,
  contactInfo: {
    email: 'tu.email@ejemplo.com',
    phone: '+34 123 456 789',
    location: 'Madrid, España',
    socialMedia: [
      {
        platform: 'GitHub',
        url: 'https://github.com/tu-usuario',
        icon: 'github',
        username: 'tu-usuario',
      },
      {
        platform: 'LinkedIn',
        url: 'https://linkedin.com/in/tu-perfil',
        icon: 'linkedin',
        username: 'tu-perfil',
      },
      {
        platform: 'Twitter',
        url: 'https://twitter.com/tu-usuario',
        icon: 'twitter',
        username: 'tu-usuario',
      },
    ],
  },
};

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const usePortfolio = (): PortfolioContextType => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};

interface PortfolioProviderProps {
  children: ReactNode;
}

export const PortfolioProvider = ({ children }: PortfolioProviderProps) => {
  const [data, setData] = useState<PortfolioData>(defaultData);

  // Cargar datos del localStorage al inicializar
  useEffect(() => {
    const savedData = localStorage.getItem('portfolio-data');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setData(prevData => ({
          ...prevData,
          ...parsedData,
          // Mantener los datos estáticos que no se pueden modificar
          projects: prevData.projects,
          experience: prevData.experience,
          skills: prevData.skills,
        }));
      } catch (error) {
        console.error('Error loading portfolio data:', error);
      }
    }
  }, []);

  // Guardar datos en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem('portfolio-data', JSON.stringify(data));
  }, [data]);

  const updatePersonalInfo = (info: Partial<PortfolioData['personalInfo']>) => {
    setData(prevData => ({
      ...prevData,
      personalInfo: { ...prevData.personalInfo, ...info },
    }));
  };

  const updateSocialMedia = (social: Partial<PortfolioData['socialMedia']>) => {
    setData(prevData => ({
      ...prevData,
      socialMedia: { ...prevData.socialMedia, ...social },
    }));
  };

  const addProject = (project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newProject: Project = {
      ...project,
      id: Date.now().toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setData(prevData => ({
      ...prevData,
      projects: [...prevData.projects, newProject],
    }));
  };

  const updateProject = (id: string, project: Partial<Project>) => {
    setData(prevData => ({
      ...prevData,
      projects: prevData.projects.map(p => 
        p.id === id ? { ...p, ...project, updatedAt: new Date() } : p
      ),
    }));
  };

  const deleteProject = (id: string) => {
    setData(prevData => ({
      ...prevData,
      projects: prevData.projects.filter(p => p.id !== id),
    }));
  };

  const getFeaturedProjects = () => {
    return data.projects.filter(project => project.featured);
  };

  const getProjectsByCategory = (category: string) => {
    return data.projects.filter(project => project.category === category);
  };

  const getProjectsByStatus = (status: string) => {
    return data.projects.filter(project => project.status === status);
  };

  const value: PortfolioContextType = {
    data,
    updatePersonalInfo,
    updateSocialMedia,
    addProject,
    updateProject,
    deleteProject,
    getFeaturedProjects,
    getProjectsByCategory,
    getProjectsByStatus,
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
};
