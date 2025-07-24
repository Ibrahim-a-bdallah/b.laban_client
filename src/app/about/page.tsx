"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaLeaf,
  FaChartLine,
  FaMapMarkerAlt,
  FaStar,
  FaQuoteLeft,
} from "react-icons/fa";
import { IoIosPin } from "react-icons/io";

// Base64 encoded blur placeholder (small 20x20 image)
const blurDataURL =
  "data:image/webp;base64,UklGRh4AAABXRUJQVlA4IB4AAAAwAQCdASoKAAoAAUAmJYgCdEf/gAAA/v5YAA==";

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden bg-gray-900">
        <Image
          src="/about-hero.webp"
          alt="Blaban Factory"
          fill
          className="object-cover opacity-70"
          priority
          quality={80}
          sizes="100vw"
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
        <div className="container relative z-10 h-full flex flex-col justify-center text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto"
          >
            From a small Alexandria factory to a market leader in Egyptian
            desserts
          </motion.p>
        </div>
      </section>

      {/* History Timeline */}
      <section className="container py-16 px-9 mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Timeline Item 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 relative pl-10 border-l-2 border-blue-100"
          >
            <div className="absolute left-0 top-0 -ml-6 bg-blue-100 p-3 rounded-full">
              <FaMapMarkerAlt className="text-blue-600 text-xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              2021: Humble Beginnings
            </h3>
            <p className="text-gray-600">
              Founded in Alexandria with a focus on traditional Egyptian
              desserts like rice pudding, couscous, and Om Ali. Our small
              factory quickly gained local recognition for quality.
            </p>
          </motion.div>

          {/* Timeline Item 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-12 relative pl-16 border-l-2 border-green-100"
          >
            <div className="absolute left-0 top-0 -ml-6 bg-green-100 p-3 rounded-full">
              <FaLeaf className="text-green-600 text-xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              2022: Ashtouta Innovation
            </h3>
            <p className="text-gray-600">
              Launched our signature product that revolutionized the market.
              Ashtouta&apos;s unique formula became an instant bestseller,
              increasing our revenue by 300%.
            </p>
          </motion.div>

          {/* Timeline Item 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="relative pl-16 border-l-2 border-purple-100"
          >
            <div className="absolute left-0 top-0 -ml-6 bg-purple-100 p-3 rounded-full">
              <FaChartLine className="text-purple-600 text-xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              2023-Present: National Expansion
            </h3>
            <p className="text-gray-600">
              Expanded distribution to all major cities in Egypt. Currently
              supplying 50+ retailers with plans to enter international markets
              next year.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Growth Statistics */}
      <section className="bg-blue-50  md:px-20 ">
        <div className="container mx-auto pt-3">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            By The Numbers
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: "300%", label: "Revenue Growth (2021-2023)" },
              { value: "50+", label: "Retail Partners" },
              { value: "1M+", label: "Products Sold Monthly" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl text-center shadow-sm"
              >
                <p className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="container py-16 px-4 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Our Traditional Products
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Rice Pudding",
              desc: "Creamy traditional dessert with authentic flavor",
              img: "/rice-pudding.webp",
            },
            {
              name: "Couscous",
              desc: "Sweet semolina with nuts and coconut",
              img: "/couscous.webp",
            },
            {
              name: "Om Ali",
              desc: "Egyptian bread pudding with milk and nuts",
              img: "/om-ali.webp",
            },
            {
              name: "Ice Cream",
              desc: "Rich and creamy traditional flavors",
              img: "/ice-cream.webp",
            },
          ].map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="aspect-square relative">
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  className="object-cover"
                  quality={75}
                  sizes="(max-width: 768px) 50vw, 25vw"
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16 mx-auto">
        <div className="container px-4 mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            What Our Customers Say
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Blaban's Ashtouta is unlike anything else in the market. My family can't get enough!",
                author: "Ahmed Mohamed",
                rating: 5,
              },
              {
                quote:
                  "The authentic taste of their rice pudding takes me back to my childhood.",
                author: "Mariam Hassan",
                rating: 5,
              },
              {
                quote:
                  "Consistently high quality and excellent customer service. A true Egyptian success story.",
                author: "Youssef Ali",
                rating: 4,
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <div className="flex mb-4 text-yellow-400">
                  {[...Array(5)].map((_, j) => (
                    <FaStar
                      key={j}
                      className={
                        j < testimonial.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
                <FaQuoteLeft className="text-gray-300 text-2xl mb-4" />
                <p className="text-gray-600 italic mb-6">{testimonial.quote}</p>
                <p className="font-semibold">— {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Distribution Map */}
      <section className="container py-16 px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl overflow-hidden shadow-lg"
        >
          <div className="md:flex">
            <div className="md:w-1/2 bg-gray-100 p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-6">Our Reach</h2>
              <p className="text-gray-600 mb-6">
                From our humble beginnings in Alexandria, we now serve customers
                across Egypt with plans for international expansion.
              </p>
              <ul className="space-y-3">
                {[
                  "Alexandria HQ",
                  "Cairo",
                  "Giza",
                  "Luxor",
                  "Aswan",
                  "Red Sea",
                ].map((location, i) => (
                  <li key={i} className="flex items-center">
                    <IoIosPin className="text-blue-500 mr-2" />
                    <span>{location}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 aspect-[4/3] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.075169831495!2d29.918486315131!3d31.20192598147039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c38a0a1f4f3d%3A0x1e3b9d3a3b3b3b3b!2sAlexandria%2C%20Egypt!5e0!3m2!1sen!2seg!4v1620000000000!5m2!1sen!2seg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Blaban Location"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Mission Statement */}
      <section className="bg-blue-600 text-white py-16 mx-auto">
        <div className="container px-4 text-center mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg md:text-xl mb-8">
              To preserve Egypt&apos;s rich dessert heritage while innovating
              for modern tastes, using only the finest ingredients to create
              authentic, high-quality products that bring people together.
            </p>
            <Link
              href="/shop"
              className="inline-block px-8 py-3 bg-white text-blue-600 rounded-full font-medium hover:bg-opacity-90 transition"
            >
              Explore Our Products
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
