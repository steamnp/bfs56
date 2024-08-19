import { useState } from "react";
import { CartContext } from "./product-context";

function ProductProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
}
export default ProductProvider;
