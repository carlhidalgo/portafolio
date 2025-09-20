import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui';
import { ExternalLink, Github } from 'lucide-react';
import { featuredProjects } from '@/data/projects';
import type { Project, ProjectStatus } from '@/types';

// Helpers para status
function getStatusColor(status: ProjectStatus) {
  switch (status) {
    case 'completed':
      return 'border-green-500 text-green-400 bg-green-900/20';
    case 'in-progress':
      return 'border-yellow-500 text-yellow-300 bg-yellow-900/20';
    case 'planned':
      return 'border-blue-500 text-blue-300 bg-blue-900/20';
    case 'archived':
      return 'border-gray-500 text-gray-400 bg-gray-900/20';
    default:
      return 'border-primary-500 text-primary-300';
  }
}
function getStatusLabel(status: ProjectStatus) {
  switch (status) {
    case 'completed':
      return 'Completado';
    case 'in-progress':
      return 'En progreso';
    case 'planned':
      return 'Planeado';
    case 'archived':
      return 'Archivado';
    default:
      return status;
  }
}

// Animaciones para grid y cards
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};


// Componente hijo para cada tarjeta de proyecto
const ProjectCard = ({ project }: { project: Project }) => {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (!cardRef.current || !videoRef.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          videoRef.current?.play().catch(() => {});
        } else if (entry) {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      key={project.id}
      variants={itemVariants}
      ref={cardRef}
      className="group min-h-[420px] h-full shadow-2xl border-2 border-primary-900/20 bg-[#181A20]/80 backdrop-blur-md transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-primary-400/30 group-hover:border-primary-400/60 group-hover:bg-[#181A20]/95 group-hover:z-20 group-hover:ring-2 group-hover:ring-primary-400/30 rounded-xl flex flex-col"
      whileHover={{ rotateX: 6, rotateY: -6, scale: 1.04 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Fondo 3D detrás del video */}
      <div className="relative mb-4 flex flex-col items-center">
        {/* Sub-tarjeta para el video */}
        <div className="w-full bg-dark-900/80 border border-primary-900/40 rounded-xl shadow-lg mb-3 overflow-visible relative flex items-center justify-center min-h-[192px]">
          <img
            src=""
            alt={`Fondo 3D de la tarjeta de ${project.title}`}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover scale-110 opacity-60 pointer-events-none z-0"
            style={{ filter: 'blur(2px) drop-shadow(0 0 32px #00f2fe)' }}
          />
          {project.id === '1' && (
            <video
              ref={videoRef}
              src="/sparringlab.mp4"
              poster={project.image}
              muted
              loop
              playsInline
              className="relative w-full h-48 max-h-48 object-cover z-10 rounded-xl"
            />
          )}
          {project.id === '2' && (
            <video
              ref={videoRef}
              src="/tallerrayomakeen.mp4"
              poster={project.image}
              muted
              loop
              playsInline
              className="relative w-full h-48 max-h-48 object-cover z-10 rounded-xl"
            />
          )}
          {project.id === '3' && (
            <video
              ref={videoRef}
              src="/fastapirisk.mp4"
              poster={project.image}
              muted
              loop
              playsInline
              className="relative w-full h-48 max-h-48 object-cover z-10 rounded-xl"
            />
          )}
        </div>
        {/* Título y descripción breve */}
        <div className="w-full px-2 text-center">
          <h3 className="text-lg font-bold text-primary-300 mb-1">{project.title}</h3>
          <p className="text-dark-200 text-sm mb-1 line-clamp-2">{project.description}</p>
        </div>
      </div>
      {/* Status y destacado */}
      <div className="flex items-center justify-between mb-4">
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}
        >
          {getStatusLabel(project.status)}
        </span>
        {project.featured && (
          <span className="text-primary-400 text-sm font-medium">
            ⭐ Destacado
          </span>
        )}
      </div>
      {/* Tecnologías */}
      <div className="flex flex-wrap gap-1 mb-4">
        {project.technologies.map((tech: string) => (
          <span
            key={tech}
            className="px-2 py-1 bg-dark-700 text-dark-300 text-xs rounded"
          >
            {tech}
          </span>
        ))}
      </div>
      {/* Botones */}
      <div className="flex gap-2">
        {project.githubUrl && (
          <Button
            variant="ghost"
            size="sm"
            href={project.githubUrl}
            target="_blank"
            className="flex-1"
            leftIcon={<Github className="w-4 h-4" />}
          >
            Código
          </Button>
        )}
        {project.liveUrl && (
          <Button
            variant="ghost"
            size="sm"
            href={project.liveUrl}
            target="_blank"
            className="flex-1"
            leftIcon={<ExternalLink className="w-4 h-4" />}
          >
            Demo
          </Button>
        )}
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section
      id="proyectos"
      className="relative py-20 px-4 bg-transparent overflow-hidden"
    >
      {/* ...sin fondo propio, usa el fondo global... */}
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-3xl font-bold text-gradient mb-4"
            variants={itemVariants}
          >
            Mis Proyectos Destacados
          </motion.h2>
          <motion.p
            className="text-lg text-dark-300 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Una selección de proyectos que demuestran mis habilidades técnicas y mi pasión por crear soluciones innovadoras.
          </motion.p>
        </motion.div>
        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {featuredProjects.map((project: Project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;