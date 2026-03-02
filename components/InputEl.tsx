"use client";

import React from "react";
import { focusEffects, transitions } from "./styles";

type InputElProps = React.ComponentPropsWithoutRef<"input"> & {
  label?: string;
  error?: string;
  describedby?: string;
};

export function InputEl({label, error, describedby, className = "", id, ...rest}: InputElProps) {
  const generatedId = React.useId();
  const inputId = id ?? generatedId;
  const describeByIds = [
    error ? `${inputId}-error` : null,
    describedby ?? null,
  ].filter(Boolean).join(" ") || undefined;

  const baseStyle = `
    w-full rounded-md border border-orange-300 bg-orange-50 px-3 py-2
    text-sm shadow-sm placeholder:text-orange-300
    hover:border-orange-400 hover:shadow-md
    disabled:cursor-not-allowed disabled:opacity-50
    ${focusEffects} ${transitions} focus:bg-orange-100
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

      <input
        id={inputId}
        className={`${baseStyle} ${errorStyle} ${className}`}
        aria-invalid={!!error}
        aria-describedby={describeByIds || undefined}
        {...rest}
      />

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
