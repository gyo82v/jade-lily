import type { DishProps } from "@/types";
import AccountDishCard from "./AccountDishCard";

type Props = {
  dishes: DishProps[];
  userId: string;
};

export default function AccountDishList({ dishes, userId }: Props) {
  if (!dishes || dishes.length === 0) {
    return (
      <section className="w-11/12 mx-auto my-10">
        <p className="text-center text-stone-600">No dishes available.</p>
      </section>
    );
  }

  return (
    <section className="w-11/12 mx-auto my-10">
      <ul className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6">
        {dishes.map((dish, i) => (
          <AccountDishCard key={dish.id} dish={dish} userId={userId} priority={i === 0} />
        ))}
      </ul>
    </section>
  );
}

