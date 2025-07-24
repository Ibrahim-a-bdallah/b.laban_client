"use client";
import { TProduct } from "@/types";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";

type CartItemsListProps = {
  products: TProduct[];
  changeQuantity: (id: string, quantity: number) => void;
  removeProduct: (id: string) => void;
};

const CartItemsList = ({
  products,
  changeQuantity,
  removeProduct,
}: CartItemsListProps) => {
  return (
    <div className="space-y-4">
      {products.map((item) => (
        <div
          key={item._id}
          className="flex items-center gap-4 p-4 border rounded-lg"
        >
          <div className="relative w-20 h-20">
            <Image
              src={item.images[0]}
              alt={item.title.en}
              fill
              className="object-cover rounded"
            />
          </div>
          <div className="flex-1">
            <h3 className="font-medium">{item.title.en}</h3>
            <p className="text-sm text-gray-500">{item.price.eg} EGP</p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => changeQuantity(item._id, item.quantity - 1)}
              disabled={item.quantity <= 1}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <Input
              type="number"
              value={item.quantity}
              onChange={(e) => changeQuantity(item._id, +e.target.value)}
              className="w-12 text-center"
              min="1"
            />
            <Button
              variant="outline"
              size="icon"
              onClick={() => changeQuantity(item._id, item.quantity + 1)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => removeProduct(item._id)}
          >
            <Trash2 className="h-5 w-5 text-red-500" />
          </Button>
        </div>
      ))}
    </div>
  );
};

export default CartItemsList;
