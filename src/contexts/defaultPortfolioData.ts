import { projects } from '@/data/projects';
import { experience } from '@/data/experience';
import { skills } from '@/data/skills';
import type { PortfolioData } from '@/types/portfolio';

export const defaultData: PortfolioData = {
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
