"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components";
import { FaSpinner, FaCheckCircle } from "react-icons/fa";

type Props = {
  visible: boolean;
  onClose: () => void;
  storageKey?: string;
  durationMs?: number;
  autoDismissMs?: number;
};

const DEFAULT_STORAGE_KEY = "jade_processing_order";
const DEFAULT_DURATION = 30_000;
const DEFAULT_AUTO_DISMISS = 2000;

export default function OrderProcessingCard({
  visible,
  onClose,
  storageKey = DEFAULT_STORAGE_KEY,
  durationMs = DEFAULT_DURATION,
  autoDismissMs = DEFAULT_AUTO_DISMISS,
}: Props) {
  const [progress, setProgress] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

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

  useEffect(() => {
    if (!visible) return;

    // read or set startedAt
    let startedAt = Date.now();
    try {
      const raw = sessionStorage.getItem(storageKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed?.startedAt && typeof parsed.startedAt === "number") {
          startedAt = parsed.startedAt;
        } else {
          sessionStorage.setItem(storageKey, JSON.stringify({ startedAt }));
        }
      } else {
        sessionStorage.setItem(storageKey, JSON.stringify({ startedAt }));
      }
    } catch {
      startedAt = Date.now();
    }

    startedAtRef.current = startedAt;

    // focus the card for accessibility
    requestAnimationFrame(() => cardRef.current?.focus());

    function update() {
      if (!startedAtRef.current) return;
      const now = Date.now();
      const elapsed = now - startedAtRef.current;
      const pct = Math.min(100, Math.round((elapsed / durationMs) * 100));
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
            sessionStorage.removeItem(storageKey);
          } catch {}
          onClose();
        }, autoDismissMs);
      }
    }

    update();
    intervalRef.current = window.setInterval(update, 200);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, storageKey, durationMs, autoDismissMs, onClose]);

  function handleDismiss() {
    try {
      sessionStorage.removeItem(storageKey);
    } catch {}
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    onClose();
  }

  if (!visible) return null;

  return (
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
                  ? `Estimated time: ${Math.ceil((durationMs - (progress / 100) * durationMs) / 1000)}s`
                  : "Your order has been processed and is now in your orders list."}
              </p>
            </div>
          </div>

          {/* progress bar */}
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
  );
}
