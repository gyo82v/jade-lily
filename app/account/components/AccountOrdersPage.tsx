"use client";

import Link from "next/link";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components";
import { useAuth } from "@/firebase/authProvider";
import RemoveFromOrdersBtn from "./RemoveFromOrdersBtn";
import OrderProcessingCard from "@/components/ui/OrderProcessingCard";
import {FaReceipt} from "react-icons/fa";

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
                <article key={order.id} className={`flex gap-2 px-4 py-4 md:py-6 grad-primary
                                                    shadow-lg rounded-lg w-full hover:shadow-xl`}>
                  <div className="flex-1">
                    <p className={`font-medium text-sm md:text-base`}>{order.dateLabel}</p>
                  </div>

                  <div className="flex-1 flex items-center justify-left">
                    <p className={`font-medium text-sm md:text-base text-right`}>
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

/*
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components";
import { useAuth } from "@/firebase/authProvider";
import RemoveFromOrdersBtn from "./RemoveFromOrdersBtn";
import { FaSpinner, FaCheckCircle } from "react-icons/fa";

const STORAGE_KEY = "jade_processing_order";
const DURATION_MS = 30_000; 
const AUTO_DISMISS_MS = 2000;

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

  // UI state (derived initial visibility from the URL param; no impure calls here)
  const [isProcessingVisible, setIsProcessingVisible] = useState<boolean>(processingRequested);
  const [progress, setProgress] = useState<number>(0); // 0..100
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  // refs for startedAt and timers
  const startedAtRef = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);
  const mountedRef = useRef(true);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Effect: initialize startedAt (from sessionStorage if present, else now),
  // compute initial progress, and kick off the interval that updates progress.
  useEffect(() => {
    if (!processingRequested) return;

    // Determine startedAt (read sessionStorage safely)
    let startedAt = Date.now();
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed?.startedAt && typeof parsed.startedAt === "number") {
          startedAt = parsed.startedAt;
        } else {
          // save for reload resume
          sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ startedAt }));
        }
      } else {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ startedAt }));
      }
    } catch {
      // if storage fails, fallback to now
      startedAt = Date.now();
    }

    startedAtRef.current = startedAt;

    // focus for accessibility (after paint)
    requestAnimationFrame(() => cardRef.current?.focus());

    // helper update function
    function update() {
      if (!startedAtRef.current) return;
      const now = Date.now();
      const elapsed = now - startedAtRef.current;
      const pct = Math.min(100, Math.round((elapsed / DURATION_MS) * 100));
      setProgress(pct);
      if (pct >= 100) {
        setIsCompleted(true);
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        // auto-dismiss after short delay
        setTimeout(() => {
          if (!mountedRef.current) return;
          try {
            sessionStorage.removeItem(STORAGE_KEY);
          } catch {}
          setIsProcessingVisible(false);
        }, AUTO_DISMISS_MS);
      }
    }

    // initial update & interval
    update();
    intervalRef.current = window.setInterval(update, 200);

    // cleanup
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, [processingRequested]);

  if (!user) return <p>Loading...</p>;

  // typed orders array
  const orders = (profile?.jadeLilyPastOrders ?? []) as Order[];

  function handleDismiss() {
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {}
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsProcessingVisible(false);
  }

  return (
    <div className="w-full">

      {isProcessingVisible && (
        <div
          ref={cardRef}
          tabIndex={-1}
          aria-live="polite"
          aria-atomic="true"
          className="mb-6 p-4 rounded-lg bg-white shadow-md ring-1 ring-stone-100"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3">
                {!isCompleted ? (
                  <FaSpinner className="animate-spin text-orange-700 h-6 w-6" aria-hidden="true" />
                ) : (
                  <FaCheckCircle className="text-green-600 h-6 w-6" aria-hidden="true" />
                )}
                <div>
                  <p className="font-semibold text-lg text-orange-800">
                    {!isCompleted ? "Processing your order…" : "Order completed"}
                  </p>
                  <p className="text-sm text-stone-600">
                    {!isCompleted
                      ? `Estimated time: ${Math.ceil((DURATION_MS - (progress / 100) * DURATION_MS) / 1000)}s`
                      : "Your order has been processed and is now in your orders list."}
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <div
                  className="w-full h-3 bg-stone-100 rounded-full overflow-hidden"
                  role="progressbar"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={progress}
                  aria-label="Order progress"
                >
                  <div
                    className="h-full grad-peach"
                    style={{
                      width: `${progress}%`,
                      transition: "width 200ms linear",
                    }}
                  />
                </div>
                <div className="mt-2 text-xs text-stone-500">{progress}%</div>
              </div>
            </div>

            <div className="flex-shrink-0 mt-1">
              <div className="flex flex-col items-end gap-2">
                <Button onClick={handleDismiss} className="px-3 py-1.5">
                  {isCompleted ? "OK" : "Dismiss"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className={`${isProcessingVisible ? "opacity-60 pointer-events-none select-none" : ""} transition-opacity`}>
        {orders.length > 0 ? (
          <>
            <section className="flex flex-col gap-4 my-4">
              {orders.map((order) => (
                <article key={order.id} className={`flex gap-2 px-4 py-4 md:py-6 grad-primary
                                                    shadow-lg rounded-lg w-full hover:shadow-xl`}>
                  <div className="flex-1">
                    <p className={`font-medium text-sm md:text-base`}>{order.dateLabel}</p>
                  </div>

                  <div className="flex-1 flex items-center justify-left">
                    <p className={`font-medium text-sm md:text-base text-right`}>
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
              <div>
                <p className="font-semibold text-lg">No past orders</p>
                <p className="text-sm text-stone-600">You don’t have any past orders yet.</p>
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
*/