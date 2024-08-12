import React, { useState } from "react";
import productData from "../data.json";

function Product({ cartItems, setCartItems }) {
  const [clickedProduct, setClickedProduct] = useState(null);

  const handleAddToCart = (product) => {
    setClickedProduct(product);

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

  const handleRemoveFromCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.name === product.name && item.price === product.price
      );

      if (existingItem && existingItem.quantity > 0) {
        return prevItems.map((item) =>
          item.name === product.name && item.price === product.price
            ? { ...item, quantity: Math.max(0, item.quantity - 1) }
            : item
        );
      } else {
        return prevItems;
      }
    });
  };

  return (
    <div className="m-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productData.map((product, index) => {
          // Format price to two decimal places
          const formattedPrice = Number(product.price).toFixed(2);

          return (
            <div key={index} className="flex flex-col bg-white p-4 rounded-lg">
              <img
                className="max-w-[327px] h-auto rounded-lg mb-4"
                src={product.image.mobile}
                alt={product.name}
              />
              <div className="flex justify-center mt-[-35px] mr-16">
                <button
                  className={`relative flex items-center border rounded-full py-3 px-7 ${
                    clickedProduct && clickedProduct.name === product.name
                      ? "bg-red text-white border-red"
                      : "bg-white border-rose-400"
                  }`}
                  onClick={() => handleAddToCart(product)}
                >
                  {clickedProduct && clickedProduct.name === product.name && (
                    <div className="flex items-center">
                      <span
                        className="flex items-center justify-center border rounded-full text-white w-4 h-4 cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveFromCart(product);
                        }}
                      >
                        -
                      </span>
                      <span className="text-white px-10">
                        {cartItems.find(
                          (item) =>
                            item.name === product.name &&
                            item.price === product.price
                        )?.quantity || 1}
                      </span>
                      <span
                        className="flex items-center justify-center border rounded-full text-white w-4 h-4 cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAddToCart(product);
                        }}
                      >
                        +
                      </span>
                    </div>
                  )}
                  {!clickedProduct || clickedProduct.name !== product.name ? (
                    <>
                      <img
                        src="assets/images/icon-add-to-cart.svg"
                        alt="add-to-cart"
                        className="pr-1"
                      />
                      Add to Cart
                    </>
                  ) : (
                    ""
                  )}
                </button>
              </div>
              <p className="text-rose-500 text-sm">{product.category}</p>
              <p className="text-rose-900 my-1 text-base font-semibold">
                {product.name}
              </p>
              <p className="text-red text-base font-semibold">
                ${formattedPrice}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Product;
