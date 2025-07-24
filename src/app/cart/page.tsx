"use client";
import Heading from "@/components/Heading/heading";
import SubTotal from "@/components/cart/SubTotal";
// import CartItemsList from "@/components/eCommerce/CartItemsList/CartItemsList";
// import Loading from "@components/feedback/loading/Loading";
import LottieHandler from "@/components/shared/ui/LottieHandler";
// import CheckOut from "@components/paymob/CheckOut/CheckOut";
import { useCart } from "./useCart";
import CartItemsList from "@/components/cart/CartItem";

const Cart = () => {
  const { products, total, removeProduct, changedQuantity, error, loading } =
    useCart();
  return (
    <>
      <Heading title="Cart" />
      {/* <Loading loading={loading} error={error} type="cart"> */}
      {products.length > 0 ? (
        <>
          <CartItemsList
            products={products}
            changeQuantity={changedQuantity}
            removeProduct={removeProduct}
          />
          <SubTotal total={total} />
          {/* <CheckOut total={total} /> */}
        </>
      ) : (
        <LottieHandler styled="" type="empty" message="Your Cart is Empty" />
      )}
      {/* </Loading> */}
    </>
  );
};

export default Cart;
