import { useState } from "react";
function Product({ product: { category, name, price } }) {
  const [state, setState] = useState();
  console.log(category, name, price);

  return (
    <div className="">
      <img
        className="object-fill w-[327px] h-[212px]"
        src="/assets/images/image-waffle-mobile.jpg"
        alt="square waffles on a plate with strawberries as toppings "
      ></img>
      <div className="flex justify-center">
        <button className="border flex items-center gap-2 py-3 px-7 border-[#AD8A85] rounded-full">
          <img
            className="w-[20px] h-[20px]"
            src="public/assets/images/icon-add-to-cart.svg"
            alt="Add to cart icon"
          ></img>
          Add to Cart
        </button>
      </div>
      <div>
        <h1>{category}</h1>
        <h1>{name}</h1>
        <h1>{price}</h1>
      </div>
    </div>
  );
}

export default Product;
