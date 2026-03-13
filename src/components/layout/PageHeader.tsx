type Props = {
  title: string;
  subtitle?: string;
};

export default function PageHeader({ title, subtitle }: Props) {
  return (
    <section className="bg-brand-dark pt-12 pb-14 sm:pt-16 sm:pb-18 relative overflow-hidden">
      {/* Ambient gradient blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-brand-accent opacity-[0.04] -top-[250px] -right-[100px] blur-3xl" />
        <div className="absolute w-[300px] h-[300px] rounded-full bg-brand-primary-light opacity-[0.06] -bottom-[150px] -left-[50px] blur-2xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h1 className="page-heading font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-text-light mb-3">
          {title}
        </h1>
        {subtitle && (
          <p className="page-subtitle text-text-muted-dark text-base sm:text-lg max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
        {/* Accent line */}
        <div className="mt-6 w-16 h-1 bg-brand-accent rounded-full page-accent" />
      </div>
    </section>
  );
}
