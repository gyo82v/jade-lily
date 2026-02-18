// components/ui/ConfirmClearModal.tsx
"use client";

import React, { useEffect, useRef, KeyboardEvent } from "react";
import { Button } from "@/components";
import { FiX, FiAlertTriangle } from "react-icons/fi";

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

export default function ConfirmClearModal({
  open,
  title = "Clear past orders",
  children = "This will permanently remove all your past orders. This action cannot be undone. Are you sure?",
  confirmLabel = "Clear all",
  cancelLabel = "Cancel",
  isLoading = false,
  onClose,
  onConfirm,
}: Props) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const previouslyFocused = useRef<Element | null>(null);

  // focus management
  useEffect(() => {
    if (!open) return;
    previouslyFocused.current = document.activeElement;
    requestAnimationFrame(() => dialogRef.current?.focus());
    return () => {
      try {
        (previouslyFocused.current as HTMLElement | null)?.focus?.();
      } catch {}
    };
  }, [open]);

  // keyboard + tab trap
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
    <div className="fixed inset-0 z-50 flex items-center justify-center" role="presentation" aria-hidden={false}>
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={onClose} />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirm-clear-title"
        ref={dialogRef}
        tabIndex={-1}
        onKeyDown={onKeyDown}
        className="relative z-10 max-w-md w-full mx-4 bg-white rounded-lg shadow-2xl p-4 md:p-6 focus:outline-none"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <FiAlertTriangle className="h-6 w-6 text-amber-500" aria-hidden="true" />
            <h3 id="confirm-clear-title" className="text-lg font-semibold text-orange-800">
              {title}
            </h3>
          </div>

          <button onClick={onClose} aria-label="Close dialog" className="p-2 rounded hover:bg-stone-100">
            <FiX className="h-5 w-5 text-stone-600" />
          </button>
        </div>

        <div className="mt-3 text-sm text-stone-700">{children}</div>

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
