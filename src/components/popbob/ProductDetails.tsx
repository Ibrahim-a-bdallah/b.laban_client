"use client";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/store/hook";
import { TProduct } from "@/types";
import Image from "next/image";
import { addtocart } from "@/store/Cart/CartSlice";
import { ImSpinner } from "react-icons/im";

const ProductDetails = ({ product }: { product: TProduct }) => {
  const dispatch = useAppDispatch();
  const [size, setSize] = useState("medium");
  const [quantity, setQuantity] = useState(0);
  const [readmore, setreadmore] = useState(true);
  const [hearticon, setheart] = useState(true);
  const [disableBtn, setdisableBtn] = useState(false);

  // حل مشكلة undefined.en
  const title = product?.title?.en || "Untitled Product";
  const description = product?.description?.en || "No description available";
  const price = product?.price?.eg?.toFixed(2) || "0.00";

  const addToCartHandler = () => {
    if (quantity > 0) {
      setdisableBtn(true);
      dispatch(addtocart(product._id));
    }
  };

  useEffect(() => {
    if (!disableBtn) return;

    const debounc = setTimeout(() => {
      setdisableBtn(false);
    }, 300);

    return () => clearTimeout(debounc);
  }, [disableBtn]);

  // حل مشكلة الصور الفارغة
  const heartIconSrc = hearticon ? "/heart.svg" : "/heart-svgrepo-com.svg";
  const fallbackHeartIcon = "/default-heart.svg"; // يجب إضافة صورة افتراضية

  return (
    <div className="w-full flex flex-col gap-2 md:max-h-[400px]">
      <div className="flex md:flex-col justify-between items-center md:items-start">
        <h2 className="text-[16px] font-bold">{title}</h2>
        <p className="text-[14px] md:text-lg font-semibold">{`El${price}`}</p>
      </div>

      <div>
        <p className="font-semibold mb-1">Available in:</p>
        <div className="flex w-full justify-between items-start flex-col">
          <div className="flex gap-2">
            {["small", "medium", "large"].map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={`px-3 py-1 border rounded-full text-sm cursor-pointer ${
                  size === s
                    ? "bg-[#35AFA0] text-white"
                    : "border-gray-300 text-gray-600"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-row-reverse justify-between items-center md:flex-col gap-2">
        <div className="flex items-center gap-7 justify-center bg-[#F3F5F9] rounded p-1 w-full">
          <button
            onClick={() => setQuantity((q) => Math.max(0, q - 1))}
            className="w-8 h-8 text-lg rounded cursor-pointer"
          >
            −
          </button>

          <span>{quantity}</span>

          <button
            onClick={() =>
              setQuantity((q) => Math.min(product.stock || 0, q + 1))
            }
            className="w-8 h-8 text-lg rounded cursor-pointer"
          >
            +
          </button>
        </div>

        <button
          onClick={addToCartHandler}
          className="bg-[#35AFA0] text-white py-2 rounded-lg cursor-pointer w-full disabled:opacity-50"
          disabled={quantity === 0 || disableBtn}
        >
          {disableBtn ? (
            <div className="flex justify-center items-center gap-2">
              <ImSpinner className="w-30 h-30 animate-spin" /> loading...
            </div>
          ) : (
            "Add to Cart"
          )}
        </button>
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => setheart(!hearticon)}
          className="flex w-[50%] justify-center items-center gap-2 hover:bg-[#f5f5f5] border px-4 py-1 rounded-lg cursor-pointer"
        >
          <Image
            loading="lazy"
            src={heartIconSrc || fallbackHeartIcon}
            alt={hearticon ? "heart" : "filled heart"}
            width={20}
            height={20}
            onError={(e) => {
              (e.target as HTMLImageElement).src = fallbackHeartIcon;
            }}
          />
          <span>Wishlist</span>
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {(product.tags || []).map((tag, i) => (
          <span key={i} className="bg-gray-100 text-xs px-2 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      <div className="w-full">
        <h3 className="font-semibold text-[14px] mb-1">Product Details:</h3>
        <span
          className={`text-sm text-gray-600 ${
            readmore ? "line-clamp-1 md:line-clamp-1" : ""
          }`}
        >
          {description}
        </span>
        <span
          className="text-[#35AFA0] cursor-pointer ml-2"
          onClick={() => setreadmore(!readmore)}
        >
          {readmore ? "Read More" : "Less"}
        </span>
      </div>
    </div>
  );
};

export default ProductDetails;
