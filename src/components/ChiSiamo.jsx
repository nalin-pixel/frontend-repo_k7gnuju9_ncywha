import PageHeader from './PageHeader';

export default function ChiSiamo() {
  return (
    <div>
      <PageHeader
        title="Chi siamo"
        subtitle="Professionalità, empatia e risultati: il cuore di StudioMeb a Castellana Grotte."
      />
      <div className="mx-auto max-w-7xl px-4 md:px-6 pb-16 grid md:grid-cols-2 gap-10 items-start">
        <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-900/5">
          <img
            src="https://images.unsplash.com/photo-1606813907291-76a3608e8a6a?q=80&w=1600&auto=format&fit=crop"
            alt="Il team di StudioMeb"
            className="w-full h-[420px] object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-slate-900 hover:text-blue-700 transition-colors">La nostra missione</h2>
          <p className="mt-3 text-slate-600">
            Accompagnarti in un percorso di cura su misura, chiaro negli obiettivi e misurabile nei risultati.
            Uniamo competenze cliniche aggiornate, tecnologie efficaci e un ascolto attento della persona.
          </p>
          <div className="mt-6 grid gap-4">
            <div className="rounded-xl border p-4 hover:border-blue-200 hover:shadow-md transition-all">
              <p className="font-medium text-slate-900 hover:text-blue-700 transition-colors">Valutazione accurata</p>
              <p className="text-sm text-slate-600">Analisi posturale e test funzionali per definire il miglior percorso terapeutico.</p>
            </div>
            <div className="rounded-xl border p-4 hover:border-blue-200 hover:shadow-md transition-all">
              <p className="font-medium text-slate-900 hover:text-blue-700 transition-colors">Trattamenti personalizzati</p>
              <p className="text-sm text-slate-600">Tecniche manuali e strumentali integrate per accelerare il recupero.</p>
            </div>
            <div className="rounded-xl border p-4 hover:border-blue-200 hover:shadow-md transition-all">
              <p className="font-medium text-slate-900 hover:text-blue-700 transition-colors">Educazione al movimento</p>
              <p className="text-sm text-slate-600">Programmi di esercizi, prevenzione delle recidive e stile di vita attivo.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
