import type { Project } from './index';

export interface PortfolioData {
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
  experience: import('./index').Experience[];
  skills: import('./index').Skill[];
  contactInfo: import('./index').ContactInfo;
}

export interface PortfolioContextType {
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
