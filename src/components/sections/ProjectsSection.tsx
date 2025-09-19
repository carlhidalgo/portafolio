
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, Button, Modal } from '@/components/ui';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { ExternalLink, Github, Calendar, Tag, Code } from 'lucide-react';

// Proyectos destacados hardcodeados
const featuredProjects = [
  {
    id: 'sparringlab',
    title: 'SparringLab',
    description: 'Plataforma web para boxeadores y entusiastas del fitness. Organiza sparrings, torneos y entrenamientos, con enfoque en disciplina, técnica y comunidad.',
    longDescription: 'SparringLab es una plataforma moderna para la comunidad del boxeo y el fitness. Permite organizar sparrings, torneos y entrenamientos, con gestión de actividades, rutinas y gimnasios. Su objetivo es potenciar la disciplina, la técnica y el sentido de comunidad entre los usuarios.',
    image: '/sparringlab-thumb.png',
    technologies: ['React', 'JavaScript', 'CSS'],
    githubUrl: 'https://github.com/carlhidalgo/sparringLab-fronted',
    liveUrl: 'https://sparring-lab-fronted.vercel.app/',
    category: 'web',
    status: 'completed',
    featured: true,
    order: 3,
  },
  {
    id: 'taller-makween',
    title: 'Taller Rayo Makween',
    description: 'Aplicación web para taller mecánico. Permite registro de usuarios, gestión de servicios, carrito de compras y administración de clientes.',
    longDescription: 'Proyecto desarrollado con Django para la gestión de un taller mecánico. Incluye registro e inicio de sesión de usuarios, administración de servicios, carrito de compras y testimonios de clientes. Enfocado en calidad, transparencia y atención al cliente.',
    image: '/tallerrayomakeen-thumb.png',
    technologies: ['Django', 'Python', 'HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/carlhidalgo/taller-rayo-maqween',
    liveUrl: 'https://taller-rayo-maqween.vercel.app/',
    category: 'web',
    status: 'completed',
    featured: true,
    order: 2,
  },
  {
    id: 'fastapi-risk',
    title: 'FastAPI Risk Assessment',
    description: 'Plataforma para evaluación de riesgos empresariales. Backend en FastAPI y frontend en React. Incluye autenticación JWT, gestión de empresas y dashboard.',
    longDescription: 'FastAPI Risk Assessment es un sistema completo para la evaluación de riesgos empresariales. Backend robusto en FastAPI, frontend en React y PostgreSQL. Permite autenticación JWT, gestión de empresas, evaluaciones automáticas de riesgo y dashboard interactivo. Incluye algoritmo de scoring y despliegue en la nube.',
    image: '/fastapirisk-thumb.png',
    technologies: ['FastAPI', 'Python', 'React', 'TypeScript', 'PostgreSQL', 'Material-UI'],
    githubUrl: 'https://github.com/carlhidalgo/fastapi-risk-assessment',
    liveUrl: 'https://fastapi-risk-assessment.vercel.app/login',
    category: 'web',
    status: 'completed',
    featured: true,
    order: 1,
  },
];

const ProjectsSection = () => {

  // No usamos usePortfolio, usamos featuredProjects
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedProject, setSelectedProject] = useState<any>(null);
  //



  const getStatusColor = (status: any) => {
    switch (status) {
      case 'completed':
        return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'in-progress':
        return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'planned':
        return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'archived':
        return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
      default:
        return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getStatusLabel = (status: any) => {
    switch (status) {
      case 'completed':
        return 'Completado';
      case 'in-progress':
        return 'En Progreso';
      case 'planned':
        return 'Planeado';
      case 'archived':
        return 'Archivado';
      default:
        return status;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  // Solo mostramos los proyectos destacados hardcodeados
  const projects = featuredProjects;

  return (
    <>
      <section
        id="proyectos"
        ref={ref}
        className="relative py-20 px-4 bg-dark-800/30 overflow-hidden"
      >
        {/* Fondo 3D imagen */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <img
            src="/hero-bg.png"
            alt="Fondo 3D"
            className="w-full h-full object-cover blur-[2px] opacity-40 scale-110"
            style={{ filter: 'drop-shadow(0 0 60px #00f2fe)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900/80 to-dark-800/90" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-12"
            variants={containerVariants}
            initial="hidden"
            animate={isIntersecting ? 'visible' : 'hidden'}
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
            animate={isIntersecting ? 'visible' : 'hidden'}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group"
              >
                <Card
                  title={project.title}
                  description={project.description}
                  // Imagen principal se renderiza manualmente para poner fondo 3D detrás
                  variant={project.featured ? 'featured' : 'default'}
                  hover={true}
                  className="h-full shadow-2xl border-2 border-primary-900/20 bg-[#181A20]/80 backdrop-blur-md transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-primary-400/30 group-hover:border-primary-400/60 group-hover:bg-[#181A20]/95 group-hover:z-20 group-hover:ring-2 group-hover:ring-primary-400/30"
                >
                  {/* Fondo 3D detrás de la imagen del proyecto */}
                  <div className="relative mb-4 overflow-hidden rounded-lg group/card3d">
                    <img
                      src="/card-3d-bg.png"
                      alt="Fondo 3D"
                      className="absolute inset-0 w-full h-full object-cover scale-110 opacity-60 transition-transform duration-500 group-hover/card3d:rotate-2 group-hover/card3d:scale-125 pointer-events-none z-0"
                      style={{ filter: 'blur(2px) drop-shadow(0 0 32px #00f2fe)' }}
                    />
                    {/* Imagen de previsualización del video o fallback */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="relative w-full h-48 object-cover z-10 transition-transform duration-500 group-hover/card3d:-rotate-2 group-hover/card3d:scale-105"
                      onError={e => {
                        const target = e.currentTarget;
                        target.onerror = null;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <div
                      style={{ display: 'none' }}
                      className="absolute inset-0 flex items-center justify-center bg-dark-800 text-primary-400 text-5xl z-10"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-16 h-16">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553 2.276A1 1 0 0120 13.118V17a2 2 0 01-2 2H6a2 2 0 01-2-2v-3.882a1 1 0 01.447-.842L9 10m6 0V7a2 2 0 00-2-2H9a2 2 0 00-2 2v3m6 0l-6 3" />
                      </svg>
                    </div>
                  </div>
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
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-dark-700 text-dark-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-dark-700 text-dark-300 text-xs rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <Button
                        variant="ghost"
                        size="sm"
                        href={project.githubUrl}
                        target="_blank"
                        leftIcon={<Github className="w-4 h-4" />}
                        className="flex-1"
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
                        leftIcon={<ExternalLink className="w-4 h-4" />}
                        className="flex-1"
                      >
                        Demo
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 relative z-20 border-primary-400/70 bg-dark-800/80 hover:bg-primary-900/20 hover:text-primary-300 focus:ring-2 focus:ring-primary-400/60 shadow-[0_2px_12px_0_rgba(0,242,254,0.10)] transition-all duration-200"
                      onClick={() => setSelectedProject(project)}
                    >
                      Ver Detalle
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {projects.length === 0 && (
            <motion.div
              className="text-center py-12"
              variants={itemVariants}
              initial="hidden"
              animate={isIntersecting ? 'visible' : 'hidden'}
            >
              <Code className="w-16 h-16 text-dark-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-dark-300 mb-2">
                No se encontraron proyectos
              </h3>
              <p className="text-dark-400">
                Intenta ajustar los filtros para ver más proyectos.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Botón flotante para ir al inicio */}
      <button
        aria-label="Ir al inicio"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-50 bg-primary-500 hover:bg-primary-400 text-white rounded-full shadow-lg p-3 transition-all duration-200 border-2 border-primary-300/60 focus:outline-none focus:ring-2 focus:ring-primary-300/80 group"
        style={{ backgroundColor: '#181A20cc' }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>

      {/* Project Detail Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
        size="xl"
      >
        {selectedProject && (
          <div className="space-y-6 bg-[#181A20] rounded-xl">
            {/* Video del proyecto */}
            {selectedProject.id === 'sparringlab' && (
              <video controls autoPlay muted className="w-full rounded-lg aspect-video mb-4" poster={selectedProject.image}>
                <source src="/sparringlab.mp4" type="video/mp4" />
                Tu navegador no soporta el video.
              </video>
            )}
            {selectedProject.id === 'taller-makween' && (
              <video controls autoPlay muted className="w-full rounded-lg aspect-video mb-4" poster={selectedProject.image}>
                <source src="/tallerrayomakeen.mp4" type="video/mp4" />
                Tu navegador no soporta el video.
              </video>
            )}
            {selectedProject.id === 'fastapi-risk' && (
              <video controls autoPlay muted className="w-full rounded-lg aspect-video mb-4" poster={selectedProject.image}>
                <source src="/fastapirisk.mp4" type="video/mp4" />
                Tu navegador no soporta el video.
              </video>
            )}

            {/* Project Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-dark-100 mb-2">
                  Información del Proyecto
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <Tag className="w-4 h-4 mr-2 text-dark-400" />
                    <span className="text-dark-300">Categoría:</span>
                    <span className="ml-2 text-dark-100 capitalize">
                      {selectedProject.category}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-dark-400" />
                    <span className="text-dark-300">Estado:</span>
                    <span className={`ml-2 px-2 py-1 rounded-full text-xs ${getStatusColor(selectedProject.status)}`}>
                      {getStatusLabel(selectedProject.status)}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-dark-100 mb-2">
                  Enlaces
                </h4>
                <div className="flex gap-2">
                  {selectedProject.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      href={selectedProject.githubUrl}
                      target="_blank"
                      leftIcon={<Github className="w-4 h-4" />}
                    >
                      GitHub
                    </Button>
                  )}
                  {selectedProject.liveUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      href={selectedProject.liveUrl}
                      target="_blank"
                      leftIcon={<ExternalLink className="w-4 h-4" />}
                    >
                      Ver Demo
                    </Button>
                  )}
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-lg font-semibold text-dark-100 mb-2">
                Descripción
              </h4>
              <p className="text-dark-300 leading-relaxed">
                {selectedProject.longDescription}
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-lg font-semibold text-dark-100 mb-2">
                Tecnologías Utilizadas
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech: any) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary-600/20 text-primary-300 rounded-full text-sm border border-primary-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default ProjectsSection;
