import React, { useState } from "react";
import productData from "../data.json";
import Cart from "./cart";

function Product() {
  const [cartItems, setCartItems] = useState([]);

  const generateUniqueId = (product) => {
    return `${product.name}-${product.price}`;
  };

  const handleAddToCart = (product) => {
    const productWithId = { ...product, id: generateUniqueId(product) };
    console.log("Adding to cart:", productWithId);

    setCartItems((prevItems) => {
      console.log("Previous items:", prevItems);

      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === productWithId.id
      );
      console.log("Existing item index:", existingItemIndex);

      if (existingItemIndex !== -1) {
        // Update the quantity of the existing item
        const updatedItems = prevItems.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
        console.log("Updated items:", updatedItems);
        return updatedItems;
      } else {
        // Add the new item with quantity 1
        const newItems = [...prevItems, { ...productWithId, quantity: 1 }];
        console.log("New items:", newItems);
        return newItems;
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
          <p className="text-rose-500 text-sm">{product.category}</p>
          <p className="text-rose-900 my-1 text-base font-semibold">
            {product.name}
          </p>
          <p className="text-red text-base font-semibold">${product.price}</p>
        </div>
      ))}
      <Cart cartItems={cartItems} />
    </>
  );
}

export default Product;
