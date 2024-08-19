import React from "react";
import EmptyCartImg from "/assets/images/illustration-empty-cart.svg";
import { CartContext } from "../context/product-context";
import iconRemoveItem from "/assets/images/icon-remove-item.svg";

function Cart() {
  const { cartItems, setCartItems } = useContext(CartContext);

  const removeCartItems = (id) => {
    const newCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartItems);
  };

  return (
    <>
      <div className=" bg-white p-8 h-fit rounded-lg">
        <h2 className="text-primary">Your Cart(0)</h2>
        <div className="flex flex-col items-center mt-4">
          <img src={EmptyCartImg} alt="No items in cart" />
          <p>Your added items will appear here</p>
        </div>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center py-4 border-b"
            >
              <div className="flex flex-col">
                <p className="font-bold mb-2">{item.name}</p>
                <div className="flex gap-2 text-primary">
                  <p className="font-bold mr-2">2x</p>
                  <p className="text-rose-400">@ ${item.price}</p>
                  <p className="text-rose-400 font-semibold">
                    ${item.price * 2}
                  </p>
                </div>
              </div>
              <div>
                <img
                  onClick={() => removeCartItems(item.id)}
                  className="cursor-pointer"
                  src={iconRemoveItem}
                  alt="Delete"
                  title="Delete"
                />
              </div>
            </li>
          ))
        ) : (
          <div className="flex flex-col items-center mt-4">
            <img src={EmptyCartImg} alt="No items in cart" />
            <p>Your added items will appear here</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
