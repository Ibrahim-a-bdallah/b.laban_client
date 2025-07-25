"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import ProductImageCarousel from "./ProductImageCarousel";
import ProductDetails from "./ProductDetails";
import { ImSpinner9 } from "react-icons/im";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { closePopup } from "@/store/popBob/popBobSlice";

const PopBob = () => {
  const dispatch = useAppDispatch();
  const { open, product, loading } = useAppSelector((state) => state.popBob);

  return (
    <Dialog
      open={open}
      onOpenChange={(val) => {
        if (!val) dispatch(closePopup());
      }}
    >
      <DialogContent className="popupContent max-h-[92vh] overflow-y-auto gap-0  p-4 ">
        {loading === "pending" && (
          <div className="absolute top-0 right-0 w-full h-full flex justify-center items-center bg-black/50 z-50 text-white  border-0">
            <ImSpinner9 className="text-5xl animate-spin " />
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {product && (
            <>
              <ProductImageCarousel images={product.images} />
              <ProductDetails product={product} />
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PopBob;
