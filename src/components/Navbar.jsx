import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const whatsappHref = `https://wa.me/393000000000?text=${encodeURIComponent(
    'Ciao StudioMeb, vorrei prenotare una seduta di fisioterapia.'
  )}`;

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-colors border-b ${
    scrolled ? 'bg-white/90 backdrop-blur-md border-blue-100' : 'bg-transparent border-transparent'
  }`;

  const LinkItem = ({ to, label }) => (
    <Link
      to={to}
      className="text-sm md:text-base text-slate-700 hover:text-blue-700 transition-colors"
      onClick={() => setOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <header className={navClasses}>
      <nav className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
            <div className="h-9 w-9 rounded-full bg-blue-600 text-white grid place-items-center font-semibold">SM</div>
            <div className="leading-tight">
              <div className="font-semibold text-slate-900 group-hover:text-blue-700">StudioMeb</div>
              <div className="text-xs text-slate-500">Fisioterapia e Benessere</div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <LinkItem to="/servizi" label="Servizi" />
            <LinkItem to="/chi-siamo" label="Chi siamo" />
            <a
              href="/#contatti"
              className="text-sm md:text-base text-slate-700 hover:text-blue-700 transition-colors"
            >
              Contatti
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 text-white px-4 py-2 text-sm shadow-sm hover:bg-blue-700 transition-colors"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a
              href="/#prenota"
              className="inline-flex items-center gap-2 rounded-full border border-blue-600 text-blue-700 px-4 py-2 text-sm hover:bg-blue-50"
            >
              <Phone className="h-4 w-4" /> Prenota
            </a>
          </div>

          <button
            aria-label="Apri menu"
            className="md:hidden p-2 rounded-md border border-slate-200"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6 flex flex-col gap-4">
            <LinkItem to="/servizi" label="Servizi" />
            <LinkItem to="/chi-siamo" label="Chi siamo" />
            <a
              href="/#contatti"
              className="text-sm md:text-base text-slate-700 hover:text-blue-700 transition-colors"
              onClick={() => setOpen(false)}
            >
              Contatti
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 text-white px-4 py-2 text-sm shadow-sm hover:bg-blue-700 transition-colors w-max"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
