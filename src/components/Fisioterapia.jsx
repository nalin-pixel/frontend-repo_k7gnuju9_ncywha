import { motion } from 'framer-motion';
import { Activity, ArrowRight } from 'lucide-react';
import PageHeader from './PageHeader';

const treatments = [
  'Terapia manuale',
  'Riabilitazione post-operatoria',
  'Fisioterapia sportiva',
  'Educazione posturale',
  'Tecarterapia (Indiba Activ)',
  'Laserterapia',
  'Ultrasuonoterapia',
  'Magnetoterapia',
  'Elettroterapia (TENS, Diadinamica, Ionoforesi, Elettrostimolazione)'
];

export default function Fisioterapia() {
  return (
    <div>
      <PageHeader
        title="Fisioterapia"
        subtitle="Percorsi personalizzati per il recupero funzionale, la prevenzione e la performance."
      />
      <div className="mx-auto max-w-7xl px-4 md:px-6 pb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {treatments.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
              className="group rounded-2xl border border-slate-200 p-6 bg-white hover:border-blue-200 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-xl bg-blue-600 text-white grid place-items-center shadow-sm group-hover:bg-blue-700 transition-colors">
                  <Activity className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-slate-900 group-hover:text-blue-700 transition-colors">{item}</h3>
                  <p className="mt-1 text-sm text-slate-600">Seduta da 45–60 min • Valutazione iniziale inclusa</p>
                </div>
              </div>
              <button className="mt-4 inline-flex items-center gap-2 text-blue-700 font-medium group/btn">
                Prenota <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
