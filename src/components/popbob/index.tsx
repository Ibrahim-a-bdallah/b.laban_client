"use client";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ProductImageCarousel from "./ProductImageCarousel";
import ProductDetails from "./ProductDetails";
import { useEffect, useMemo } from "react";
import actGetProductById from "@/store/popBob/actGetProductById";
import { ImSpinner9 } from "react-icons/im";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { closePopup } from "@/store/popBob/popBobSlice";

const PopBob = () => {
  const dispatch = useAppDispatch();
  const { open, loading, selectedProductId, product, error } = useAppSelector(
    (state) => state.popBob
  );

  // تحسين الأداء: حفظ المنتج المحدد في memo
  const selectedProduct = useMemo(() => {
    return product?._id === selectedProductId ? product : null;
  }, [product, selectedProductId]);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      dispatch(closePopup());
    }
  };

  useEffect(() => {
    if (open && selectedProductId && !selectedProduct) {
      dispatch(actGetProductById(selectedProductId));
    }
  }, [open, selectedProductId, selectedProduct, dispatch]);

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="popupContent max-h-[92vh] overflow-y-auto gap-0 p-4">
        {/* حالة التحميل */}
        {loading === "pending" && (
          <div className="absolute inset-0 flex justify-center items-center bg-black/50 z-50 text-white">
            <ImSpinner9 className="text-5xl animate-spin" />
          </div>
        )}

        {/* حالة الخطأ */}
        {error && (
          <div className="text-center py-8 text-red-500">
            حدث خطأ أثناء جلب بيانات المنتج
          </div>
        )}

        {/* عرض البيانات عند توفرها */}
        {selectedProduct && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProductImageCarousel images={selectedProduct.images || []} />
            <ProductDetails product={selectedProduct} />
          </div>
        )}

        {/* حالة عدم وجود بيانات رغم فتح البوب أب */}
        {open && !selectedProduct && loading === "idle" && (
          <div className="text-center py-8">
            لا توجد بيانات متاحة لهذا المنتج
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PopBob;
