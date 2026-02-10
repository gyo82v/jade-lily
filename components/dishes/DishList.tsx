import { DishCard } from "./DishCard";
import type { DishProps } from "@/types";

type Props = {
  data: DishProps[];
};

export function DishList({ data }: Props) {
  const grid = `grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
               gap-3 my-5 md:gap-4 lg:gap-6 px-2 md:px-4 lg:px-6`;

  return (
    <section aria-labelledby="menu-results" className="w-full">
      <ul className={`${grid} list-none`}>
        {data.map((dish, i) => (
          <DishCard key={dish.id} data={dish} priority={i === 0} />
        ))}
      </ul>
    </section>
  );
}