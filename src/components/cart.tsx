import EmptyCartImg from "/assets/images/illustration-empty-cart.svg";
import { useContext } from "react";
import { cartContext } from "../context/product";

function Cart() {
  const value = useContext(cartContext);
  return (
    <>
      <div className=" bg-white p-8 h-fit rounded-lg">
        <h2 className="text-primary">Your Cart(0)</h2>
        <div className="flex flex-col items-center mt-4">
          <img src={EmptyCartImg} alt="No items in cart" />
          <p>Your added items will appear here</p>
        </div>
      </div>
    </>
  );
}

export default Cart;
