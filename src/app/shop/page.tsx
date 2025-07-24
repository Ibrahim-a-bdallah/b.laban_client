"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { ShopSkeleton } from "@/components/shop/ShopSkeleton";

const Slider = dynamic(
  () => import("@/components/shop/Slider").then((mod) => mod.default),
  {
    loading: () => <div className="h-[350px] bg-gray-100 rounded-lg" />,
    ssr: false,
  }
);

const Products = dynamic(() => import("@/components/shop/Products"), {
  loading: () => <ShopSkeleton />,
  ssr: true,
});

const ShopPage = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pb-10"
    >
      <Slider />
      <Suspense fallback={<ShopSkeleton />}>
        <Products />
      </Suspense>
    </motion.main>
  );
};

export default ShopPage;
