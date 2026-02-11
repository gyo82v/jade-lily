
type Props = {
  ingredients?: string;
  allergies?: string;
};

export function DishDetailsIngredients({ ingredients, allergies }: Props) {
  return (
    <section className="bg-white rounded-lg p-4 shadow-sm">
      <h2 className="text-lg font-semibold mb-2">Ingredients</h2>
      <p className="text-sm text-stone-700 mb-3">{ingredients ?? "No ingredients provided."}</p>

      <h3 className="text-sm font-semibold mb-1">Allergies</h3>
      <p className="text-sm text-stone-700">{allergies ?? "None specified."}</p>
    </section>
  );
}
