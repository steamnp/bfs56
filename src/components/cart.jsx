import React from "react";

function Cart() {
  let count = 1;
  return (
    <div className="card mb-4 min-h-4">
      <div>
        <h1 className="text-[24px] text-red-600 font-black">
          Your Cart ({count})
        </h1>
      </div>
      <svg>
        <image
          className=" py-[80px]"
          href="/assets/images/illustration-empty-cart.svg"
        ></image>
      </svg>
    </div>
  );
}

export default Cart;
