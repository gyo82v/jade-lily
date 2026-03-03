"use client";

import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { focusEffects, transitions } from "./styles";

type InputElProps = React.ComponentPropsWithoutRef<"input"> & {
  label?: string;
  error?: string;
  describedby?: string;
};

export function InputEl({
  label,
  error,
  describedby,
  className = "",
  id,
  type,
  ...rest
}: InputElProps) {
  const generatedId = React.useId();
  const inputId = id ?? generatedId;

  const [showPassword, setShowPassword] = React.useState(false);
  const isPassword = type === "password";

  const describeByIds =
    [
      error ? `${inputId}-error` : null,
      describedby ?? null,
    ]
      .filter(Boolean)
      .join(" ") || undefined;

  const baseStyle = `
    w-full rounded-md border border-orange-300 bg-orange-50 px-3 py-2
    text-sm shadow-sm placeholder:text-orange-300
    hover:border-orange-400 hover:shadow-md
    disabled:cursor-not-allowed disabled:opacity-50
    ${focusEffects} ${transitions} focus:bg-orange-100
    ${isPassword ? "pr-10" : ""}
  `;

  const errorStyle = error
    ? "border-red-400 focus:ring-red-300 focus:border-red-400"
    : "";

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-orange-900"
        >
          {label}
        </label>
      )}

      {/* INPUT + ICON WRAPPER */}
      <div className="relative">
        <input
          id={inputId}
          type={isPassword && showPassword ? "text" : type}
          className={`${baseStyle} ${errorStyle} ${className}`}
          aria-invalid={!!error}
          aria-describedby={describeByIds}
          {...rest}
        />

        {/* PASSWORD TOGGLE (only if password) */}
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(prev => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2
                       text-orange-300 hover:text-orange-400"
            aria-label={showPassword ? "Hide password" : "Show password"}
            tabIndex={-1}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>

      {error && (
        <p
          id={`${inputId}-error`}
          className="text-sm text-red-600"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}
