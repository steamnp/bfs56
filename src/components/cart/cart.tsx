import React, { useContext, useState } from "react";
import { CartContext } from "../../context/product-context";
import OrderModal from "../product/order-modal";
import CartItem from "./cart-item";
import EmptyCartImg from "/assets/images/illustration-empty-cart.svg";

function Cart() {
  const { cartItems, setCartItems } = useContext(CartContext);

  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white p-8 h-fit rounded-lg">
        <h2 className="text-primary">Your Cart ({cartItems.length})</h2>
        {cartItems.length > 0 ? (
          <div>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
            <div className="flex justify-between mt-4 text-lg">
              <p className="text-sm">Order Total:</p>
              <p className="text-2xl font-bold">
                ${cartItems.reduce((total, item) => total + item.price, 0)}
              </p>
            </div>
            <div className="flex mt-4 w-full rounded-lg shadow-md bg-rose-50">
              <img
                className="pl-4 py-2"
                src="assets/images/icon-carbon-neutral.svg"
                alt="icon-carbon-neutral"
              />
              <p className="font-redhat flex py-2 text-rose-900 flex-1">
                This is a{" "}
                <span className="font-semibold px-1">carbon-neutral</span>{" "}
                delivery
              </p>
            </div>
            <div className="flex justify-center mt-6">
              <button
                className="font-redhat font-semibold border rounded-full py-3 px-6 sm:px-10 bg-primary text-white"
                onClick={() => {
                  console.log("Button Clicked");
                  setIsOrderModalOpen(true);
                }}
              >
                Confirm Order
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center mt-4">
            <img src={EmptyCartImg} alt="No items in cart" />
            <p>Your added items will appear here</p>
          </div>
        )}
      </div>
      {isOrderModalOpen && <OrderModal />}
    </>
  );
}

export default Cart;
