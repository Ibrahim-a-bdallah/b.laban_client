"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { TProduct } from "@/types";
import { useAppDispatch } from "@/store/hook";
import actGetProductById from "@/store/popBob/actGetProductById";
import { openPopup } from "@/store/popBob/popBobSlice";
import { fadeIn } from "@/utils/motion";

const DEFAULT_IMAGE = "/img-placeholder.svg";

const Product = (product: TProduct & { index?: number }) => {
  const dispatch = useAppDispatch();
  const { _id, title, description, images, price, index = 0 } = product;

  const handleClick = () => {
    if (_id) {
      dispatch(actGetProductById(_id));
      dispatch(openPopup(_id));
    }
  };

  // تحديد مصدر الصورة
  const imageSrc = images?.[0] ? images[0] : DEFAULT_IMAGE;

  return (
    <motion.article
      variants={fadeIn("up", 0.1 * index)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      onClick={handleClick}
      className="flex justify-between items-center p-4 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
    >
      <div className="flex items-center gap-4">
        <motion.div
          className="relative w-16 h-16 rounded-full overflow-hidden shrink-0"
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src={imageSrc}
            alt={title.en || "Product image"}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 64px, 64px"
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement;
              target.onerror = null;
              target.src = DEFAULT_IMAGE;
            }}
          />
        </motion.div>
        <div>
          <h3 className="font-bold">{title.en || "Product Title"}</h3>
          <p className="text-sm text-gray-500 line-clamp-2">
            {description?.en || "Product description"}
          </p>
        </div>
      </div>
      <span className="font-medium">
        {price?.eg ? `${price.eg} EGP` : "N/A"}
      </span>
    </motion.article>
  );
};

export default Product;
