"use client";
import Heading from "@/components/Heading/heading";
import SubTotal from "@/components/cart/SubTotal";
import LottieHandler from "@/components/shared/ui/LottieHandler";
import { useCart } from "./useCart";
import CartItemsList from "@/components/cart/CartItem";

const Cart = () => {
  const { products, total, removeProduct, changedQuantity, error, loading } =
    useCart();

  if (error) return <LottieHandler type={"error"} />;
  return (
    <>
      {loading === "pending" ? (
        <LottieHandler type={"fill"} />
      ) : products.length > 0 ? (
        <div className="px-3 container mx-auto lg:px-20">
          <Heading title="Cart" />
          <CartItemsList
            products={products}
            changeQuantity={changedQuantity}
            removeProduct={removeProduct}
          />
          <SubTotal total={total} />
          {/* <CheckOut total={total} /> */}
        </div>
      ) : (
        <LottieHandler type="empty" message="Your Cart is Empty" />
      )}
    </>
  );
};

export default Cart;
