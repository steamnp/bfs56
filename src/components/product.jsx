import { useState } from "react";

function Product({ item }) {
  const { image, name, category, price } = item; //destructuring
  const { thumbnail, mobile, tablet, desktop } = image;
  const [count, setCount] = useState();
  // preValue = 0;
  return (
    <>
      <div className="mt-8 mb-6">
        <div className="w-[327px] h-[234px] mb-4">
          <img className="rounded-lg" src={mobile} alt={name} />
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
              <div className="flex justify-center gap-2">
                <img src="assets/images/icon-add-to-cart.svg" alt="cart icon" />
                <span> Add to Cart </span>
              </div>
            </button>
          </div>
        </div>

        <p className="text-[#87635A] text-[14px]">{category}</p>
        <p className="font-semibold text-[16px]">{name}</p>
        <p className="text-[#C73B0F] font-semibold text-[16px]">
          ${price.toFixed(2)}
        </p>
      </div>
    </>
  );
}

export default Product;
