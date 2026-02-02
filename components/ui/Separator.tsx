import React from "react";

type Props = {
  className?: string;
  label?: React.ReactNode; // optional center label (string or element)
};

export function Separator() {
    return(
        <div className="flex items-center my-3" aria-hidden="true">
            <div className="flex-1 h-px bg-orange-700/70"></div>
                <span className="mx-3 text-orange-700 text-lg leading-none">•</span>
            <div className="flex-1 h-px bg-orange-700/70"></div>
        </div>
    )
}

/**
 * 1) SimpleHr
 * Semantic <hr> fallback — good for content flow / accessibility.
 */
export function SimpleHr({ className = "" }: Props) {
  return (
    <hr
      role="separator"
      aria-hidden="true"
      className={`border-0 h-px bg-orange-300/70 my-4 ${className}`}
    />
  );
}

/**
 * 2) LineWithDot
 * Classic thin line with a centered dot. Decorative (aria-hidden).
 */
export function LineWithDot({ className = "", label }: Props) {
  return (
    <div className={`flex items-center my-4 ${className}`} aria-hidden="true">
      <div className="flex-1 h-px bg-orange-300/70" />
      <span className="mx-3 text-orange-400 text-lg leading-none">
        {label ?? "•"}
      </span>
      <div className="flex-1 h-px bg-orange-300/70" />
    </div>
  );
}

/**
 * 3) IconSeparator
 * Replace the dot with an icon (any react-icon). Example uses a small circle SVG by default.
 */
export function IconSeparator({
  className = "",
  label,
}: Props) {
  return (
    <div className={`flex items-center my-4 ${className}`} aria-hidden="true">
      <div className="flex-1 h-px bg-orange-300/60" />
      <span className="mx-3 inline-flex items-center">
        {/* default svg circle; replace with FaStar, FaCircle, etc. */}
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-orange-400"
          aria-hidden="true"
        >
          <circle cx="4" cy="4" r="4" fill="currentColor" />
        </svg>
        {label ? <span className="sr-only">{label}</span> : null}
      </span>
      <div className="flex-1 h-px bg-orange-300/60" />
    </div>
  );
}

/**
 * 4) DoubleLine
 * Two thin lines with a small gap — elegant and understated.
 */
export function DoubleLine({ className = "" }: Props) {
  return (
    <div className={`my-6 ${className}`} aria-hidden="true">
      <div className="h-px bg-orange-200/60" />
      <div className="h-px bg-orange-300/70 mt-1" />
    </div>
  );
}

/**
 * 5) GradientLine
 * A single horizontal gradient line — prettier on light backgrounds.
 */
export function GradientLine({ className = "" }: Props) {
  return (
    <div className={`my-6 ${className}`} aria-hidden="true">
      <div className="h-0.5 w-full bg-gradient-to-r from-orange-300/80 via-orange-200/60 to-orange-300/80" />
    </div>
  );
}

/**
 * 6) DashedLine
 * A dashed separator — useful for a more "informal" or technical feel.
 */
export function DashedLine({ className = "" }: Props) {
  return (
    <div className={`flex items-center my-4 ${className}`} aria-hidden="true">
      <div className="flex-1 border-t-2 border-dashed border-orange-300/60" />
    </div>
  );
}

/**
 * 7) ThickShadowLine
 * A thicker line with a soft shadow — gives subtle depth for "panel" sections.
 */
export function ThickShadowLine({ className = "" }: Props) {
  return (
    <div className={`my-6 ${className}`} aria-hidden="true">
      <div className="h-1 bg-orange-200/90 rounded-md shadow-sm shadow-orange-100/60" />
    </div>
  );
}

/**
 * 8) SvgWave
 * A decorative SVG wave divider (good between large sections).
 * Use with caution in the middle of text — it's more of a section-break graphic.
 */
export function SvgWave({ className = "" }: Props) {
  return (
    <div className={`w-full overflow-hidden leading-none ${className}`} aria-hidden="true">
      <svg
        className="block w-full"
        viewBox="0 0 1440 80"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,32 C120,80 360,0 720,32 C1080,64 1320,24 1440,48 L1440 80 L0 80 Z"
          fill="#FEEBC8" /* tailwind from-orange-100-ish; adjust as needed */
        />
      </svg>
    </div>
  );
}

/**
 * 9) PseudoSeparator
 * Minimal markup using pseudo-elements (Tailwind's before:/after utilities).
 * Note: Tailwind JIT required for content utilities.
 */
export function PseudoSeparator({ className = "", label }: Props) {
  return (
    <div className={`my-4 ${className}`} aria-hidden="true">
      <span
        className={
          "relative inline-block px-3 text-orange-400 " +
          // before/after draw the lines; adjust widths as needed
          "before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-20 before:h-px before:bg-orange-300/70 " +
          "after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-20 after:h-px after:bg-orange-300/70"
        }
      >
        {label ?? "•"}
      </span>
    </div>
  );
}
