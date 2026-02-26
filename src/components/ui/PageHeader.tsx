type PageHeaderProps = {
  title: string;
  subtitle?: string;
};

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="bg-bg-light py-10 sm:py-16 lg:py-20 border-b border-border-light relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/[0.03] via-transparent to-brand-gold/[0.02]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-gold mb-3 tracking-tight drop-shadow-[0_2px_8px_rgba(59,157,230,0.15)]">
          {title}
        </h1>
        {subtitle && (
          <p className="text-text-muted text-base sm:text-lg max-w-3xl">{subtitle}</p>
        )}
        <div className="h-0.5 w-16 bg-gradient-to-r from-brand-gold to-transparent rounded-full mt-4" />
      </div>
    </div>
  );
}
