import type { DishProps } from "@/types";
import { renderStars } from "@/lib/utilsIcons";

type Props = {
  data: DishProps | null;
};

export function DishDetails({ data }: Props) {
  if (!data) return <p>Data not available</p>;

  const { description, tags, rating } = data;

  return (
    <section className="bg-white rounded-lg p-4 shadow-sm">
      <div className="prose max-w-none">
        <p className="italic text-stone-600">{description}</p>

        {tags?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t} className="text-xs bg-orange-50 text-orange-800 px-2 py-1 rounded-full">
                {t}
              </span>
            ))}
          </div>
        ) : null}

        <div className="mt-4">{renderStars(rating)}</div>
      </div>
    </section>
  );
}
