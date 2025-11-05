import { Facebook, Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-20 bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-14 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-blue-600 text-white grid place-items-center font-semibold">SM</div>
            <div className="font-semibold">StudioMeb</div>
          </div>
          <p className="mt-3 text-sm text-slate-400 max-w-sm">
            Centro di fisioterapia e benessere a Castellana Grotte. Professionalità, empatia e risultati concreti.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contatti</h4>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +39 300 000 0000</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@studiomeb.it</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Link utili</h4>
          <ul className="space-y-2 text-sm text-slate-300">
            <li><a href="#servizi" className="hover:text-white">Servizi</a></li>
            <li><a href="#chisiamo" className="hover:text-white">Chi siamo</a></li>
            <li><a href="#contatti" className="hover:text-white">Contatti</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Seguici</h4>
          <div className="flex items-center gap-3">
            <a href="#" className="p-2 rounded-md bg-white/5 hover:bg-white/10"><Instagram className="h-4 w-4" /></a>
            <a href="#" className="p-2 rounded-md bg-white/5 hover:bg-white/10"><Facebook className="h-4 w-4" /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-6 text-xs text-slate-400 flex flex-wrap items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} StudioMeb – Tutti i diritti riservati</p>
          <p>Sito sviluppato con Flames.Blue</p>
        </div>
      </div>
    </footer>
  );
}
