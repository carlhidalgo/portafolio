

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaUserTie, FaGraduationCap, FaCertificate, FaTools, FaUserFriends } from 'react-icons/fa';

const AboutSection = () => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [cvDownloaded, setCvDownloaded] = useState(false);
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CurriculumProfesionalCarlos.pdf';
    link.download = 'CurriculumProfesionalCarlos.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setCvDownloaded(true);
    setTimeout(() => setCvDownloaded(false), 3000);
  };

  return (
    <section
      id="sobre-mi"
      ref={ref}
      className="py-20 px-4 bg-dark-800/30"
    >
      <div className="max-w-3xl mx-auto bg-dark-900/80 rounded-3xl shadow-2xl p-8 border border-dark-700">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2 className="text-4xl font-extrabold text-center mb-2 tracking-tight text-gradient bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
            <FaUserTie className="inline-block mr-2 mb-1 text-primary-400" size={36} />Sobre Mí
          </h2>
          <p className="text-dark-300 text-lg text-center mb-8 max-w-2xl mx-auto leading-relaxed">
            Analista Programador con experiencia en desarrollo backend utilizando <span className="font-semibold text-primary-400">Python</span>, <span className="font-semibold text-primary-400">JavaScript</span>, <span className="font-semibold text-primary-400">Node.js</span>, <span className="font-semibold text-primary-400">Django</span> y bases de datos <span className="font-semibold text-primary-400">SQL</span>. Certificado en ciberseguridad por Google y Cisco, con habilidades en resolución de problemas, trabajo en equipo y adaptación a entornos dinámicos. Apasionado por aplicar la tecnología para optimizar procesos y resolver desafíos técnicos.
          </p>
          <div className="flex flex-col md:flex-row md:items-center md:gap-8 mb-8">
            <div className="flex-1 mb-4 md:mb-0 space-y-1">
              <div className="flex items-center gap-2 text-lg text-dark-200 font-semibold">
                <FaUserTie className="text-primary-400" /> Carlos Hidalgo de la Fuente
              </div>
              <div className="flex items-center gap-2 text-dark-300 text-base">
                <FaGraduationCap className="text-secondary-400" /> Analista Programador
              </div>
              <div className="flex items-center gap-2 text-dark-400 text-sm mt-1">
                <FaMapMarkerAlt className="text-primary-400" /> Valparaíso, Chile
              </div>
              <div className="flex items-center gap-2 text-dark-400 text-sm">
                <FaPhoneAlt className="text-primary-400" /> (+56) 993516225
              </div>
              <div className="flex items-center gap-2 text-dark-400 text-sm">
                <FaEnvelope className="text-primary-400" /> karlozoh@gmail.com
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
              <button className="btn-primary w-full" onClick={handleDownloadCV}>
                Descargar CV
              </button>
              {cvDownloaded && (
                <div className="mt-2 text-green-400 font-semibold text-center">¡CV descargado con éxito!</div>
              )}
            </div>
          </div>
          <div className="mb-6">
            <div className="flex items-center gap-2 font-semibold text-dark-100 mb-1 text-lg">
              <FaGraduationCap className="text-secondary-400" /> Educación
            </div>
            <div className="ml-7 text-dark-200">2023 - 2025: Duoc UC, Analista Programador Computacional</div>
          </div>
          <div className="mb-8">
            <div className="flex items-center gap-2 font-semibold text-dark-100 mb-2 text-lg">
              <FaCertificate className="text-primary-400" /> Certificaciones
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="https://www.coursera.org/account/accomplishments/professional-cert/CYTK8YUPXII4" target="_blank" rel="noopener noreferrer">
                <span className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary-400 text-primary-300 bg-dark-800/60 hover:bg-primary-900/20 transition font-semibold shadow-sm cursor-pointer">
                  <FaCertificate className="text-primary-400" /> Ciberseguridad de Google
                </span>
              </a>
              <a href="https://www.credly.com/badges/d2d6364c-03db-4ad9-b898-a399923ce8ba/linked_in_profile" target="_blank" rel="noopener noreferrer">
                <span className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary-400 text-primary-300 bg-dark-800/60 hover:bg-primary-900/20 transition font-semibold shadow-sm cursor-pointer">
                  <FaCertificate className="text-primary-400" /> Cisco CCST Cybersecurity
                </span>
              </a>
              <a href="https://www.credly.com/badges/ab870097-67dd-403c-bb39-f15ca5489fa5/linked_in_profile" target="_blank" rel="noopener noreferrer">
                <span className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary-400 text-primary-300 bg-dark-800/60 hover:bg-primary-900/20 transition font-semibold shadow-sm cursor-pointer">
                  <FaCertificate className="text-primary-400" /> Azure AI Fundamentals
                </span>
              </a>
              <a href="https://www.credly.com/badges/ab870097-67dd-403c-bb39-f15ca5489fa5/linked_in_profile" target="_blank" rel="noopener noreferrer">
                <span className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary-400 text-primary-300 bg-dark-800/60 hover:bg-primary-900/20 transition font-semibold shadow-sm cursor-pointer">
                  <FaCertificate className="text-primary-400" /> Azure Fundamentals
                </span>
              </a>
              <a href="https://www.credly.com/badges/15798db4-ae50-4052-a283-72470da5c5a1/linked_in_profile" target="_blank" rel="noopener noreferrer">
                <span className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary-400 text-primary-300 bg-dark-800/60 hover:bg-primary-900/20 transition font-semibold shadow-sm cursor-pointer">
                  <FaCertificate className="text-primary-400" /> Soporte TI Google
                </span>
              </a>
              <a href="https://www.credly.com/badges/201f4173-23b4-478c-ba48-01cfc853aa99/linked_in_profile" target="_blank" rel="noopener noreferrer">
                <span className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary-400 text-primary-300 bg-dark-800/60 hover:bg-primary-900/20 transition font-semibold shadow-sm cursor-pointer">
                  <FaCertificate className="text-primary-400" /> PCEP Python Programmer
                </span>
              </a>
              <a href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=121DE47A42A9737BE132AD2119E79B73D19080C43446524A241264CC79255934" target="_blank" rel="noopener noreferrer">
                <span className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary-400 text-primary-300 bg-dark-800/60 hover:bg-primary-900/20 transition font-semibold shadow-sm cursor-pointer">
                  <FaCertificate className="text-primary-400" /> Oracle Cloud Foundations
                </span>
              </a>
              <a href="https://www.credly.com/badges/8dcbb111-8144-4477-8fc0-0d45923c860a/linked_in_profile" target="_blank" rel="noopener noreferrer">
                <span className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary-400 text-primary-300 bg-dark-800/60 hover:bg-primary-900/20 transition font-semibold shadow-sm cursor-pointer">
                  <FaCertificate className="text-primary-400" /> GitHub Foundations
                </span>
              </a>
            </div>
          </div>
          <div className="mb-6 grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-2 font-semibold text-dark-100 mb-1 text-lg">
                <FaTools className="text-secondary-400" /> Habilidades Técnicas
              </div>
              <ul className="list-disc list-inside text-dark-300 text-base ml-7">
                <li>Python (Django, FastAPI)</li>
                <li>JavaScript (Angular, React)</li>
                <li>Bases de datos: SQL (MySQL, SQLite) y NoSQL (Firebase)</li>
                <li>Git y control de versiones</li>
                <li>Desarrollo web backend y móvil (Ionic)</li>
                <li>Despliegue: Vercel, Railway</li>
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-2 font-semibold text-dark-100 mb-1 text-lg">
                <FaUserFriends className="text-secondary-400" /> Habilidades Blandas
              </div>
              <ul className="list-disc list-inside text-dark-300 text-base ml-7">
                <li>Resolución de problemas</li>
                <li>Colaboración y trabajo en equipo</li>
                <li>Adaptabilidad y aprendizaje continuo</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
