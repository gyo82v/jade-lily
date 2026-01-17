"use client";

import React from "react";

type TextAreaElProps = React.ComponentPropsWithoutRef<"textarea"> & {
  label?: string;
  error?: string;
  describedby?: string;
};

export function TextAreaEl({
  label,
  error,
  describedby,
  className = "",
  id,
  ...rest
}: TextAreaElProps) {
  const generatedId = React.useId();
  const textAreaId = id ?? generatedId;

  const describeByIds = [
    error ? `${textAreaId}-error` : null,
    describedby ?? null,
  ]
    .filter(Boolean)
    .join(" ") || undefined;

  const baseStyle = `
    w-full rounded-md border border-orange-300 bg-orange-50 px-3 py-2
    text-sm shadow-sm placeholder:text-orange-300
    transition-all duration-200 ease-in-out
    hover:border-orange-400 hover:shadow-md
    focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-400
    focus:bg-orange-100
    disabled:cursor-not-allowed disabled:opacity-50
  `;

  const errorStyle = error
    ? "border-red-400 focus:ring-red-300 focus:border-red-400"
    : "";

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label htmlFor={textAreaId} className="text-sm font-medium text-orange-900">
          {label}
        </label>
      )}

      <textarea
        id={textAreaId}
        className={`${baseStyle} ${errorStyle} ${className}`}
        aria-invalid={!!error}
        aria-describedby={describeByIds}
        rows={4}
        {...rest}
      />

      {error && (
        <p id={`${textAreaId}-error`} className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
