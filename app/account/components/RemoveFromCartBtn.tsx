// components/RemoveFromCartButton.tsx
"use client"

import { useState, useCallback, memo } from "react";
import AccountActionBtn from "./AccountActionBtn";
import { Spinner } from "@/components/ui";
import { useAuth } from "@/firebase/authProvider";
import { MdDelete } from "react-icons/md";


type Props = {
  userId: string;
  cartItemId: string;
  className?: string;
};

function RemoveFromCartButtonComp({ userId, cartItemId }: Props) {
  const { removeItemFromCart } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = useCallback(async () => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      await removeItemFromCart(userId, cartItemId);
    } catch (err) {
      console.error("Remove item failed:", err);
      setIsLoading(false);
    }
  }, [userId, cartItemId, removeItemFromCart, isLoading]);

  return (
    <AccountActionBtn
      onClick={handleDelete}
      disabled={isLoading}
      aria-label="Remove item from cart"
      title="Remove"
    >
      {isLoading ? (
        <div className="h-6 w-6">
          <Spinner />
        </div>
      ) : (
        <MdDelete className="h-6 w-6" />
      )}
    </AccountActionBtn>
  );
}

export default memo(RemoveFromCartButtonComp);





