import React, { useState } from "react";
import Waffle from "/assets/images/image-waffle-mobile.jpg";

function Home() {
  const [cart, setCart] = useState([]);
  return (
    <div className="m-6 w-[375px]">
      <div className="flex flex-col">
        <h1 className="font-redhat font-bold text-[40px]">Dessert</h1>
        <img
          src={Waffle}
          alt="Waffle"
          className="w-[327px] h-[212px] rounded-lg"
        />
        <div className="flex justify-center w-[327px] mt-[-22px]">
          <button
            className="border border-[AD8A85] py-3 px-7 rounded-full "
            onClick={function () {}}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="m-4 w-[327px]">
        <p className="font-redhat text-[14px] text-gray">Waffle</p>
        <h1 className="font-redhat font-regular text-[16px] font-color-[260F08] ">
          Waffle with Berries
        </h1>
      </div>
    </div>
  );
}

export default Home;
