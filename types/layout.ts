import type { ReactNode } from "react";

export type RootLayoutProps = Readonly<{
    children: React.ReactNode;
}>
export type PageLayout = {
    children : React.ReactNode;
}
export type MenuDetailsLayout = {
    children : React.ReactNode;
}
export type SlugLayoutProps = {
    slug: string;
    children: ReactNode;
}