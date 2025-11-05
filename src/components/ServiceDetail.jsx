import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageHeader from './PageHeader';

const data = {
  fisioterapia: {
    title: 'Fisioterapia',
    items: [
      { slug: 'terapia-manuale', title: 'Terapia manuale' },
      { slug: 'riabilitazione-post-operatoria', title: 'Riabilitazione post-operatoria' },
      { slug: 'fisioterapia-sportiva', title: 'Fisioterapia sportiva' },
      { slug: 'educazione-posturale', title: 'Educazione posturale' },
      { slug: 'tecarterapia-indiba-activ', title: 'Tecarterapia (Indiba Activ)' },
      { slug: 'laserterapia', title: 'Laserterapia' },
      { slug: 'ultrasuonoterapia', title: 'Ultrasuonoterapia' },
      { slug: 'magnetoterapia', title: 'Magnetoterapia' },
      { slug: 'elettroterapia', title: 'Elettroterapia (TENS, Diadinamica, Ionoforesi, Elettrostimolazione)' },
    ],
  },
  benessere: {
    title: 'Terapie estetiche e benessere',
    items: [
      { slug: 'trattamenti-corpo-curativi', title: 'Trattamenti corpo curativi' },
      { slug: 'trattamenti-anticellulite-drenanti', title: 'Trattamenti anticellulite e drenanti' },
      { slug: 'massaggi-estetici-decontratturanti', title: 'Massaggi estetici e decontratturanti' },
      { slug: 'massaggi-olistici-rilassanti', title: 'Massaggi olistici e rilassanti' },
      { slug: 'yoga-terapeutico-posturale', title: 'Yoga terapeutico e posturale' },
    ],
  },
  altro: {
    title: 'Altri servizi',
    items: [
      { slug: 'consulenze-polispecialistiche', title: 'Consulenze polispecialistiche (ortopedia, fisiatria, neurologia, nutrizione, psicologia)' },
      { slug: 'corsi-e-workshop', title: 'Corsi e workshop di movimento e benessere' },
    ],
  },
};

export default function ServiceDetail() {
  const { categoria, slug } = useParams();

  const current = data[categoria];
  const currentItem = useMemo(() => current?.items.find((i) => i.slug === slug), [current, slug]);

  const title = currentItem?.title || current?.title || 'Servizio';
  const subtitle = currentItem
    ? `${current.title} – ${currentItem.title}`
    : 'Sottopagine dedicate con dettagli, benefici e indicazioni.';

  return (
    <div>
      <PageHeader title={title} subtitle={subtitle} />
      <div className="mx-auto max-w-7xl px-4 md:px-6 pb-16">
        {currentItem ? (
          <article className="prose prose-slate max-w-none">
            <p>
              Presso StudioMeb applichiamo protocolli personalizzati basati sulla tua storia clinica e sugli obiettivi
              concordati. Valutazione iniziale, definizione del piano di trattamento, monitoraggio dei progressi e
              strategie di prevenzione: ogni fase è curata nei dettagli.
            </p>
            <ul>
              <li>Durata seduta: 45–60 minuti</li>
              <li>Valutazione funzionale iniziale</li>
              <li>Educazione terapeutica ed esercizi domiciliari</li>
            </ul>
            <p>
              Per informazioni o prenotazioni, contattaci: risponderemo con la prima disponibilità.
            </p>
          </article>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {current?.items.map((i) => (
              <Link
                key={i.slug}
                to={`/servizi/${categoria}/${i.slug}`}
                className="group rounded-2xl border border-slate-200 p-6 bg-white hover:border-blue-200 hover:shadow-lg transition-all block"
              >
                <h3 className="font-medium text-slate-900 group-hover:text-blue-700 transition-colors">{i.title}</h3>
                <p className="mt-1 text-sm text-slate-600">Approfondisci, benefici, indicazioni, durata e costi.</p>
              </Link>
            ))}
          </div>
        )}
        <div className="mt-10">
          <Link to="/servizi" className="text-blue-700 hover:text-blue-800">← Torna ai servizi</Link>
        </div>
      </div>
    </div>
  );
}
