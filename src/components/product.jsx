import { useState } from "react";
import data from "/Users/manish/BF556FRONTED/viteapp1/data.json";

function Product({ item }) {
  const [state, setState] = useState();
  const { image, name, category, price } = item;
  const { desktop, mobile, tablet, thumbnail } = image;

  const cleanImageUrl = (image) => {
    return image.replace("./", "./");
  };
  return (
    <div className="card mb-0">
      <picture>
        <source media="(width < 640px)" srcSet={cleanImageUrl(mobile)} />
        <source media="(width < 768px)" srcSet={cleanImageUrl(tablet)} />
        <img
          className="rounded-2xl "
          src={cleanImageUrl(desktop)}
          alt={`Image ${name}`}
        />
      </picture>
      <div className="flex justify-center ">
        <button className="flex items-center  py-[12.5px] px-7 mt-[-22px] space-x-2 border-2 bg-white border-[#AD8A85] hover:border-rose-900 rounded-full">
          <img
            className="w-[20px] h-[20px]"
            src="/assets/images/icon-add-to-cart.svg"
            alt="Add to cart icon"
          ></img>
          <span className="font-semibold hover:text-rose-900 px-1">
            Add to Cart
          </span>
        </button>
      </div>
      <div className="card-description">
        <h1>{category}</h1>
        <h1>{name}</h1>
        <h1>{price}</h1>
      </div>
    </div>
  );
}

export default Product;
