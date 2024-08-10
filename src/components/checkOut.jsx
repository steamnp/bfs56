import React from "react";
import EmptyCartImg from "/assets/images/illustration-empty-cart.svg";

function CheckOut() {
  return (
    <>
      <div className=" bg-white p-8 h-fit rounded-lg">
        <h2 className="text-primary">Your Cart(0)</h2>
        <div className="flex flex-col items-center m-6">
          <img src={EmptyCartImg} alt="Empty cart" />
          <h3 className="font-redhat font-semibold text-[14px] text-lightRed my-4">
            Your added items will appear here
          </h3>
        </div>
      </div>
    </>
  );
}

export default CheckOut;
