import { useState } from 'react';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/ui/Button';
import { Mail, Linkedin } from 'lucide-react';

const initialState = { nombre: '', email: '', mensaje: '' };

const ContactSection = () => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState<{ [k: string]: string }>({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: { [k: string]: string } = {};
  if (!form['nombre'].trim()) newErrors['nombre'] = 'Nombre requerido';
  if (!form['email'].trim()) newErrors['email'] = 'Email requerido';
  else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form['email'])) newErrors['email'] = 'Email inválido';
  if (!form['mensaje'].trim()) newErrors['mensaje'] = 'Mensaje requerido';
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }
    setLoading(true);
    // Simulación de envío (puedes conectar a un backend real)
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm(initialState);
    }, 1200);
  };

  return (
  <section id="contacto" className="py-20 px-4 bg-transparent">
      <div className="max-w-xl mx-auto bg-dark-900/80 rounded-3xl shadow-2xl p-8 border border-dark-700">
        <h2 className="text-4xl font-extrabold mb-6 tracking-tight text-gradient bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent text-center">
          Contacto
        </h2>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate aria-label="Formulario de contacto">
          <Input
            label="Nombre"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            error={errors['nombre']}
            autoComplete="name"
            required
          />
          <Input
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            error={errors['email']}
            autoComplete="email"
            required
          />
          <Textarea
            label="Mensaje"
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
            error={errors['mensaje']}
            rows={5}
            required
          />
          <Button type="submit" variant="primary" size="lg" loading={loading} disabled={loading} aria-label="Enviar mensaje">
            {loading ? 'Enviando...' : 'Enviar'}
          </Button>
          {sent && <div className="text-green-400 text-center mt-2">¡Mensaje enviado correctamente!</div>}
        </form>
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
        </div>
      </div>
    </section>
  );
};

export default ContactSection;