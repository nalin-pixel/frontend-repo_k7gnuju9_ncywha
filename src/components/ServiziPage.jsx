import { Activity, Heart, Sparkles, ArrowRight } from 'lucide-react';
import PageHeader from './PageHeader';
import { Link } from 'react-router-dom';

const categories = [
  {
    icon: Activity,
    title: 'Fisioterapia',
    desc: 'Valutazioni e trattamenti per dolore, recupero funzionale e performance sportiva.',
    href: '/servizi/fisioterapia'
  },
  {
    icon: Heart,
    title: 'Estetica e Benessere',
    desc: 'Cura del corpo, massaggi e pratiche per il tuo equilibrio psico-fisico.',
    href: '/servizi/benessere'
  },
  {
    icon: Sparkles,
    title: 'Altro',
    desc: 'Consulenze polispecialistiche e corsi dedicati al movimento e alla salute.',
    href: '/servizi/altro'
  }
];

export default function ServiziPage() {
  return (
    <div>
      <PageHeader
        title="Servizi"
        subtitle="Pagina principale dei servizi, suddivisa in tre macro categorie con sottopagine dedicate."
      />
      <div className="mx-auto max-w-7xl px-4 md:px-6 pb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              to={cat.href}
              className="group rounded-2xl border border-slate-200 p-6 bg-white hover:border-blue-200 hover:shadow-xl transition-all block"
            >
              <div className="h-11 w-11 rounded-xl bg-blue-600 text-white grid place-items-center shadow-sm group-hover:bg-blue-700 transition-colors">
                <cat.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">{cat.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{cat.desc}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-blue-700 font-medium group-hover:gap-3 transition-all">
                Esplora <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
