import React, { useState } from "react";

function Cart({ cartItems, setCartItems }) {
  const [isOrderConfirmationVisible, setOrderConfirmationVisible] =
    useState(false);

  // Function to handle item removal
  const handleRemoveItem = (itemToRemove) => {
    const updatedCartItems = cartItems.filter(
      (item) => item.name !== itemToRemove.name
    );
    setCartItems(updatedCartItems);
  };

  const handleConfirmOrder = () => {
    setOrderConfirmationVisible(true);
  };

  const handleCloseModal = () => {
    setOrderConfirmationVisible(false);
  };

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const totalQuantity = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <div className="relative p-6 bg-white rounded-lg shadow-md max-w-[327px] mx-auto sm:max-w-full">
      <h1 className="text-red font-bold text-2xl mb-4">
        Your Cart ({totalQuantity})
      </h1>

      {cartItems.length === 0 ? (
        <>
          <img
            src="assets/images/illustration-empty-cart.svg"
            alt="Empty Cart"
            className="mx-auto mb-4"
          />
          <p className="text-rose-900 text-sm text-center">
            Your added items will appear here.
          </p>
        </>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={`${item.name}-${item.price}`}
              className="flex items-center mb-4 gap-4"
            >
              <img
                src={item.image.mobile}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div className="flex-1">
                <p className="font-semibold text-sm">{item.name}</p>
                <p className="pt-2 text-rose-500">
                  <span className="text-red pr-2 font-semibold">
                    {item.quantity}x
                  </span>
                  <span className="pr-2">@${item.price.toFixed(2)}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </p>
              </div>
              <img
                src="assets/images/icon-remove-item.svg"
                alt="Remove item"
                className="cursor-pointer"
                onClick={() => handleRemoveItem(item)}
              />
            </div>
          ))}
          <div className="flex justify-between mt-4 text-lg">
            <p className="text-sm">Order Total:</p>
            <p className="text-2xl font-bold">${totalPrice.toFixed(2)}</p>
          </div>
          <div className="flex mt-4 w-full rounded-lg shadow-md bg-rose-50">
            <img
              className="pl-4 py-2"
              src="assets/images/icon-carbon-neutral.svg"
              alt="icon-carbon-neutral"
            />
            <p className="font-redhat flex py-2 text-rose-900 flex-1">
              This is a{" "}
              <span className="font-semibold px-1">carbon-neutral</span>{" "}
              delivery
            </p>
          </div>
          <div className="flex justify-center mt-6">
            <button
              className="font-redhat font-semibold border rounded-full py-3 px-6 sm:px-10 bg-red text-white"
              onClick={handleConfirmOrder}
            >
              Confirm Order
            </button>
          </div>

          {/* OrderConfirmation modal */}
          {isOrderConfirmationVisible && (
            <div className="order-confirmation fixed inset-0 flex items-center justify-center p-4 transition-transform duration-500 ease-in-out transform translate-y-0 opacity-100">
              <div className="bg-white shadow-lg rounded-lg max-w-md w-full">
                <div className="relative p-6">
                  <button
                    className="absolute top-3 right-3 text-red-500 text-xl"
                    onClick={handleCloseModal}
                  >
                    &times;
                  </button>
                  <img
                    src="assets/images/icon-order-confirmed.svg"
                    alt="icon-order-confirmed.svg"
                  />
                  <h1 className="font-bold mb-4 text-4xl">Order Confirmed</h1>
                  <p className="text-rose-500 mb-4">
                    We hope you enjoy your food!
                  </p>

                  {cartItems.map((item) => (
                    <div
                      key={`${item.name}-${item.price}`}
                      className="w-full bg-grey-100 p-4 rounded-lg"
                    >
                      <div className="flex items-center mb-4 gap-4">
                        <img
                          src={item.image.mobile} // Ensure the image path is correct
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded-md"
                        />
                        <div className="flex-1 flex justify-between items-center">
                          <div>
                            <p className="text-rose-900 text-sm font-semibold">
                              {item.name}
                            </p>
                            <p className="text-rose-500 pt-2">
                              <span className="text-red font-semibold pr-2">
                                {item.quantity}x
                              </span>
                              <span className="pr-2">
                                @${item.price.toFixed(2)}
                              </span>
                            </p>
                          </div>
                          <p className="text-rose-900 font-semibold">
                            ${(item.quantity * item.price).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="flex justify-between mt-4 p-6">
                    <p>Order Total:</p>
                    <p className="font-bold text-2xl">
                      ${totalPrice.toFixed(2)}
                    </p>
                  </div>

                  <div className="flex justify-center mt-6 mb-4">
                    <button
                      className="font-redhat font-semibold border rounded-full py-2 px-6 sm:px-10 bg-red text-white"
                      onClick={handleCloseModal}
                    >
                      Start New Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Cart;
