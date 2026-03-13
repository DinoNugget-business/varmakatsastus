import { CONTACT } from "@/lib/constants";

export default function GoogleMap() {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg border border-border-light">
      <iframe
        src={CONTACT.googleMapsEmbed}
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Thermohuolto sijainti"
      />
    </div>
  );
}
