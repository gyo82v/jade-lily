import SlugLayout from "../../components/SlugLayout"
import type { DishDetailsLayoutProps } from "@/types"

export default async function DishDetailsLayout({params, children}:DishDetailsLayoutProps){
    const {slug} = await params
    return <SlugLayout slug={slug}>{children}</SlugLayout>
}