
type Props = {
  origin?: string;
};

export function DishDetailsOrigin({ origin }: Props) {
  return (
    <section className="bg-white rounded-lg p-4 shadow-sm">
      <h2 className="text-lg font-semibold mb-2">Origin</h2>
      <p className="text-sm text-stone-700">{origin ?? "No origin information."}</p>
    </section>
  );
}

