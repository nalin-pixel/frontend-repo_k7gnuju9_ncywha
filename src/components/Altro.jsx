import { motion } from 'framer-motion';
import { Stethoscope, Users } from 'lucide-react';
import PageHeader from './PageHeader';

const items = [
  { title: 'Consulenze polispecialistiche', desc: 'Ortopedia, fisiatria, neurologia, nutrizione, psicologia.' },
  { title: 'Corsi e workshop', desc: 'Educazione al movimento, prevenzione e benessere quotidiano.' },
];

export default function Altro() {
  return (
    <div>
      <PageHeader
        title="Altri servizi"
        subtitle="Un ecosistema di competenze per prenderti cura di te a 360°"
      />
      <div className="mx-auto max-w-7xl px-4 md:px-6 pb-16">
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-2xl border border-slate-200 p-6 bg-white hover:border-blue-200 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-xl bg-blue-600 text-white grid place-items-center shadow-sm group-hover:bg-blue-700 transition-colors">
                  {i === 0 ? <Stethoscope className="h-5 w-5" /> : <Users className="h-5 w-5" />}
                </div>
                <div>
                  <h3 className="font-medium text-slate-900 group-hover:text-blue-700 transition-colors">{it.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{it.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
