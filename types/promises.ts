export type SearchParamsProp = {
    searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export type DishDetailPageProps = {
  params: Promise<{slug : string}>
}

export type DishDetailsLayoutProps = {
    params : Promise<{slug : string}>
    children : React.ReactNode;
}