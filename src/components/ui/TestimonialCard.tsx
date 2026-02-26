import { Quote, Star } from "lucide-react";

type TestimonialCardProps = {
  quote: string;
  author: string;
  rating?: number;
};

export default function TestimonialCard({
  quote,
  author,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div className="light-card rounded-xl p-6 relative transition-all duration-300 hover:shadow-lg hover:shadow-brand-gold/5 hover:-translate-y-1 group">
      <Quote className="w-8 h-8 text-brand-gold/20 absolute top-4 right-4 transition-colors duration-300 group-hover:text-brand-gold/40" />

      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating
                ? "text-amber-400 fill-amber-400"
                : "text-border-light"
            }`}
          />
        ))}
      </div>

      <p className="text-text-muted-light text-sm leading-relaxed mb-4 italic">
        &ldquo;{quote}&rdquo;
      </p>

      <div className="flex items-center gap-3 pt-3 border-t border-border-light">
        <div className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold font-bold text-sm">
          {author.charAt(0)}
        </div>
        <p className="text-brand-gold text-sm font-medium">{author}</p>
      </div>
    </div>
  );
}
