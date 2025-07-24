import { motion } from "framer-motion";
import Link from "next/link";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <div className="space-y-20">
      {/* Full-screen Hero */}
      <section className="relative h-screen max-h-[800px] flex items-center">
        <div className="absolute inset-0 bg-gray-900 opacity-40"></div>
        <div className="container relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-lg mb-2"
          >
            مجموعة ربيع 2023
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            أناقة لا تنتهي
          </motion.h1>
          <Link
            href="/new-arrivals"
            className="inline-block border-2 border-white px-10 py-3 hover:bg-white hover:text-black transition"
          >
            اكتشف المجموعة
          </Link>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="container">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-100 h-96 rounded-xl p-8 flex flex-col justify-end">
            <h3 className="text-2xl font-bold mb-2">للرجال</h3>
            <Link href="/men" className="underline">
              تصفح القسم →
            </Link>
          </div>
          <div className="bg-gray-100 h-96 rounded-xl p-8 flex flex-col justify-end">
            <h3 className="text-2xl font-bold mb-2">للنساء</h3>
            <Link href="/women" className="underline">
              تصفح القسم →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-12">آراء عملائنا</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl italic mb-6">
              أفضل متجر للفساتين في المنطقة، الجودة رائعة والأسعار مناس
            </p>
            <p className="font-medium">- سارة محمد</p>
          </div>
        </div>
      </section>

    </div>
  );
}
