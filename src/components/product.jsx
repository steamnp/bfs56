import { useState } from "react";

function Product({ product }) {
  const [count, setCount] = useState(0);
  return (
    <>
      <img
        className="w-[327px] h-[212px]"
        src="assets/images/image-waffle-mobile.jpg"
        alt="waffle on the table"
      />
      <div className="flex justify-center items-center">
        <button
          onClick={function () {
            setCount(function (preValue) {
              return preValue + 1;
            });
            console.log(count);
          }}
          className="border rounded-full py-3 px-7 -mt-4 bg-white text-black"
        >
          <i className="fas fa-shopping-cart"></i>Add to Cart
        </button>
      </div>
      <p className="text-rose-500">{product.name}</p>
      <p className="text-rose-900">{product.category}</p>
      <p className="text-red">${product.price}</p>
    </>
  );
}

export default Product;
