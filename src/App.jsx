import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans antialiased text-slate-800">
      <Navbar />
      <main>
        <Hero />

        <section id="chisiamo" className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-900/5">
              <img
                src="https://images.unsplash.com/photo-1606813907291-76a3608e8a6a?q=80&w=1600&auto=format&fit=crop"
                alt="Il team di StudioMeb"
                className="w-full h-[360px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Chi siamo</h2>
              <p className="mt-4 text-slate-600">
                Siamo un team di fisioterapisti e professionisti della salute. Uniamo competenza clinica, ascolto e
                tecnologie efficaci per accompagnarti verso il recupero e la prevenzione. Ogni percorso è costruito su
                misura, con obiettivi chiari e monitorati nel tempo.
              </p>
              <ul className="mt-6 grid gap-2 text-slate-700">
                <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-blue-600" /> Valutazione attenta e personalizzata</li>
                <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-blue-600" /> Trattamenti manuali e strumentali</li>
                <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-blue-600" /> Educazione al movimento e prevenzione</li>
              </ul>
              <a href="#servizi" className="mt-6 inline-block rounded-full bg-blue-600 text-white px-5 py-3 hover:bg-blue-700">Scopri i nostri trattamenti</a>
            </div>
          </div>
        </section>

        <Services />
      </main>
      <Footer />

      {/* Pulsante flottante WhatsApp */}
      <a
        href={`https://wa.me/393000000000?text=${encodeURIComponent('Ciao StudioMeb, vorrei prenotare una seduta di fisioterapia.')}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-green-500 text-white px-5 py-3 shadow-lg hover:bg-green-600"
        aria-label="Apri chat WhatsApp"
      >
        WhatsApp
      </a>
    </div>
  );
}
