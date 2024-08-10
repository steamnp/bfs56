import React, { useState } from "react";
import productData from "../data.json";
import Cart from "./cart";

function Product() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <>
      {productData.map((product, index) => (
        <div key={index} className="mb-6">
          <img
            className="w-[327px] h-[234px] rounded-lg"
            src={product.image.mobile}
            alt="product"
          />
          <div className="flex justify-center mx-auto">
            <button
              className="flex items-center border rounded-full py-3 px-7 bg-white -mt-6 mr-14 border-rose-400"
              onClick={() => handleAddToCart(product)}
            >
              <img
                src="assets/images/icon-add-to-cart.svg"
                alt="add-to-cart"
                className="pr-1"
              />
              Add to Cart
            </button>
          </div>
          <p className="text-rose-500 text-sm">{product.name}</p>
          <p className="text-rose-900 my-1 text-base font-semibold">
            {product.category}
          </p>
          <p className="text-red text-base font-semibold">${product.price}</p>
        </div>
      ))}
      <Cart cartItems={cartItems} />
    </>
  );
}

export default Product;
