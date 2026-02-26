type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
};

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 lg:mb-14 ${centered ? "text-center" : ""}`}>
      <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-gold mb-3 tracking-tight">
        {title}
      </h2>
      <div
        className={`h-0.5 w-16 bg-gradient-to-r from-brand-gold to-brand-gold-light rounded-full mb-4 ${
          centered ? "mx-auto" : ""
        }`}
      />
      {subtitle && (
        <p className="text-text-muted-light text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
