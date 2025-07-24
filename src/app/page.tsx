"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Interactive Hero */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden bg-gray-900">
        {/* Background Animation */}
        <motion.div
          animate={{ x: ["0%", "-20%"] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute inset-0 flex"
        >
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="h-full w-screen flex-shrink-0 bg-gradient-to-r from-gray-800 to-gray-700"
            ></div>
          ))}
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <div className="container relative z-10 h-full flex items-center px-4 md:px-20 mx-auto">
          <div className="w-full md:w-1/2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              B.Laban
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/90 mb-8 max-w-lg"
            >
              Your favorite store for modern fashion at competitive prices
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/shop"
                className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-opacity-90 transition text-sm md:text-base"
              >
                Shop Now
              </Link>
              <Link
                href="/about"
                className="px-6 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition text-sm md:text-base"
              >
                About Us
              </Link>
            </motion.div>
          </div>

          {/* Hero Image - Optimized */}
          <div className="hidden md:block md:w-1/2 pl-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative h-96 w-full"
            >
              <Image
                src="/hero-image.webp" // Using WebP format
                alt="Fashion Model"
                fill
                className="object-cover rounded-lg"
                priority
                quality={85} // Reduced quality for better performance
                sizes="(max-width: 768px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL="data:image/webp;base64,UklGRh4AAABXRUJQVlA4IB4AAAAwAQCdASoKAAoAAUAmJYgCdEf/gAAA/v5YAA=="
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Style Tips */}
      <section className="container py-12 md:py-20 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8 md:mb-12 text-center"
        >
          Style Inspiration
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {["Formal Wear", "Casual Style", "Evening Outfits"].map(
            (title, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className=" rounded-xl mb-4 overflow-hidden relative bg-gray-100">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="h-full w-full"
                  >
                    <Image
                      src={`/style-${i + 1}.webp`} // Using WebP format
                      alt={title}
                      width={2000}
                      height={2000}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      quality={75}
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                      placeholder="blur"
                      blurDataURL="data:image/webp;base64,UklGRh4AAABXRUJQVlA4IB4AAAAwAQCdASoKAAoAAUAmJYgCdEf/gAAA/v5YAA=="
                    />
                  </motion.div>
                </div>
                <h3 className="text-lg md:text-xl font-medium">{title}</h3>
                <p className="text-gray-500 text-sm md:text-base mt-2">
                  Discover {i + 3} looks
                </p>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="flex justify-center items-center bg-gray-100 py-12 md:py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="container max-w-4xl text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Join Our Newsletter</h3>
          <p className="mb-6 text-gray-600">
            Get the latest updates and special offers
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-r-none rounded-l-lg focus:outline-none focus:ring-2 focus:ring-black text-sm md:text-base"
            />
            <button className="bg-black text-white px-4 md:px-6 py-3 rounded-l-none rounded-r-lg hover:bg-gray-800 transition text-sm md:text-base">
              Subscribe
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
