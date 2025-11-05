import { Activity, Heart, Sparkles, ArrowRight, MapPin, Clock } from 'lucide-react';

const categories = [
  {
    icon: Activity,
    title: 'Fisioterapia',
    desc:
      'Terapie manuali, riabilitazione post-operatoria e sportiva, educazione posturale e tecnologie avanzate come Tecar e Laser.',
    items: [
      'Terapia manuale',
      'Riabilitazione post-operatoria',
      'Fisioterapia sportiva',
      'Educazione posturale',
      'Tecarterapia (Indiba Activ)',
      'Laserterapia',
      'Ultrasuonoterapia',
      'Magnetoterapia',
      'Elettroterapia (TENS, Diadinamica, Ionoforesi, Elettrostimolazione)'
    ],
    href: '#servizi-fisioterapia'
  },
  {
    icon: Heart,
    title: 'Estetica e Benessere',
    desc:
      'Trattamenti corpo curativi e drenanti, massaggi decontratturanti e rilassanti, yoga terapeutico e posturale.',
    items: [
      'Trattamenti corpo curativi',
      'Trattamenti anticellulite e drenanti',
      'Massaggi estetici e decontratturanti',
      'Massaggi olistici e rilassanti',
      'Yoga terapeutico e posturale'
    ],
    href: '#servizi-benessere'
  },
  {
    icon: Sparkles,
    title: 'Altro',
    desc:
      'Consulenze polispecialistiche e corsi di movimento per la tua salute a 360°.',
    items: [
      'Consulenze: ortopedia, fisiatria, neurologia, nutrizione, psicologia',
      'Corsi e workshop di movimento e benessere'
    ],
    href: '#servizi-altro'
  }
];

export default function Services() {
  return (
    <section id="servizi" className="relative py-20 bg-white">
      <div className="absolute inset-x-0 -top-10 h-40 bg-gradient-to-b from-blue-50 to-transparent pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Trattamenti personalizzati</h2>
          <p className="mt-3 text-slate-600">
            Un percorso costruito su di te: valutazione accurata, obiettivi chiari, risultati misurabili.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.title} className="group rounded-2xl border border-slate-200 p-6 hover:shadow-xl transition-all bg-white">
              <div className="h-11 w-11 rounded-xl bg-blue-600 text-white grid place-items-center shadow-sm">
                <cat.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{cat.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{cat.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600 list-disc list-inside">
                {cat.items.slice(0, 4).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a
                href={cat.href}
                className="mt-5 inline-flex items-center gap-2 text-blue-700 font-medium hover:gap-3 transition-all"
              >
                Scopri di più <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        <div id="prenota" className="mt-16 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border p-6 bg-blue-50/50 border-blue-100">
            <h3 className="text-xl font-semibold text-slate-900">Dove siamo</h3>
            <p className="mt-2 text-slate-600 text-sm">Castellana Grotte – facilmente raggiungibile e con parcheggio.</p>
            <div className="mt-4 flex items-center gap-3 text-slate-700">
              <MapPin className="h-5 w-5 text-blue-700" /> Via Esempio 123, Castellana Grotte (BA)
            </div>
            <div className="mt-2 flex items-center gap-3 text-slate-700">
              <Clock className="h-5 w-5 text-blue-700" /> Lun–Ven 9:00–19:00 · Sab 9:00–13:00
            </div>
            <div className="mt-6">
              <a
                href="https://maps.google.com?q=Castellana%20Grotte%20StudioMeb"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 text-white px-5 py-3 shadow-sm hover:bg-blue-700"
              >
                Apri mappa
              </a>
            </div>
          </div>

          <div id="contatti" className="rounded-2xl border p-6 bg-white border-slate-200">
            <h3 className="text-xl font-semibold text-slate-900">Prenota il tuo appuntamento</h3>
            <p className="mt-2 text-slate-600 text-sm">
              Scrivici su WhatsApp o inviaci una richiesta: ti risponderemo con la prima disponibilità.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-4 grid gap-3">
              <input className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Nome e cognome" />
              <input type="email" className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Email" />
              <textarea className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 min-h-[100px]" placeholder="Raccontaci di cosa hai bisogno" />
              <div className="flex flex-wrap gap-3">
                <button className="inline-flex items-center gap-2 rounded-full bg-blue-600 text-white px-5 py-3 shadow-sm hover:bg-blue-700" type="submit">
                  Invia richiesta
                </button>
                <a
                  href={`https://wa.me/393000000000?text=${encodeURIComponent('Ciao StudioMeb, vorrei prenotare una seduta di fisioterapia.')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-blue-600 text-blue-700 px-5 py-3 hover:bg-blue-50"
                >
                  Scrivici su WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
