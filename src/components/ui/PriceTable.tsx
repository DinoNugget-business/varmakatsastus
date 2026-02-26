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
      <div className="overflow-x-auto rounded-xl border border-border-light">
        <table className="w-full text-sm">
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className={`border-b border-border-light transition-colors duration-200 hover:bg-brand-gold/[0.06] ${
                  i % 2 === 0 ? "bg-bg-light" : "bg-bg-white"
                }`}
              >
                <td className="py-3 px-3 sm:px-5 text-sm sm:text-base text-text-dark">{row.service}</td>
                <td className="py-3 px-3 sm:px-5 text-sm sm:text-base text-brand-gold font-semibold text-right whitespace-nowrap">
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
