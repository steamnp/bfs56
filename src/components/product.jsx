import React from "react";
import productData from "../data.json";

function Product({ cartItems, setCartItems }) {
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.name === product.name && item.price === product.price
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.name === product.name && item.price === product.price
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {productData.map((product, index) => (
        <div
          key={index}
          className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md"
        >
          <img
            className="w-full h-auto rounded-lg mb-4"
            src={product.image.mobile}
            alt={product.name}
          />
          <div className="text-center">
            <p className="text-rose-500 text-sm">{product.category}</p>
            <p className="text-rose-900 my-1 text-base font-semibold">
              {product.name}
            </p>
            <p className="text-red text-base font-semibold">${product.price}</p>
            <button
              className="mt-4 flex items-center border rounded-full py-3 px-7 bg-white border-rose-400"
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
        </div>
      ))}
    </div>
  );
}

export default Product;
