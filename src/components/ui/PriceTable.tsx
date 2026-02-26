type PriceRow = {
  service: string;
  price: string;
};

type PriceTableProps = {
  title: string;
  rows: PriceRow[];
};

export default function PriceTable({ title, rows }: PriceTableProps) {
  return (
    <div className="mb-10">
      <h3 className="font-display text-xl font-bold text-brand-gold mb-4 tracking-tight">
        {title}
      </h3>
      <div className="overflow-x-auto rounded-xl border border-brand-border/50">
        <table className="w-full text-sm">
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className={`border-b border-brand-border/30 transition-colors duration-200 hover:bg-brand-gold/[0.03] ${
                  i % 2 === 0 ? "bg-brand-gray/40" : "bg-brand-gray/20"
                }`}
              >
                <td className="py-3.5 px-5 text-text-primary">{row.service}</td>
                <td className="py-3.5 px-5 text-brand-gold font-semibold text-right whitespace-nowrap">
                  {row.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
