"use client";

import Link from "next/link";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components";
import { useAuth } from "@/firebase/authProvider";
import RemoveFromOrdersBtn from "./RemoveFromOrdersBtn";
import OrderProcessingCard from "@/components/ui/OrderProcessingCard";
import {FaReceipt} from "react-icons/fa";
import { FaShoppingCart, FaUtensils } from "react-icons/fa";

type Order = {
  id: string;
  dateLabel: string;
  price: number | string;
};

export default function AccountOrdersPage() {
  const { user, profile, clearPastOrders } = useAuth();
  const searchParams = useSearchParams();
  const processingParam = searchParams.get("processing");
  const processingRequested = processingParam === "1" || processingParam === "true";

  // page-level visibility state (initially true if param requested)
  const [isProcessingVisible, setIsProcessingVisible] = useState<boolean>(processingRequested);

  if (!user) return <p>Loading...</p>;

  const orders = (profile?.jadeLilyPastOrders ?? []) as Order[];

  return (
    <div className="w-full">
      {/* Processing card */}
      <OrderProcessingCard
        visible={isProcessingVisible}
        onClose={() => setIsProcessingVisible(false)}
      />

      {/* Orders list (dimmed while processing visible) */}
      <div className={`${isProcessingVisible ? "opacity-60 pointer-events-none select-none" : ""} transition-opacity`}>
        {orders.length > 0 ? (
          <>
            <section className="flex flex-col gap-4 my-4">
              {orders.map((order) => (
                <article key={order.id} className={`flex gap-4 px-4 py-4 md:py-6 bg-white items-center
                                                    shadow-lg rounded-lg w-full hover:shadow-xl`}>
                  <div className="flex-shrink-0 w-16 h-16 rounded-md bg-orange-50 flex items-center justify-center text-orange-800 font-medium overflow-hidden">
                      <div className="flex flex-col items-center justify-center gap-1">
                        <FaUtensils className="h-5 w-5" aria-hidden="true" />
                      </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className={`font-medium text-sm md:text-base`}>{order.dateLabel}</p>
                    <p className={`font-medium text-sm md:text-base text-stone-600`}>
                      £{Number(order.price).toFixed(2)}
                    </p>
                  </div>

                  <div className="flex items-center justify-center">
                    <RemoveFromOrdersBtn userId={user.uid} orderId={order.id} />
                  </div>
                </article>
              ))}
            </section>

            <div className="mt-4">
              <Button onClick={() => clearPastOrders(user.uid)} className="w-full md:w-auto">
                Clear all
              </Button>
            </div>
          </>
        ) : (
          <section className="rounded-lg p-6 grad-primary shadow-md">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex items-center gap-3">
                    <FaReceipt className="h-8 w-8 text-orange-700" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-lg">No past orders</p>
                      <p className="text-sm text-stone-600">You don’t have any past orders yet.</p>
                   </div>
                </div>
                <div className="ml-auto">
                  <Link href="/menu">
                    <Button>Browse menu</Button>
                  </Link>
                </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
