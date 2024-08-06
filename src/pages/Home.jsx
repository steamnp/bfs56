import React, { useState } from "react";
import Waffle from "/assets/images/image-waffle-mobile.jpg";

function Home() {
  return (
    <div className="m-6">
      <h1 className="font-redhat font-bold text-[40px]">Desserts</h1>
      <img src={Waffle} alt="Waffle" className="w-[327px] h-[212px]" />
      <button className="border border-[AD8A85] rounded-full py-3 px-7 ">
        Add to Cart
      </button>
    </div>
  );
}

export default Home;
