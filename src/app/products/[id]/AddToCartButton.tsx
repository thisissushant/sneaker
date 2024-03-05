"use client";

import { Product } from "@prisma/client";
import { useState, useTransition } from "react";

interface AddToCartButtonProps {
  productId: string;
  incrimentProductQuantity: (productId: string) => Promise<void>;
}
export default function AddToCartButton({
  productId,
  incrimentProductQuantity,
}: AddToCartButtonProps) {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);
  return (
    <div className=" flex items-center gap-2">
      <button
        className="btn btn-primary"
        onClick={() => {
          setSuccess(false);
          startTransition(async () => {
            await incrimentProductQuantity(productId);
            setSuccess(true);
          });
        }}
      >
        Add to Cart
      </button>
      {isPending && <span className="loading loading-ring loading-md" />}
      {isPending && success && (
        <span className="text-success">Added to Cart</span>
      )}
    </div>
  );
}
