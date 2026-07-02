import { projects } from '@/data/projects';
import { experience } from '@/data/experience';
import { skills } from '@/data/skills';
import type { PortfolioData } from '@/types/portfolio';

export const defaultData: PortfolioData = {
  personalInfo: {
    name: 'Carlos Hidalgo de la Fuente',
    title: 'Desarrollador de Software',
    description: 'Desarrollador de software especializado en Python, JavaScript, Kotlin y Java.',
    longDescription: 'Soy un desarrollador de software con formación en análisis y programación computacional. Cuento con experiencia en desarrollo full-stack backend y móvil utilizando frameworks como Django, FastAPI, Angular y React. Además, estoy certificado por Google, Microsoft Azure, Cisco y Red Hat en TI y ciberseguridad.',
    email: 'karlozoh@gmail.com',
    phone: '(+56) 993516225',
    location: 'Valparaíso, Chile',
    avatar: '/images/avatar.jpg',
    resumeUrl: '/CurriculumProfesionalCarlos.pdf',
  },
  socialMedia: {
    github: 'https://github.com/carlhidalgo',
    linkedin: 'https://www.linkedin.com/in/carlos-hidalgo-de-la-fuente-a02248246/',
    twitter: '',
    instagram: '',
    youtube: '',
    behance: '',
    dribbble: '',
  },
  projects,
  experience,
  skills,
  contactInfo: {
    email: 'karlozoh@gmail.com',
    phone: '(+56) 993516225',
    location: 'Valparaíso, Chile',
    socialMedia: [
      {
        platform: 'GitHub',
        url: 'https://github.com/carlhidalgo',
        icon: 'github',
        username: 'carlhidalgo',
      },
      {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/in/carlos-hidalgo-de-la-fuente-a02248246/',
        icon: 'linkedin',
        username: 'carlos-hidalgo-de-la-fuente-a02248246',
      },
    ],
  },
};
