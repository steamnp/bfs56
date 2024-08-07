import { useState } from "react";

function Product({ product: { name, category, price } }) {
  const [count, setCount] = useState();

  return (
    <>
      <div className="w-[327px] h-[212px] mb-6">
        <img
          className="rounded-lg"
          src="assets/images/image-waffle-mobile.jpg"
          alt="waffle on the table"
        />
        <div className="flex justify-center -mt-[22px]">
          <button
            onClick={function () {
              setCount(function (preValue) {
                return preValue + 1;
              });
              console.log(count);
            }}
            className="border border-[#AD8A85] rounded-full px-7 py-3 bg-white"
          >
            <div className="flex justify-center">
              <img src="assets/images/icon-add-to-cart.svg" alt="cart icon" />
              <span> Add to Cart </span>
            </div>
          </button>
        </div>
      </div>
      <p className="text-[#87635A] text-[14px]">{name}</p>
      <p className="font-semibold text-[16px]">{category}</p>
      <p className="text-[#C73B0F] font-semibold text-[16px]">{price}</p>
    </>
  );
}

export default Product;
