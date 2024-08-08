import { useState } from "react";
function Product({ product: { category, name, price } }) {
  const [state, setState] = useState();
  //   console.log(category, name, price);

  return (
    <div className="">
      <img
        className="object-fill w-[327px] h-[212px]"
        src="/assets/images/image-waffle-mobile.jpg"
        alt="square waffles on a plate with strawberries as toppings "
      ></img>
      <div className="flex justify-center my-[-22px]">
        <button className="border flex items-center  py-3 px-7  border-[#AD8A85] rounded-full">
          <img
            className="w-[20px] h-[20px]"
            src="/assets/images/icon-add-to-cart.svg"
            alt="Add to cart icon"
          ></img>
          <span className="m-2">Add to Cart</span>
        </button>
      </div>
      <div className="m-4">
        <h1>{category}</h1>
        <h1>{name}</h1>
        <h1>{price}</h1>
      </div>
    </div>
  );
}

export default Product;
