import React from "react";
import { useState } from "react";

function Product({ product: { name, category, price } }) {
  console.log(product);
  const [count, setCount] = useState();
  return (
    <>
      <img
        className="w-[327] h-[212px]"
        src="assets/images/image-waffle-mobile.jpg"
        alt="Waffle"
      />
      <div>
        <button
          onClick={function () {
            setCount(function (preValue) {
              return preValue + 1;
            });
            console.log(count);
          }}
          className="border border-[#AD8A85] rounded-full w-[160px] h-[44px] text-[19px] font-semibold"
        >
          Add to Cart
        </button>
        <p>{category}</p>
        <p>{name} </p>
        <p>{price}</p>
      </div>
    </>
  );
}

export default Product;
