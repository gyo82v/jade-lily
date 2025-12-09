import React, { createContext, useContext } from "react";

export type DishServerData = {
  slug: string;
  title?: string;
  description?: string;
  origin?: string;
  ingredients?: string[]; // adjust to your schema
};

const DishContext = createContext<DishServerData | null>(null);

export function useDishServer() {
  const ctx = useContext(DishContext);
  if (!ctx) throw new Error("useDishServer must be used inside DishServerProvider");
  return ctx;
}

export function DishServerProvider({
  children,
  data,
}: {
  children: React.ReactNode;
  data: DishServerData;
}) {
  // This is a plain server-side provider; do NOT add "use client" here.
  return <DishContext.Provider value={data}>{children}</DishContext.Provider>;
}
