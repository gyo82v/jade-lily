// components/ui/ConfirmOrderModal.tsx
"use client";

import React, { useEffect, useRef, KeyboardEvent } from "react";
import { Button } from "@/components";
import { FiX } from "react-icons/fi";

type Props = {
  open: boolean;
  title?: string;
  children?: React.ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
  isLoading?: boolean;
  onClose: () => void;
  onConfirm: () => Promise<void> | void;
};

export default function ConfirmOrderModal({
  open,
  title = "Confirm order",
  children,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  isLoading = false,
  onClose,
  onConfirm,
}: Props) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const previouslyFocused = useRef<Element | null>(null);

  // Focus management: focus dialog when opened and restore on close
  useEffect(() => {
    if (!open) return;
    previouslyFocused.current = document.activeElement;
    // wait a frame then focus
    requestAnimationFrame(() => {
      dialogRef.current?.focus();
    });
    return () => {
      // restore focus
      try {
        (previouslyFocused.current as HTMLElement | null)?.focus?.();
      } catch {
        /* ignore */
      }
    };
  }, [open]);

  // keyboard handling: Escape and Tab trap
  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === "Escape") {
      e.stopPropagation();
      onClose();
      return;
    }

    if (e.key === "Tab") {
      const node = dialogRef.current;
      if (!node) return;
      const focusable = node.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) {
        e.preventDefault();
        return;
      }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="presentation"
      aria-hidden={false}
    >
      {/* backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirm-dialog-title"
        ref={dialogRef}
        tabIndex={-1}
        onKeyDown={onKeyDown}
        className="relative z-10 max-w-2xl w-full mx-4 md:mx-0 bg-white rounded-lg shadow-2xl p-4 md:p-6 focus:outline-none"
      >
        <div className="flex items-start justify-between gap-4">
          <h3 id="confirm-dialog-title" className="text-lg font-semibold text-orange-800">
            {title}
          </h3>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 rounded hover:bg-stone-100"
          >
            <FiX className="h-5 w-5 text-stone-600" />
          </button>
        </div>

        <div className="mt-3 text-sm text-stone-700">
          {children}
        </div>

        <footer className="mt-6 flex gap-3 justify-end">
          <Button
            onClick={onClose}
            className="bg-white text-orange-800 ring-1 ring-stone-100 hover:bg-stone-50"
            aria-label={cancelLabel}
            disabled={isLoading}
          >
            {cancelLabel}
          </Button>

          <Button
            onClick={() => {
              // call onConfirm and don't close here; parent decides when to close
              void onConfirm();
            }}
            className="bg-white text-orange-800 ring-1 ring-stone-100 hover:bg-stone-50"
            aria-label={confirmLabel}
            isLoading={isLoading}
          >
            {confirmLabel}
          </Button>
        </footer>
      </div>
    </div>
  );
}

