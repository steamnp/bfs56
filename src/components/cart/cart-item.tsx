import { useContext } from "react";
import { CartContext } from "../../context/product-context";
import iconRemoveItem from "/assets/images/icon-remove-item.svg";
import { ItemType } from "../../types/product.ts";

function CartItem({ item }: { item: ItemType }) {
  const { cartItems, setCartItems } = useContext<CartContextType>(CartContext);

  const removeCartItems = (id) => {
    const newCartItems = cartItems.filter((item: ItemType) => item.id !== id);
    setCartItems(newCartItems);
  };
  return (
    <li
      key={item.id}
      className="flex justify-between items-center py-4 border-b"
    >
      <div className="flex flex-col">
        <p className="font-bold mb-2">{item.name}</p>
        <div className="flex gap-2 text-primary">
          <p className="font-bold mr-2">2x</p>
          <p className="text-rose-400">@ ${item.price}</p>
          <p className="text-rose-400 font-semibold">${item.price * 2}</p>
        </div>
      </div>
      <div>
        <img
          onClick={() => removeCartItems(item.id)}
          className="cursor-pointer"
          src={iconRemoveItem}
          alt="Delete"
          title="Delete"
        />
      </div>
    </li>
  );
}

export default CartItem;
