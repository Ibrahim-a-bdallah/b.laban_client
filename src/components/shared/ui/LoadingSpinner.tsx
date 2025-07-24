// في ملف LoadingSpinner.tsx جديد
"use client";
import { motion } from "framer-motion";

export const LoadingSpinner = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="flex justify-center items-center py-20"
    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
  >
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full"
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
    />
  </motion.div>
);
