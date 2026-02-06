
type JadeLilyLogoProps = {
  variant?: "orange" | "dark" | "soft" | "mono";
  className?: string;
};

export function JadeLilyLogo({
  variant = "orange",
  className = "",
}: JadeLilyLogoProps) {
  const colorMap: Record<typeof variant, string> = {
    orange:
      "bg-gradient-to-br from-orange-900 via-orange-600 to-orange-800 text-orange-800",
    dark:
      "bg-gradient-to-br from-stone-900 via-stone-700 to-stone-900 text-stone-800",
    soft:
      "bg-gradient-to-br from-orange-700 via-orange-500 to-orange-600 text-orange-700",
    mono: "text-orange-800",
  };

  return (
    <h1
      className={`
        inline-flex items-center gap-[0.35rem]
        text-3xl md:text-4xl font-semibold tracking-tight
        ${className}
      `}
    >
      {/* Wordmark */}
      <span
        className={`
          text-transparent bg-clip-text
          ${colorMap[variant]}
        `}
      >
        JadeLily
      </span>

      {/* Lily glyph */}
      <span aria-hidden="true" className="text-current">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 md:w-6 md:h-6 translate-y-[1px]"
        >
          {/* Minimal lily silhouette — single filled shape */}
          <path d="
            M12 2
            C13.8 2 15 3.6 15 5
            C15 7.6 12 9.4 12 9.4
            C12 9.4 9 7.6 9 5
            C9 3.6 10.2 2 12 2
            Z

            M6 13
            C8.8 12 10.8 12 12 13.4
            C13.2 12 15.2 12 18 13
            C18 13 16.8 16.2 14.2 17.4
            C12.8 18 11.2 18 9.8 17.4
            C7.2 16.2 6 13 6 13
            Z
          " />
        </svg>
      </span>
    </h1>
  );
}



