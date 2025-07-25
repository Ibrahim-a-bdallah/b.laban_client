// Products.tsx (modified)
"use client";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { useEffect } from "react";
import CategoryName from "./Category/Category";
import { motion } from "framer-motion";
import { ShopSkeleton } from "./ShopSkeleton";
import { actGetcategories } from "@/store/categories/categoriesSlice";
import actGetProducts from "@/store/products/act/actGetProducts";

const Products = () => {
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(actGetcategories());
    dispatch(actGetProducts());
  }, [dispatch]);

  if (loading === "pending") return <ShopSkeleton />;
  if (error)
    return <div className="text-red-500 text-center py-10">{error}</div>;
  if (!records.length)
    return <div className="text-center py-10">No categories found</div>;

  return (
    <div className="container px-4 lg:px-20 mx-auto py-6 space-y-6">
      {records.map((record) => (
        <motion.div
          key={record.name.en}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          layout
        >
          <CategoryName title={record.name.en} />
        </motion.div>
      ))}
    </div>
  );
};

export default Products;
