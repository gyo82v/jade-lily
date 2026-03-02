import type { DishForCart } from "@/types";

export type CartBtn = {
    userId : string
    dish : DishForCart
    amount? : number
    className? : string
}

export type CartRemoveBtn = {
    userId: string;
    cartItemId: string;
    className?: string;
}

export type OrdersRemoveBtn = {
    userId: string;
    orderId: string;
    className?: string;
}