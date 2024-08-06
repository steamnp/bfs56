import React from "react";

function Home() {
  return (
    <div className="m-6">
      <h1 className="font-redhat font-bold text-[40px]">Desserts</h1>
      <img
        className="object-fill w-[327px] h-[212px]"
        src="public/assets/images/image-waffle-mobile.jpg"
        alt="square waffles on a plate with strawberries on top "
      ></img>
      <button className="border py-3 px-7 border-[#AD8A85] rounded-full">
        Add to Cart
      </button>
    </div>
  );
}

export default Home;
