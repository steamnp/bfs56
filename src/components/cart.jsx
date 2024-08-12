import React from "react";

function Cart() {
  let count = 1;
  return (
    <div className="bg-white p-8 h-fit rounded-lg">
      <div>
        <h2 className="text-primary text-red-600 font-black">
          Your Cart ({count})
        </h2>
      </div>
      <svg>
        <image
          className="py-[80px]"
          href="/assets/images/illustration-empty-cart.svg"
        ></image>
      </svg>
    </div>
  );
}

export default Cart;
