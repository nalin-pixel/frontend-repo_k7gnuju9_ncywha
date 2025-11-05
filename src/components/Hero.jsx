import Spline from '@splinetool/react-spline';
import { Calendar, MessageCircle } from 'lucide-react';

export default function Hero() {
  const whatsappHref = `https://wa.me/393000000000?text=${encodeURIComponent(
    'Ciao StudioMeb, vorrei prenotare una seduta di fisioterapia.'
  )}`;

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-white to-blue-50">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/6f1qUuPVPvv4g7y7/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 py-24 grid md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-3 py-1 w-max text-xs font-medium border border-blue-100">
            StudioMeb – Fisioterapia, Benessere e Movimento
          </div>
          <h1 className="mt-4 text-4xl md:text-5xl font-semibold text-slate-900 leading-tight">
            Ritrova equilibrio, forza e serenità con un percorso su misura
          </h1>
          <p className="mt-4 text-slate-600 max-w-xl">
            A Castellana Grotte, un centro accogliente dove competenza ed empatia ti guidano verso il benessere. Dalla
            riabilitazione alla prevenzione, con trattamenti personalizzati e tecnologie avanzate.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#prenota"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 text-white px-5 py-3 shadow-sm hover:bg-blue-700 transition-colors"
            >
              <Calendar className="h-5 w-5" /> Prenota ora la tua seduta
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-blue-600 text-blue-700 px-5 py-3 hover:bg-blue-50"
            >
              <MessageCircle className="h-5 w-5" /> Richiedi una consulenza gratuita
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-900/5">
            <img
              src="https://images.unsplash.com/photo-1604882357860-e043ac04795c?q=80&w=1600&auto=format&fit=crop"
              alt="Trattamento fisioterapico presso StudioMeb"
              className="w-full h-[380px] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-6 bg-white/90 backdrop-blur rounded-xl p-4 shadow-lg border border-slate-100">
            <p className="text-sm text-slate-700">
              “Team attento e professionale. Mi sono sentita ascoltata fin dal primo incontro.”
            </p>
            <p className="mt-1 text-xs text-slate-500">– Maria, riabilitazione post-operatoria</p>
          </div>
        </div>
      </div>
    </section>
  );
}
