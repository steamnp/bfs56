import cart from "/assets/images/icon-add-to-cart.svg";
import ButtonOnClick from "./buttonOnClick";
import { IItem } from "../types/product";
import { useContext, useState } from "react";
import Picture from "./picture";
import { CartContext } from "../context/product";

//import { getImageURL } from "../utils/imageURL";

function Product({ item }: IItem) {
  const { cartItem, setCartItem } = useContext(CartContext);
  const { image, name, category, price } = item;

  const { mobile, tablet, desktop } = image;

  const [isActive, setIsActive] = useState(false);

  const addToCart = () => {
    const cartItemAdded = { name, category, price };
    setCartItem((preValue) => cartItemAdded);
  };

  return (
    <>
      <div className="mt-6 flex flex-col">
        <Picture image={image} />
        {isActive ? (
          <ButtonOnClick />
        ) : (
          <button className="card-button" onClick={addToCart}>
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

export default Product;
