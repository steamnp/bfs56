import { useState, useContext } from "react";
import cart from "/assets/images/icon-add-to-cart.svg";
import ButtonOnClick from "../buttonOnClick";
import Picture from "../picture";
import { IItem } from "../../types/product";
import { CartContext } from "../../context/product-context";
import { v4 as uuidv4 } from "uuid";

function Product({ item }: IItem) {
  const { cartItems, setCartItems } = useContext(CartContext);

  const { image, name, category, price } = item;

  const [isActive, setIsActive] = useState(false);

  const addToCart = () => {
    // ... ->Spread Operator -> Take all elements out from the array
    //... preValue -> copy or prserve previous cart
    const cartItemAdded = { id: uuidv4(), name, category, price, image };
    setCartItems((preValue) => [...preValue, cartItemAdded]);
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
