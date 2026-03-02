import React from "react";

type Props = {
  className?: string;
  label?: React.ReactNode;
};
type IconSeparatorProps = {
  icon?: React.ReactNode;
  className?: string;
  
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

export function SimpleHr({ className = "" }: Props) {
  return (
    <hr
      role="separator"
      aria-hidden="true"
      className={`border-0 h-px bg-orange-300/70 my-4 ${className}`}
    />
  );
}

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

export function IconSeparator({ icon, className = "", }: IconSeparatorProps) {
  return (
    <div
      className={`flex items-center my-4 ${className}`}
      aria-hidden="true"
    >
      <div className="flex-1 h-px bg-orange-700/70" />

      {icon && (
        <span className="mx-3 text-orange-400 flex items-center justify-center">
          {icon}
        </span>
      )}

      <div className="flex-1 h-px bg-orange-700/70" />
    </div>
  );
}

export function FooterIconSeparator({
  icon,
  className = "",
}: IconSeparatorProps) {
  return (
    <div
      className={`flex items-center my-8 w-full text-neutral-300 ${className}`}
      aria-hidden="true"
    >
      <div className="flex-1 h-px bg-current opacity-50" />

      {icon && (
        <span className="mx-3 flex items-center justify-center">
          {icon}
        </span>
      )}

      <div className="flex-1 h-px bg-current opacity-50" />
    </div>
  );
}

export function GradientLine({ className = "" }: Props) {
  return (
    <div className={`my-6 ${className}`} aria-hidden="true">
      <div className="h-0.5 w-full bg-gradient-to-r from-orange-300/80 via-orange-200/60 to-orange-300/80" />
    </div>
  );
}

