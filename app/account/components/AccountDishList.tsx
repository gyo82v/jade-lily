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

  // Mobile: vertical list (one per row) using stacked <li>
  // md+: grid layout for denser desktop presentation.
  return (
    <section className="w-11/12 mx-auto my-10">
      <ul className="flex flex-col gap-3 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6">
        {dishes.map((dish) => (
          <AccountDishCard key={dish.id} dish={dish} userId={userId} />
        ))}
      </ul>
    </section>
  );
}

/*
import type { DishProps } from "@/types"
import AccountDishCard from "./AccountDishCard"

type Props = {
    dishes : DishProps[]
    userId : string
}


export default function AccountDishList({dishes, userId}:Props){
    const dishesArr = dishes?.map(dish => <AccountDishCard key={dish.id} dish={dish} userId={userId} />)
    return(
        <section className="flex flex-col gap-5 my-10 w-11/12 mx-auto">
            <ul>
                {dishesArr}
            </ul>
        </section>
    )
}
    */