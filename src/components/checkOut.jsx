import React from "react";
import EmptyCartImg from "/assets/images/illustration-empty-cart.svg";

function CheckOut() {
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

export default CheckOut;
