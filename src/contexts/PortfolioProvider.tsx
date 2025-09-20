import { useState, useEffect, ReactNode } from 'react';
import { PortfolioContext } from './PortfolioContext';
import type { PortfolioData, PortfolioContextType } from '@/types/portfolio';
import { defaultData } from '@/contexts/defaultPortfolioData';
import type { Project } from '@/types';

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
