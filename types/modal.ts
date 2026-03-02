import { ReactNode } from "react";

export type ModalConfirmClearProps = {
      open: boolean;
      title?: string;
      children?: ReactNode;
      confirmLabel?: string;
      cancelLabel?: string;
      isLoading?: boolean;
      onClose: () => void;
      onConfirm: () => Promise<void> | void;
}

export type ModalConfirmOrderProps = {
      open: boolean;
      title?: string;
      children?: React.ReactNode;
      confirmLabel?: string;
      cancelLabel?: string;
      isLoading?: boolean;
      onClose: () => void;
      onConfirm: () => Promise<void> | void;
}