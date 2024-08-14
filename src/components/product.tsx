import { useContext, useState } from "react";
import cart from "/assets/images/icon-add-to-cart.svg";
import ButtonOnClick from "./buttonOnClick";
//import { IProduct } from "../types/product";
import { IItem } from "../types/product";
import { cartContext } from "../context/product";

//import { getImageURL } from "../utils/imageURL";

//import premitive data type
//string
//number
//boolean
//null is a premitive data type but it is an object in javascript //takes any value
//undefined is a premitive data type but it is an object in javascript //takes any value
//symbol

//non-premitive data type
//function
//object is a non-premitive data type but it is an object in javascript
//array

// function add(firstNumer: number, secondNumber: number): number {
//   return firstNumer + secondNumber;
// }
// console.log(add(1, 2));

function Product({ item }: IItem) {
  const { cartItems, setCartItems } = useContext(cartContext);
  console.log(cartItems);

  const { image, name, category, price } = item;
  const { mobile, tablet, desktop } = image;

  console.log(item.name);

  const [isActive, setIsActive] = useState(false);
  const addTocart = () => {
  const cartItemAdded = {name, category, price};
  setCartItems((preValue) => cartItemAdded)


  // const handleButtonClick = () => {
  //   setIsActive(!isActive);
  // };

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
          <button className="card-button" onClick={addTocart}>
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
