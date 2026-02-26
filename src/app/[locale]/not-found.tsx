import { Link } from "@/i18n/navigation";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="font-display text-6xl text-brand-gold mb-4">404</h1>
      <p className="text-text-muted-light text-lg mb-8">
        Sivua ei löytynyt / Page not found
      </p>
      <Link
        href="/"
        className="bg-brand-gold text-white font-semibold px-6 py-3 rounded-lg hover:bg-brand-gold-dark transition-colors"
      >
        Etusivulle / Back to home
      </Link>
    </div>
  );
}
