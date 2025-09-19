import { Mail, Linkedin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contacto" className="py-20 px-4 bg-dark-800/30">
      <div className="max-w-xl mx-auto bg-dark-900/80 rounded-3xl shadow-2xl p-8 border border-dark-700 text-center">
        <h2 className="text-4xl font-extrabold mb-6 tracking-tight text-gradient bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
          Contacto
        </h2>
        <div className="flex flex-col items-center gap-6">
          <a
            href="mailto:karlozoh@gmail.com"
            className="flex items-center gap-3 text-lg text-dark-100 hover:text-primary-400 transition font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail className="w-6 h-6 text-primary-400" /> karlozoh@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/carlos-hidalgo-de-la-fuente-a02248246/"
            className="flex items-center gap-3 text-lg text-dark-100 hover:text-primary-400 transition font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-6 h-6 text-primary-400" /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;