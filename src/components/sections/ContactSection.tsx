import { useForm, ValidationError } from '@formspree/react';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/ui/Button';
import { Mail, Linkedin } from 'lucide-react';


const ContactSection = () => {
  // Reemplaza "xrbanjya" por tu propio ID de Formspree si lo cambias
  const [state, handleSubmit] = useForm("xrbanjya");

  return (
    <section id="contacto" className="py-20 px-4 bg-transparent">
      <div className="max-w-xl mx-auto bg-dark-900/80 rounded-3xl shadow-2xl p-8 border border-dark-700">
        <h2 className="text-4xl font-extrabold mb-6 tracking-tight text-gradient bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent text-center">
          Contacto
        </h2>
        {state.succeeded ? (
          <div className="text-green-400 text-center mt-2 text-lg font-semibold">¡Mensaje enviado correctamente!</div>
        ) : (
          <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate aria-label="Formulario de contacto">
            <Input
              label="Nombre"
              name="nombre"
              autoComplete="name"
              required
            />
            <Input
              label="Email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            <Textarea
              label="Mensaje"
              name="mensaje"
              rows={5}
              required
            />
            <ValidationError prefix="Mensaje" field="mensaje" errors={state.errors} />
            <Button type="submit" variant="primary" size="lg" loading={state.submitting} disabled={state.submitting} aria-label="Enviar mensaje">
              {state.submitting ? 'Enviando...' : 'Enviar'}
            </Button>
          </form>
        )}
        <div className="flex flex-col items-center gap-4 mt-8">
          <a
            href="mailto:karlozoh@gmail.com"
            className="flex items-center gap-3 text-lg text-dark-100 hover:text-primary-400 transition font-semibold"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Enviar correo a karlozoh@gmail.com"
          >
            <Mail className="w-6 h-6 text-primary-400" /> karlozoh@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/carlos-hidalgo-de-la-fuente-a02248246/"
            className="flex items-center gap-3 text-lg text-dark-100 hover:text-primary-400 transition font-semibold"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ir al perfil de LinkedIn de Carlos Hidalgo"
          >
            <Linkedin className="w-6 h-6 text-primary-400" /> LinkedIn
          </a>
          <a
            href="https://wa.me/56993516225"
            className="flex items-center gap-3 text-lg text-green-500 hover:text-green-400 transition font-semibold"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-6 h-6"><path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.393L4 29l7.824-2.05C13.416 27.632 14.692 28 16 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.13 0-2.238-.188-3.287-.558l-.235-.08-4.646 1.217 1.24-4.527-.153-.236C7.188 18.238 7 17.13 7 16c0-4.963 4.037-9 9-9s9 4.037 9 9-4.037 9-9 9zm5.07-6.29c-.277-.139-1.637-.808-1.89-.899-.253-.093-.437-.139-.62.14-.184.277-.713.899-.874 1.085-.16.184-.32.208-.597.07-.277-.139-1.17-.431-2.23-1.375-.824-.735-1.38-1.64-1.542-1.917-.16-.277-.017-.427.122-.565.126-.125.277-.32.416-.48.14-.16.185-.277.277-.462.093-.184.047-.347-.023-.486-.07-.139-.62-1.497-.85-2.05-.224-.539-.453-.466-.62-.475l-.527-.01c-.17 0-.446.064-.68.3-.233.233-.89.87-.89 2.122 0 1.253.91 2.463 1.037 2.635.126.17 1.79 2.73 4.34 3.72.607.262 1.08.418 1.45.535.609.194 1.163.167 1.602.101.489-.073 1.637-.668 1.87-1.312.232-.645.232-1.197.162-1.312-.07-.115-.253-.184-.53-.323z"/></svg>
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;