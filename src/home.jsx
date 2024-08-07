import { useState } from "react";

function Home() {
  const [display, setDisplay] = useState();

  return (
    <div className="m-6">
      <h1 className="font-redhat font-bold text-[40px]">Desserts</h1>
      <img
        className="object-fill w-[327px] h-[212px]"
        src="/assets/images/image-waffle-mobile.jpg"
        alt="square waffles on a plate with strawberries on top "
      ></img>
      <button className="border flex items-center gap-2 py-3 px-7 border-[#AD8A85] rounded-full">
        <img
          className="w-[20px] h-[20px]"
          src="public/assets/images/icon-add-to-cart.svg"
          alt="Add to cart icon"
        ></img>
        Add to Cart
      </button>
      <div>
        <h1>Waffle</h1>
        <h1>Waffle with Berries</h1>
        <h1>$6.50</h1>
      </div>
    </div>
  );
}

export default Home;
