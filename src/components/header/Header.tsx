"use client";

import Image from "next/image";
import { AlignJustify, ShoppingCart, User } from "lucide-react";
import SideMenu from "./SideMenu";
import { useState, useEffect } from "react";
import Navigation from "../Navigation";
import UserIcon from "../UserIcon";
import Link from "next/link";
import { useAppSelector } from "@/store/hook";

const Header = () => {
  const [open, setopen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const { items } = useAppSelector((state) => state.cart);

  const handleClick = () => {
    setopen(!open);
  };
  useEffect(() => {
    const qount = Object.values(items).reduce((sum, value) => sum + value, 0);
    setCartItemsCount(qount);
  }, [items]);
  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);

  return (
    <div
      className={`w-full lg:px-20 flex justify-center items-center bg-white sticky top-0 z-50 transition-transform duration-300 ${
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="container p-3 flex justify-between items-center">
        <button
          onClick={handleClick}
          className="md:hidden"
          aria-label="Open menu"
        >
          <AlignJustify className="text-gray-800" />
        </button>
        <Link href="/">
          <div className="flex justify-center items-center gap-2 flex-1 md:flex-none">
            <Image
              src="/B_Laban.jpeg"
              width={30}
              height={30}
              alt="Logo"
              className="rounded-full"
              priority
            />
            <h2 className="font-bold text-lg">B.Laban</h2>
          </div>
        </Link>

        <div className="hidden md:block">
          <Navigation />
        </div>
        <div className="flex items-center gap-4 ">
          <Link href="/cart" className="relative" aria-label="Shopping cart">
            <ShoppingCart className="text-gray-800" />
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </Link>

          <UserIcon />
        </div>
      </div>
      <SideMenu open={open} onOpenChange={() => setopen(!open)} />
    </div>
  );
};

export default Header;
