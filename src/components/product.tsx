import { useState } from "react";

function Product({ item }) {
  const { image, name, category, price } = item; //destructuring
  const { thumbnail, mobile, tablet, desktop } = image;
  const [count, setCount] = useState();
  // preValue = 0;
  return (
    <>
      <div className="mt-6 flex flex-col ">
        <picture>
          <source media="(width < 768px)" srcSet={tablet} />
          <source media="(width < 375px)" srcSet={mobile} />
          <img className="card-image rounded-2xl" src={desktop} alt={name} />
        </picture>
        <button className="card-button">
          <img src="assets/images/icon-add-to-cart.svg" alt="cart" />
          <span className="truncate">Add to cart</span>
        </button>
        <div className="card-description ">
          <p className="text-[#87635A] text-[14px]">{category}</p>
          <p className="font-semibold text-[16px]">{name}</p>
          <p className="text-[#C73B0F] font-semibold text-[16px]">
            ${price.toFixed(2)}
          </p>
        </div>
      </div>
    </>
  );
}

export default Product;
