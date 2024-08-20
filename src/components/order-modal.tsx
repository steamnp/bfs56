import { useContext } from "react";
import { CartContext } from "../context/product-context";
import CartItem from "./cart/cart-item";

function OrderModal() {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="modal">
      <div className="modal-content">
        {/* <img className="size-12 mb-8" src={iconOrderConfirmed} alt="" /> */}
        <h2 className="text-4xl">Order Confirmed</h2>
        <p>We hope you enjoy your food!</p>
        <div className="bg-rose-50 p-4 my-8">
          <ul
            className={`max-h-48 ${
              cartItems.length > 2
                ? "w-[calc(100%+1rem)] overflow-y-scroll pr-2"
                : ""
            }`}
          >
            {cartItems.map((item, index) => (
              <CartItem item={item} key={index} />
            ))}
          </ul>
          {/* <TotalPrice /> */}
        </div>
        <button className="btn-primary">Start New Order</button>
      </div>
    </div>
  );
}

export default OrderModal;
