import React, { useState } from "react";
import Waffle from "/assets/images/image-waffle-mobile.jpg";

function Home() {
  return (
    <div className="m-6">
      <h1 className="font-redhat font-bold text-[40px]">Dessert</h1>
      <img
        src={Waffle}
        alt="Waffle"
        className="w-[327px] h-[212px] rounded-lg"
      />
      <button className="border border-[AD8A85] py-3 px-7 rounded-full">
        Add to Cart
      </button>
      <div className="m-4">
        <p>Waffle</p>
      </div>
    </div>
  );
}

export default Home;
