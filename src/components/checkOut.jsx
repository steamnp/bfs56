import React from "react";
import EmptyCartImg from "/assets/images/illustration-empty-cart.svg";

function CheckOut() {
  return (
    <>
      <div className="bg-white rounded-s-xl w-[327px] h-[299px] mt-8">
        <div className="p-6 ">
          <h1 className="font-redhat font-bold text-[24px] text-redColor">
            Your Cart(0)
          </h1>
        </div>
        <div className="flex flex-col place-items-center m-6">
          <img src={EmptyCartImg} alt="Empty cart" className="" />
          <h3 className="font-redhat font-semibold text-[14px] text-lightRed my-4">
            Your added items will appear here
          </h3>
        </div>
      </div>
    </>
  );
}

export default CheckOut;
