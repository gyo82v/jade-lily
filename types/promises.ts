export type SearchParamsProp = {
    searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export type DishDetailPageProps = {
  params: Promise<{slug : string}>
}