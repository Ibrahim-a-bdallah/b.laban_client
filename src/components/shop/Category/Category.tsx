"use client";
import { useAppSelector } from "@/store/hook";
import { useState } from "react";
import Product from "./Product";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const MAX_VISIBLE_PRODUCTS = 3;

const CategoryName = ({ title }: { title: string }) => {
  const { products, loading } = useAppSelector((state) => state.products);
  const [isOpen, setIsOpen] = useState(false);

  const categoryProducts =
    products?.filter((product) => product.category.en === title) || [];

  const visibleProducts = isOpen
    ? categoryProducts
    : categoryProducts.slice(0, MAX_VISIBLE_PRODUCTS);

  return (
    <div className="mb-8 bg-white rounded-lg shadow-sm p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">{title}</h2>

        {categoryProducts.length > MAX_VISIBLE_PRODUCTS && (
          <Button
            variant="ghost"
            size="sm"
            className="w-9 p-0"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </Button>
        )}
      </div>

      <div className="space-y-3">
        {loading === "pending" ? (
          <AnimatePresence>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`skeleton-${i}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex justify-between items-center p-4"
              >
                <div className="flex items-center gap-4">
                  <Skeleton className="w-16 h-16 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[200px]" />
                    <Skeleton className="h-3 w-[150px]" />
                  </div>
                </div>
                <Skeleton className="h-4 w-[50px]" />
              </motion.div>
            ))}
          </AnimatePresence>
        ) : (
          <AnimatePresence>
            {visibleProducts.map((product, index) => (
              <motion.div
                key={`${product._id}-${index}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                layout
              >
                <Product {...product} />
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>

      {categoryProducts.length > MAX_VISIBLE_PRODUCTS && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              {categoryProducts
                .slice(MAX_VISIBLE_PRODUCTS)
                .map((product, index) => (
                  <motion.div
                    key={`${product._id}-${index + MAX_VISIBLE_PRODUCTS}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    layout
                  >
                    <Product {...product} />
                  </motion.div>
                ))}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default CategoryName;
