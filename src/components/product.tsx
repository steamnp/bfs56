import { useState } from "react";
import cart from "/assets/images/icon-add-to-cart.svg";
import ButtonOnClick from "./buttonOnClick";
import { IItem } from "../types/product";
// import { getImageURL } from "../utils/imageURL";

function product({ item }: IItem) {
  const { image, name, category, price } = item;
  const { mobile, tablet, desktop } = image;

  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className="mt-6 flex flex-col">
        <picture>
          <source media="(width < 640px)" srcSet={mobile} />
          <source media="(width < 768px)" srcSet={tablet} />
          <img
            className="card-image rounded-2xl"
            src={desktop}
            alt={`Image ${name}`}
          />
        </picture>

        {isActive ? (
          <ButtonOnClick />
        ) : (
          <button className="card-button" onClick={handleButtonClick}>
            <img src={cart} alt="Add to Cart" />
            <span className="truncate">Add to Cart</span>
          </button>
        )}

        <div className="card-description">
          <p className="">{category}</p>
          <p className="font-semibold">{name}</p>
          <p className="text-rose-700 font-semibold">${price.toFixed(2)}</p>
        </div>
      </div>
    </>
  );
}

export default product;
