import data from "../data/data.json";
import { formatPrice } from "../utils/formatPrice";
import { useContext } from "react";
import { CartContext } from "../App";

export function Item({ item }) {
  const { cartItems, setCartItems } = useContext(CartContext);

  const { image, name, category, price } = item;
  const { thumbnail, mobile, tablet, desktop } = image;

  const addToCart = () => {
    const newId = cartItems.length + 1;
    const newItem = { id: newId, ...item };
    setCartItems([...cartItems, newItem]);
  };

  // const cleanImageUrl = (image) => {
  //   return image.replace("./", "./");
  // };
  return (
    <>
      <div className="card">
        <picture>
          <source media="(width < 640px)" srcSet={mobile} />
          <source media="(width < 768px)" srcSet={tablet} />
          <img className="rounded-2xl" src={desktop} alt={`Image ${name}`} />
        </picture>
        <div className="card-button" onClick={addToCart}>
          <img src="/assets/images/icon-add-to-cart.svg" alt="Icon cart" />
          <button>Add to Cart</button>
        </div>
        <div className="card-description">
          <p className="">{category}</p>
          <p className="font-bold">{name}</p>
          <p className="text-rose-700 font-semibold">${price}</p>
        </div>
      </div>
    </>
  );
}

export default function ListItem() {
  return (
    <>
      <div>
        <h1>Desserts</h1>
        <div className="list">
          {data.map((item, index) => (
            <Item key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
