import Icon from "@/components/ui/Icon";

type Props = {
  name: string;
  position: string;
  phone?: string | null;
  phoneHref?: string | null;
  email?: string | null;
};

function getInitials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function StaffCard({ name, position, phone, phoneHref, email }: Props) {
  return (
    <div className="light-card rounded-xl p-5 text-center">
      {/* Initials avatar */}
      <div className="w-14 h-14 rounded-full bg-brand-primary/10 flex items-center justify-center mx-auto mb-3">
        <span className="font-display font-bold text-lg text-brand-primary">
          {getInitials(name)}
        </span>
      </div>

      <h3 className="font-display font-semibold text-base text-text-primary mb-1">
        {name}
      </h3>
      <p className="text-sm text-text-muted mb-3">{position}</p>

      <div className="flex flex-col gap-1.5">
        {phone && phoneHref && (
          <a
            href={phoneHref}
            className="inline-flex items-center justify-center gap-1.5 text-sm text-brand-primary hover:text-brand-accent transition-colors"
          >
            <Icon name="phone" size={14} />
            {phone}
          </a>
        )}
        {email && (
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center justify-center gap-1.5 text-sm text-brand-primary hover:text-brand-accent transition-colors truncate"
          >
            <Icon name="mail" size={14} />
            <span className="truncate">{email}</span>
          </a>
        )}
      </div>
    </div>
  );
}
