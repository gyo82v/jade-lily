import Image from "next/image";
import Link from "next/link";
import { renderIcon } from "@/lib/utilsIcons";
import type { DishProps } from "@/types";
import { IconWrapper } from "../IconWrapper";
import { transitions, focusEffects } from "@/components/styles";

type Props = {
  data: DishProps;
  priority?: boolean;
};

export function DishCard({ data, priority = false }: Props) {
  const { slug, imageUrlThumb, description, name, type, price, category } = data;
  const titleId = `dish-title-${slug}`;

  return (
    <li className="h-full">
      <Link
        href={`/menu/${category}/${slug}`}
        className={`group block h-full focus:outline-none ${focusEffects}`}
        title={`Open ${name} details`}
        aria-labelledby={titleId}
      >
        {/* Card shell: flex column so image keeps square and content grows */}
        <article
          className={`
            h-full flex flex-col overflow-hidden rounded-lg text-orange-800
            bg-gradient-to-b from-orange-100 via-orange-50 to-orange-100
            shadow-lg transform ${transitions}
            group-hover:scale-[1.02] group-hover:shadow-2xl active:scale-95
          `}
        >
          {/* Square image area: aspect-square + relative for Image fill */}
          <figure className="relative w-full aspect-square overflow-hidden">
            <Image
              src={imageUrlThumb}
              alt={description ?? name}
              fill
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              priority={priority}
            />
          </figure>

          {/* Content area with responsive padding and spacing */}
          <div className="p-3 md:p-4 lg:p-5 flex-1 flex flex-col">
            <div className="flex items-start justify-between gap-3 mb-2 md:mb-3">
              <h3 id={titleId} className="font-dancing text-base md:text-lg lg:text-xl font-bold leading-tight">
                {name}
              </h3>
              <p className="ml-auto text-base md:text-lg font-semibold tabular-nums">£{price}</p>
            </div>

            {/* Description: allow it to take available space; clamp two lines on small screens */}
            <p className="text-sm text-stone-700 mb-3 line-clamp-2 md:line-clamp-3 flex-shrink-0">
              {description}
            </p>

            {/* lower row: icon + small label (keeps at bottom) */}
            <div className="mt-auto flex items-center gap-3">
              <IconWrapper type={type} className="py-1 px-2 rounded-md">
                <span aria-hidden="true">{renderIcon(type)}</span>
              </IconWrapper>
              <span className="text-xs md:text-sm text-stone-600">{type}</span>
            </div>
          </div>
        </article>
      </Link>
    </li>
  );
}
