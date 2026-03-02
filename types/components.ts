import type { ReactNode } from "react"
import type { DishProps } from "@/types";

export type NavlinkProps =
  React.ComponentPropsWithoutRef<"a"> & {
    href: string
    isActive?: boolean
    children: ReactNode
    className? : string
  }

export type ReviewProps = {
    author : string
    rating : number
    children : string
    date? : Date | string 
}

export type NavBarProps = {
    children : ReactNode
}

export type IconWrapperProps = {
    className : string 
    type? : string
    children : ReactNode
}

export type AccountMenuProps = {
    category? : string
    pathname : string
    params : Record<string, string | string[] | undefined>
}

export type AccountOrder = {
    id: string;
    dateLabel: string;
    price: number | string;
}

export type SliderDish = {
    name: string
    description?: string
    origin?: string
    imageUrlFull?: string
    price?: number
    type?: string
    category?: string
}

export type MenuProps = {
    value : string
    pathname : string
    params : Record<string, string | string[] | undefined>
}

export type DishCardProps = {
    data: DishProps;
    priority?: boolean;
}

export type DishDetailsIngredientsProps = {
    ingredients?: string;
    allergies?: string;
}

export type MenuFiltersProps = {
    array: string[];
    pathname: string;
    params: string | string[] | undefined;
}

export type DishDetailsNavbarProps = {
    slug: string;
    category?: string | null;
}

export type NavbarPropsNew = {
    className? : string
    children : ReactNode
    classNameUl? : string
}

export type OrderProcessingCardProps = {
    visible: boolean;
    onClose: () => void;
    storageKey?: string;
    durationMs?: number;
    autoDismissMs?: number;
}

export type IconWrappersProps = {
    className?: string;
    type?: string | undefined;
    children: React.ReactNode;
    interactive?: boolean;
    active?: boolean;
}