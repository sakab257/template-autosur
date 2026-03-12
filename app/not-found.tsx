import Link from "next/link";
import { Home, CalendarCheck } from "lucide-react";

export default function NotFound() {
  return (
    <main className="w-full min-h-[70vh] flex items-center justify-center bg-slate-50 px-6">
      <div className="text-center max-w-lg">
        <h1 className="text-8xl font-extrabold text-blue-600 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-slate-800 mb-4">
          Page introuvable
        </h2>
        <p className="text-slate-600 mb-8">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 bg-blue-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Home size={20} />
            Retour à l&apos;accueil
          </Link>
          <Link
            href="/rendez-vous"
            className="flex items-center gap-2 bg-red-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
          >
            <CalendarCheck size={20} />
            Prendre rendez-vous
          </Link>
        </div>
      </div>
    </main>
  );
}
