import Link from "next/link";
import { pillStyle } from "../components/styles/pill";

export default function GlobalNotFound() {
  return (
    <section className="min-h-[60vh] mx-auto flex flex-col items-center mt-0 md:mt-30 gap-6 p-6 text-center">
      <h1 className="text-2xl font-bold text-orange-800">
        Page not found
      </h1>

      <p className="max-w-md text-sm text-orange-700/80">
        The page you’re trying to reach doesn’t exist, may have been moved,
        or the link might be incorrect.
      </p>

      <Link
        href="/"
        className={`${pillStyle} hover:-translate-y-0.5`}
      >
        ← Back home
      </Link>
    </section>
  );
}
