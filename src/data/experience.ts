import type { Experience } from '@/types';

export const experience: Experience[] = [
  {
    id: '1',
    company: 'Aurafy',
    position: 'Desarrollador Full Stack — Práctica Profesional',
    description: 'Desarrollo de aplicaciones web full-stack como parte de la práctica profesional integradora.',
    startDate: new Date('2025-09-01'),
    endDate: new Date('2025-12-31'),
    current: false,
    location: 'Chile',
    technologies: ['React', 'Node.js', 'Python', 'APIs REST', 'Git', 'GitHub'],
    achievements: [
      'Desarrollo de aplicaciones web full-stack en entornos profesionales colaborativos.',
      'Implementación de funcionalidades backend eficientes con Python y APIs REST en un equipo ágil real.',
      'Participación en ciclos de desarrollo ágiles (Scrum), revisiones de código (code reviews) y despliegue continuo.'
    ],
    type: 'full-time',
    createdAt: new Date('2025-09-01'),
    updatedAt: new Date('2025-12-31'),
  },
  {
    id: '2',
    company: 'Proyectos Freelance / Independientes',
    position: 'Desarrollador Web',
    description: 'Provisión de servicios independientes para el diseño, desarrollo e implementación de plataformas web modernas.',
    startDate: new Date('2024-01-01'),
    endDate: new Date('2025-12-31'),
    current: false,
    location: 'Chile',
    technologies: ['Django', 'FastAPI', 'Angular', 'React', 'MySQL', 'Firebase', 'Vercel', 'Railway'],
    achievements: [
      'Desarrollo y mantenimiento preventivo y correctivo de aplicaciones web con Python (Django/FastAPI) y JavaScript (Angular/React).',
      'Diseño, optimización e implementación de esquemas de bases de datos MySQL y colecciones de Firebase para proyectos de diversa envergadura.',
      'Despliegue y gestión integral de aplicaciones en plataformas como Vercel y Railway.'
    ],
    type: 'freelance',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2025-12-31'),
  }
];

export const currentExperience = experience.find(exp => exp.current);
export const pastExperience = experience.filter(exp => !exp.current);
