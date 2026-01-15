"use client";

import React from "react";

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







/*
"use client"
type InputElProps = React.ComponentPropsWithoutRef<"input"> & {
  label?: string;
  error?: string;
};


export function InputEl({label, error, type, name, id, className="", ...rest}: InputElProps){
    const inputId = id || name;

    const style = `border border-orange-300 rounded-md p-2 w-full shadow-md bg-orange-50
                   focus:outline-none focus:ring-2 focus:ring-orange-300 focus:bg-orange-100 
                   focus:shadow-xl focus:scale-105 focus:text-lg 
                   transition-transform transition-colors transition-shadow duration-300 ease-in-out
                   hover:border-orange-400 hover:shadow-lg `;
    return(
        <input className={`${style} ${className}`} type={type} name={name} id={id} {...rest} />
    )
}*/