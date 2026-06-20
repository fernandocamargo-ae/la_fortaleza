import { useState } from 'react';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Reveal from '../components/ui/Reveal';
import { sendContactForm } from '../services/contactService';
import { CONTACT_INFO, SOCIAL_LINKS } from '../utils/constants';

const SUBJECTS = [
  'Cotización de servicio',
  'Eliminación de postratamiento (EGR/DPF/DEF)',
  'Chiptuning / Reprogramación',
  'Certificado de limitador (PROVIAL)',
  'Auxilio en ruta',
  'Otro',
];

const EMPTY = { name: '', company: '', email: '', subject: SUBJECTS[0], message: '' };

const fieldClass =
  'w-full rounded-md border border-white/15 bg-bg-dark px-4 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-text-muted/60 focus:border-brand-orange';
const labelClass = 'mb-1.5 block text-xs font-semibold uppercase tracking-wide text-text-muted';

export default function Contacto() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    try {
      await sendContactForm(form);
      setStatus('success');
      setForm(EMPTY);
    } catch {
      setStatus('error');
    }
  }

  return (
    <Section className="bg-bg-darker">
      <Container>
        <Reveal as="p" className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
          Contacto
        </Reveal>
        <Reveal as="h1" delay={100} className="text-3xl font-extrabold uppercase leading-tight sm:text-5xl">
          Hablemos de sus unidades
        </Reveal>
        <Reveal as="p" delay={200} className="mt-4 max-w-2xl text-text-muted">
          Cuéntenos qué necesita y le responderemos con un diagnóstico o cotización a la medida.
          También puede contactarnos por los medios directos.
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          {/* Formulario */}
          <Reveal>
            <form onSubmit={handleSubmit} className="space-y-5 rounded-xl border border-white/10 bg-surface p-6 sm:p-8" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>Nombre</label>
                  <input id="name" type="text" required value={form.name} onChange={update('name')} className={fieldClass} placeholder="Su nombre" />
                </div>
                <div>
                  <label htmlFor="company" className={labelClass}>
                    Empresa / Flotilla <span className="normal-case text-text-muted/60">(opcional)</span>
                  </label>
                  <input id="company" type="text" value={form.company} onChange={update('company')} className={fieldClass} placeholder="Nombre de la empresa" />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className={labelClass}>Correo electrónico</label>
                  <input id="email" type="email" required value={form.email} onChange={update('email')} className={fieldClass} placeholder="correo@ejemplo.com" />
                </div>
                <div>
                  <label htmlFor="subject" className={labelClass}>Asunto</label>
                  <select id="subject" value={form.subject} onChange={update('subject')} className={fieldClass}>
                    {SUBJECTS.map((s) => (
                      <option key={s} value={s} className="bg-bg-dark">{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>Mensaje</label>
                <textarea id="message" required rows={5} value={form.message} onChange={update('message')} className={`${fieldClass} resize-y`} placeholder="Describa su requerimiento, modelo de motor, etc." />
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Button type="submit" disabled={status === 'sending'} className={status === 'sending' ? 'opacity-70' : ''}>
                  {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
                </Button>
                {status === 'success' && (
                  <p className="text-sm font-semibold text-green-400">¡Mensaje enviado! Le responderemos pronto.</p>
                )}
                {status === 'error' && (
                  <p className="text-sm font-semibold text-red-400">Ocurrió un error. Intente de nuevo o use los medios directos.</p>
                )}
              </div>
            </form>
          </Reveal>

          {/* Datos directos */}
          <Reveal delay={120}>
            <div className="h-full rounded-xl border border-white/10 bg-surface p-6 sm:p-8">
              <h2 className="text-lg font-bold uppercase">Medios directos</h2>

              <div className="mt-5 space-y-5 text-sm">
                <div>
                  <p className={labelClass}>Ubicación</p>
                  <p className="text-text-muted">{CONTACT_INFO.address}</p>
                </div>
                <div>
                  <p className={labelClass}>Teléfonos</p>
                  <div className="space-y-1">
                    {CONTACT_INFO.phones.map((phone) => (
                      <a key={phone} href={`tel:${phone.replace(/\s+/g, '')}`} className="block text-text-primary transition-colors hover:text-brand-orange">
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
                <div>
                  <p className={labelClass}>Correo</p>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="break-all text-text-primary transition-colors hover:text-brand-orange">
                    {CONTACT_INFO.email}
                  </a>
                </div>
                {SOCIAL_LINKS.length > 0 && (
                  <div>
                    <p className={labelClass}>Redes</p>
                    {SOCIAL_LINKS.map((social) => (
                      <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="text-text-primary transition-colors hover:text-brand-orange">
                        {social.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
