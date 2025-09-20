

import { useState } from 'react';
// Simple mobile detection
const isMobile = typeof window !== 'undefined' && /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
import { Modal, Button } from '../ui';
import { motion as fm } from 'framer-motion';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaUserTie, FaGraduationCap, FaCertificate, FaTools, FaUserFriends, FaReact, FaVuejs, FaNodeJs, FaDatabase, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiPython, SiDjango, SiFastapi, SiTypescript, SiJavascript, SiPostgresql, SiVercel } from 'react-icons/si';
import { motion as m } from 'framer-motion';

const AboutSection = () => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <section
      id="sobre-mi"
      ref={ref}
      className="py-20 px-4 bg-transparent"
    >
      <div className="max-w-3xl mx-auto bg-dark-900/80 rounded-3xl shadow-2xl p-8 border border-dark-700">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2 className="text-4xl font-extrabold text-center mb-2 tracking-tight text-gradient bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
            <m.span whileHover={{ scale: 1.2, rotate: 10 }} transition={{ type: 'spring', stiffness: 300 }} className="inline-block mr-2 mb-1 align-middle">
              <FaUserTie className="text-primary-400" size={36} />
            </m.span>
            Sobre Mí
          </h2>
          <p className="text-dark-300 text-lg text-center mb-8 max-w-2xl mx-auto leading-relaxed">
            Analista Programador con experiencia en desarrollo backend utilizando <span className="font-semibold text-primary-400">Python</span>, <span className="font-semibold text-primary-400">JavaScript</span>, <span className="font-semibold text-primary-400">Node.js</span>, <span className="font-semibold text-primary-400">Django</span> y bases de datos <span className="font-semibold text-primary-400">SQL</span>. Certificado en ciberseguridad por Google y Cisco, con habilidades en resolución de problemas, trabajo en equipo y adaptación a entornos dinámicos. Apasionado por aplicar la tecnología para optimizar procesos y resolver desafíos técnicos.
          </p>
          <div className="flex flex-col md:flex-row md:items-center md:gap-8 mb-8">
            <div className="flex-1 mb-4 md:mb-0 space-y-1">
              <div className="flex items-center gap-2 text-lg text-dark-200 font-semibold">
                <m.span whileHover={{ scale: 1.2, rotate: 10 }} transition={{ type: 'spring', stiffness: 300 }} className="inline-block">
                  <FaUserTie className="text-primary-400" />
                </m.span>
                Carlos Hidalgo de la Fuente
              </div>
              <div className="flex items-center gap-2 text-dark-300 text-base">
                <m.span whileHover={{ scale: 1.2, rotate: -10 }} transition={{ type: 'spring', stiffness: 300 }} className="inline-block">
                  <FaGraduationCap className="text-secondary-400" />
                </m.span>
                Analista Programador
              </div>
              <div className="flex items-center gap-2 text-dark-400 text-sm mt-1">
                <m.span whileHover={{ scale: 1.2, y: -5 }} transition={{ type: 'spring', stiffness: 300 }} className="inline-block">
                  <FaMapMarkerAlt className="text-primary-400" />
                </m.span>
                Valparaíso, Chile
              </div>
              <div className="flex items-center gap-2 text-dark-400 text-sm">
                <m.span whileHover={{ scale: 1.2, rotate: 10 }} transition={{ type: 'spring', stiffness: 300 }} className="inline-block">
                  <FaPhoneAlt className="text-primary-400" />
                </m.span>
                (+56) 993516225
              </div>
              <div className="flex items-center gap-2 text-dark-400 text-sm">
                <m.span whileHover={{ scale: 1.2, rotate: -10 }} transition={{ type: 'spring', stiffness: 300 }} className="inline-block">
                  <FaEnvelope className="text-primary-400" />
                </m.span>
                karlozoh@gmail.com
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
              <Button className="w-full" variant="primary" onClick={() => setCvModalOpen(true)}>
                Ver CV
              </Button>
              <Modal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} size="full" closeOnOverlayClick>
                <fm.div
                  initial={{ scale: 0.7, opacity: 0, rotate: -10 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  exit={{ scale: 0.7, opacity: 0, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  className="relative w-full h-[90vh] max-h-[90vh] flex flex-col items-center justify-center"
                >
                  <Button
                    className="absolute top-2 right-2 z-10"
                    variant="secondary"
                    size="sm"
                    onClick={() => setCvModalOpen(false)}
                  >
                    Cerrar
                  </Button>
                  <div className="w-full h-full flex-1 flex flex-col items-center justify-center">
                    {isMobile ? (
                      <div className="flex flex-col items-center justify-center w-full h-full p-4">
                        <span className="mb-4 text-dark-200 text-center">En dispositivos móviles, el CV no puede visualizarse directamente.<br/>Descárgalo aquí:</span>
                        <a
                          href="/CurriculumProfesionalCarlos.pdf"
                          download
                          className="mt-2 text-primary-400 underline text-center text-lg font-semibold"
                        >
                          Descargar CV
                        </a>
                      </div>
                    ) : (
                      <iframe
                        src="/CurriculumProfesionalCarlos.pdf"
                        title="CV Carlos Hidalgo"
                        className="w-full h-full min-h-[60vh] max-h-[80vh] rounded-xl border-2 border-primary-400 shadow-2xl bg-white"
                        style={{ minHeight: '60vh', maxHeight: '80vh' }}
                        allowFullScreen
                      />
                    )}
                  </div>
                </fm.div>
              </Modal>
            </div>
          </div>
          <div className="mb-6">
            <div className="flex items-center gap-2 font-semibold text-dark-100 mb-1 text-lg">
              <m.span whileHover={{ scale: 1.2, rotate: 10 }} transition={{ type: 'spring', stiffness: 300 }} className="inline-block">
                <FaGraduationCap className="text-secondary-400" />
              </m.span>
              Educación
            </div>
            <div className="ml-7 text-dark-200">2023 - 2025: Duoc UC, Analista Programador Computacional</div>
          </div>
          <div className="mb-8">
            <div className="flex items-center gap-2 font-semibold text-dark-100 mb-2 text-lg">
              <m.span whileHover={{ scale: 1.2, rotate: -10 }} transition={{ type: 'spring', stiffness: 300 }} className="inline-block">
                <FaCertificate className="text-primary-400" />
              </m.span>
              Certificaciones
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
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2">
                <div className="flex items-center gap-2 text-dark-200 text-base">
                  <SiPython className="text-blue-400 text-xl" /> Python
                </div>
                <div className="flex items-center gap-2 text-dark-200 text-base">
                  <SiDjango className="text-green-700 text-xl" /> Django
                </div>
                <div className="flex items-center gap-2 text-dark-200 text-base">
                  <SiFastapi className="text-green-500 text-xl" /> FastAPI
                </div>
                <div className="flex items-center gap-2 text-dark-200 text-base">
                  <SiJavascript className="text-yellow-400 text-xl" /> JavaScript
                </div>
                <div className="flex items-center gap-2 text-dark-200 text-base">
                  <SiTypescript className="text-blue-500 text-xl" /> TypeScript
                </div>
                <div className="flex items-center gap-2 text-dark-200 text-base">
                  <FaReact className="text-cyan-400 text-xl" /> React
                </div>
                <div className="flex items-center gap-2 text-dark-200 text-base">
                  <FaVuejs className="text-green-400 text-xl" /> Vue.js
                </div>
                <div className="flex items-center gap-2 text-dark-200 text-base">
                  <FaNodeJs className="text-green-600 text-xl" /> Node.js
                </div>
                <div className="flex items-center gap-2 text-dark-200 text-base">
                  <SiPostgresql className="text-blue-700 text-xl" /> PostgreSQL
                </div>
                <div className="flex items-center gap-2 text-dark-200 text-base">
                  <FaDatabase className="text-indigo-400 text-xl" /> SQL
                </div>
                <div className="flex items-center gap-2 text-dark-200 text-base">
                  <FaDocker className="text-blue-500 text-xl" /> Docker
                </div>
                <div className="flex items-center gap-2 text-dark-200 text-base">
                  <FaGitAlt className="text-orange-400 text-xl" /> Git
                </div>
                <div className="flex items-center gap-2 text-dark-200 text-base">
                  <SiVercel className="text-black text-xl" /> Vercel
                </div>
              </div>
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
