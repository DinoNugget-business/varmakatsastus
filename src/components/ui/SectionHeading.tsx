type Props = {
  title: string;
  subtitle?: string;
  light?: boolean;
};

export default function SectionHeading({ title, subtitle, light }: Props) {
  return (
    <div className="text-center mb-12">
      <h2
        className={`font-display font-bold text-3xl sm:text-4xl mb-3 ${
          light ? "text-text-light" : "text-text-primary"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`max-w-2xl mx-auto text-base leading-relaxed ${
            light ? "text-text-muted-dark" : "text-text-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
