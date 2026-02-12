
import type { DishProps } from "@/types";
import { DishDetailsNavbar } from "@/components/navbars/DishDetailsNavbar";

type Props = {
  data: DishProps | null;
};

export function DishDetailsHeader({ data }: Props) {
  if (!data) return <p>No data available</p>;

  const { name, price, category, slug } = data;

  return (
    <header>
      <div className="flex flex-row items-center justify-between gap-3">
        <div>
          <h1 id="dish-page-title" className="text-2xl md:text-3xl lg:text-4xl font-dancing font-bold leading-tight text-orange-800">
            {name}
          </h1>
          <div className="mt-2 flex items-center gap-3">
            <span className="text-sm text-stone-600">{category}</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-xl md:text-2xl font-semibold text-orange-800">£{price}</div>
        </div>
      </div>

      {/* Tabs / nav */}
      <div className="mt-4">
        <DishDetailsNavbar slug={slug} category={category} />
      </div>
    </header>
  );
}
