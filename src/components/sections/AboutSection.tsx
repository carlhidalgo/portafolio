

import { useState } from 'react';
import { Modal, Button } from '../ui';
import { motion as fm } from 'framer-motion';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaUserTie, FaGraduationCap, FaCertificate, FaTools, FaUserFriends, FaReact, FaNodeJs, FaDatabase, FaDocker, FaGitAlt, FaJava, FaAngular, FaAndroid } from 'react-icons/fa';
import { SiPython, SiDjango, SiFastapi, SiTypescript, SiJavascript, SiVercel, SiKotlin, SiIonic, SiMysql, SiSqlite, SiFirebase, SiRailway, SiRedhat } from 'react-icons/si';
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
            Desarrollador de software con formación en análisis y programación computacional, especializado en <span className="font-semibold text-primary-400">Python</span>, <span className="font-semibold text-primary-400">JavaScript</span>, <span className="font-semibold text-primary-400">Kotlin</span> y <span className="font-semibold text-primary-400">Java</span>. Experiencia en desarrollo full-stack backend y móvil con frameworks como <span className="font-semibold text-primary-400">Django</span>, <span className="font-semibold text-primary-400">FastAPI</span>, <span className="font-semibold text-primary-400">Angular</span> y <span className="font-semibold text-primary-400">React</span>. Certificado por Google, Microsoft Azure, Cisco y Red Hat en TI y ciberseguridad. Apasionado por construir soluciones escalables, colaborar en equipo y aprender de forma continua.
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
                  <div className="w-full h-full flex-1 flex flex-col overflow-y-auto px-4 md:px-8 py-6 text-dark-100 bg-dark-950/95 rounded-2xl max-w-4xl mx-auto scrollbar-thin mt-12 relative">
                    <Button
                      className="absolute top-4 right-4 z-10"
                      variant="secondary"
                      size="sm"
                      onClick={() => setCvModalOpen(false)}
                    >
                      Cerrar
                    </Button>
                    
                    {/* Encabezado del CV */}
                    <div className="text-center border-b border-dark-800 pb-6 mb-6 mt-8">
                      <h3 className="text-3xl font-bold text-gradient mb-2">Carlos Andrés Hidalgo de la Fuente</h3>
                      <p className="text-xl text-primary-400 font-semibold mb-4">Desarrollador de Software</p>
                      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-dark-300">
                        <span>📍 Valparaíso, Chile</span>
                        <span>✉️ karlozoh@gmail.com</span>
                        <span>📞 (+56) 993516225</span>
                        <a href="https://linkedin.com/in/carlos-hidalgo-de-la-fuente-a02248246" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 underline">LinkedIn</a>
                        <a href="https://github.com/carlhidalgo" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 underline">GitHub</a>
                      </div>
                    </div>

                    {/* Botón de Descarga del PDF */}
                    <div className="flex justify-center mb-6">
                      <Button
                        href="/CurriculumProfesionalCarlos.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        variant="primary"
                        size="md"
                      >
                        Descargar PDF Completo
                      </Button>
                    </div>

                    {/* Perfil Profesional */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-primary-400 border-b border-dark-800 pb-1 mb-3">Perfil Profesional</h4>
                      <p className="text-dark-200 text-sm leading-relaxed">
                        Desarrollador de software con formación en análisis y programación computacional, especializado en Python, JavaScript, Kotlin y Java. Experiencia en desarrollo full-stack backend y móvil con frameworks como Django, FastAPI, Angular y React. Certificado por Google, Microsoft Azure, Cisco y Red Hat en TI y ciberseguridad. Apasionado por construir soluciones scalables, colaborar en equipo y aprender de forma continua.
                      </p>
                    </div>

                    {/* Experiencia Laboral */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-primary-400 border-b border-dark-800 pb-1 mb-3">Experiencia Laboral</h4>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-start flex-wrap gap-1">
                            <h5 className="font-semibold text-dark-50 text-sm">Desarrollador Full Stack — Práctica Profesional</h5>
                            <span className="text-xs text-dark-400">Sep 2025 – Dic 2025</span>
                          </div>
                          <p className="text-xs text-primary-400 font-medium mb-2">Aurafy · Chile</p>
                          <ul className="list-disc list-inside text-xs text-dark-300 space-y-1 ml-2">
                            <li>Desarrollo de aplicaciones web full-stack como parte de la práctica profesional integradora.</li>
                            <li>Implementación de funcionalidades backend con Python y APIs REST en un equipo de desarrollo real.</li>
                            <li>Participación en ciclos ágiles (Scrum), revisiones de código (code reviews) y despliegue en plataformas cloud.</li>
                          </ul>
                        </div>
                        <div>
                          <div className="flex justify-between items-start flex-wrap gap-1">
                            <h5 className="font-semibold text-dark-50 text-sm">Desarrollador Web</h5>
                            <span className="text-xs text-dark-400">Ene 2024 – Dic 2025</span>
                          </div>
                          <p className="text-xs text-primary-400 font-medium mb-2">Proyectos Freelance / Independientes · Chile</p>
                          <ul className="list-disc list-inside text-xs text-dark-300 space-y-1 ml-2">
                            <li>Desarrollo y mantenimiento de aplicaciones web con Python (Django/FastAPI) y JavaScript (Angular/React).</li>
                            <li>Diseño e implementación de bases de datos MySQL y Firebase para proyectos de distinta escala.</li>
                            <li>Despliegue y gestión de aplicaciones en Vercel y Railway.</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Educación */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-primary-400 border-b border-dark-800 pb-1 mb-3">Educación</h4>
                      <div className="space-y-2 text-sm text-dark-200">
                        <div className="flex justify-between flex-wrap gap-1">
                          <span><strong>Duoc UC</strong>, Ingeniería en Informática (Mención IA)</span>
                          <span className="text-xs text-dark-400">2026 - 2028 (En curso)</span>
                        </div>
                        <div className="flex justify-between flex-wrap gap-1">
                          <span><strong>Universidad Andrés Bello</strong>, Bootcamp Desarrollo Móvil Android</span>
                          <span className="text-xs text-dark-400">2025</span>
                        </div>
                        <div className="flex justify-between flex-wrap gap-1">
                          <span><strong>Duoc UC</strong>, Analista Programador Computacional</span>
                          <span className="text-xs text-dark-400">2023 - 2025</span>
                        </div>
                      </div>
                    </div>

                    {/* Certificaciones */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-primary-400 border-b border-dark-800 pb-1 mb-3">Certificaciones Destacadas</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1.5 text-xs text-dark-200 list-disc list-inside">
                        <li>Red Hat Certified System Admin I (RH124)</li>
                        <li>Android Trainee (Sence / UNAB)</li>
                        <li>Google Cybersecurity Professional</li>
                        <li>Cisco CCST Cybersecurity</li>
                        <li>Microsoft Azure AI Fundamentals (AI-900)</li>
                        <li>Microsoft Azure Fundamentals (AZ-900)</li>
                        <li>Google IT Support Professional</li>
                        <li>Python Institute PCEP</li>
                        <li>Oracle Cloud Infrastructure Foundations</li>
                        <li>GitHub Foundations</li>
                        <li>Big Data Professional Certificate</li>
                      </ul>
                    </div>
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
            <div className="ml-7 text-dark-200 space-y-1">
              <div>2026 - 2028: Duoc UC, Ingeniería en Informática (Mención Inteligencia Artificial) - En curso</div>
              <div>2025: Universidad Andrés Bello, Bootcamp Desarrollo de Aplicaciones Móviles Android</div>
              <div>2023 - 2025: Duoc UC, Analista Programador Computacional</div>
            </div>
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
              <a href="https://www.credly.com/badges/74b99dff-e849-45d1-bc90-3e24ee95aed5/linked_in_profile" target="_blank" rel="noopener noreferrer">
                <span className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary-400 text-primary-300 bg-dark-800/60 hover:bg-primary-900/20 transition font-semibold shadow-sm cursor-pointer">
                  <FaCertificate className="text-primary-400" /> Red Hat Certified System Admin I
                </span>
              </a>
              <a href="https://www.acreditta.com/credential/c9397dfd-65fa-4a93-bc28-3b1816638a70?resource_type=badge&resource=c9397dfd-65fa-4a93-bc28-3b1816638a70" target="_blank" rel="noopener noreferrer">
                <span className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary-400 text-primary-300 bg-dark-800/60 hover:bg-primary-900/20 transition font-semibold shadow-sm cursor-pointer">
                  <FaCertificate className="text-primary-400" /> Móviles Android Trainee (Sence)
                </span>
              </a>
              <a href="https://verify.certiprof.com/certificado/TLZZZSHVLHZ-XXMTXQMSX-RDHHHFRJRL" target="_blank" rel="noopener noreferrer">
                <span className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary-400 text-primary-300 bg-dark-800/60 hover:bg-primary-900/20 transition font-semibold shadow-sm cursor-pointer">
                  <FaCertificate className="text-primary-400" /> Big Data Professional (BDPC)
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
                  <FaNodeJs className="text-green-600 text-xl" /> Node.js
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
                <div className="flex items-center gap-2 text-dark-200 text-base">
                  <SiKotlin className="text-purple-500 text-xl" /> Kotlin
                </div>
                <div className="flex items-center gap-2 text-dark-200 text-base">
                  <FaJava className="text-red-500 text-xl" /> Java
                </div>
                <div className="flex items-center gap-2 text-dark-200 text-base">
                  <FaAngular className="text-red-600 text-xl" /> Angular
                </div>
                <div className="flex items-center gap-2 text-dark-200 text-base">
                  <SiIonic className="text-blue-400 text-xl" /> Ionic
                </div>
                <div className="flex items-center gap-2 text-dark-200 text-base">
                  <FaAndroid className="text-green-500 text-xl" /> Android
                </div>
                <div className="flex items-center gap-2 text-dark-200 text-base">
                  <SiMysql className="text-blue-600 text-xl" /> MySQL
                </div>
                <div className="flex items-center gap-2 text-dark-200 text-base">
                  <SiSqlite className="text-blue-400 text-xl" /> SQLite
                </div>
                <div className="flex items-center gap-2 text-dark-200 text-base">
                  <SiFirebase className="text-yellow-500 text-xl" /> Firebase
                </div>
                <div className="flex items-center gap-2 text-dark-200 text-base">
                  <SiRedhat className="text-red-600 text-xl" /> Linux (RHEL)
                </div>
                <div className="flex items-center gap-2 text-dark-200 text-base">
                  <SiRailway className="text-white text-xl" /> Railway
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
