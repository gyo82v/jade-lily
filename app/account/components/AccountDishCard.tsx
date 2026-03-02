"use client";

import Link from "next/link";
import Image from "next/image";
import AddToCartBtn from "./AddToCartBtn";
import { transitions, disabledEffects, focusEffects } from "@/components/styles";
import { IconWrapper } from "@/components/IconWrapper";
import { renderIcon } from "@/lib/utilsIcons";
import type { DishProps } from "@/types";

type Props = {
  dish: DishProps;
  userId: string;
  priority?: boolean;
};

export default function AccountDishCard({ dish, userId, priority = false }: Props) {
  const imgSrc =
    dish.imageUrlThumb || dish.imageUrlFull || "/images/placeholder.png";

  const cardBase = `
    group flex flex-row md:flex-col items-stretch overflow-hidden rounded-lg
    grad-primary text-orange-800 hover:shadow-xl
    shadow-lg ${transitions} ${disabledEffects}`;

  return (
    <li className="h-full">
      <article className={cardBase}>
        {/* LINK WRAPS IMAGE + CONTENT */}
        <Link
          href={`/menu/${dish.category}/${dish.slug}`}
          className={`flex flex-1 flex-row md:flex-col ${focusEffects}`}
          title={`Open ${dish.name} details`}
        >
          <figure
            className="
              relative flex-shrink-0 w-44 h-28
              md:w-full md:h-full md:aspect-square
              rounded-l-lg md:rounded-l-none md:rounded-t-lg
              overflow-hidden
            "
            aria-hidden="true"
          >
            <Image
              src={imgSrc}
              alt={dish.name}
              fill
              sizes="(max-width: 768px) 112px, (max-width: 1024px) 320px, 400px"
              priority={priority}
              className="
                object-cover w-full h-full
                transition-transform duration-300
                group-hover:scale-105
              "
            />
          </figure>

          {/* CONTENT */}
          <div className="flex-1 flex flex-col justify-center p-3 md:p-4 md:gap-2">
            <div className="flex flex-col md:flex-row md:justify-between gap-3">
              <h3 className="font-dancing text-lg md:text-xl font-semibold leading-tight truncate">
                {dish.name}
              </h3>
              <p className="md:ml-0 font-semibold text-base md:text-lg tabular-nums">
                £{dish.price}
              </p>
            </div>

            {/* ICON — desktop only */}
            <div className="mt-2 hidden md:flex items-center gap-3">
              <IconWrapper type={dish.type} className="py-1 px-2 rounded-md">
                <span aria-hidden="true">{renderIcon(dish.type)}</span>
              </IconWrapper>
              <span className="text-sm text-stone-600">{dish.type}</span>
            </div>
          </div>
        </Link>

        <div className="pr-2 md:p-4 flex items-center justify-center md:w-full ">
          <AddToCartBtn
            className="h-10 w-full "
            userId={userId}
            dish={{
              name: dish.name,
              price: dish.price,
              dishId: dish.id,
            }}
            amount={1}
          />
        </div>
      </article>
    </li>
  );
}

