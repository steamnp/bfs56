import React, { useState, useEffect } from "react";

function Cart({ cartItems }) {
  const [isOrderConfirmationVisible, setOrderConfirmationVisible] =
    useState(false);

  // Function to handle button click
  const handleConfirmOrder = () => {
    setOrderConfirmationVisible(true);
  };

  // Function to close the OrderConfirmation modal
  const handleCloseModal = () => {
    setOrderConfirmationVisible(false);
  };

  // Calculate the total price
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  // Add a delay for the transition to be applied correctly
  useEffect(() => {
    if (!isOrderConfirmationVisible) return;
    const timer = setTimeout(() => {
      document.querySelector(".order-confirmation").classList.add("show");
    }, 10); // short delay to ensure transition applies

    return () => clearTimeout(timer);
  }, [isOrderConfirmationVisible]);

  return (
    <div className="relative p-6 bg-white rounded-lg shadow-md max-w-[327px] mx-auto sm:max-w-full">
      <h1 className="text-red font-bold text-xl mb-4">
        Your Cart ({cartItems.length})
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
                src={item.image.mobile} // Ensure the image path is correct
                alt={item.name}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div className="flex-1">
                <p className="text-rose-900 text-sm">{item.name}</p>
                <p className="text-rose-500 pt-2">
                  <span className="text-red-500 pr-2">{item.quantity}x</span>
                  <span className="pr-2">@${item.price.toFixed(2)}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </p>
              </div>
              <img
                src="assets/images/icon-remove-item.svg"
                alt="Remove item"
                className="cursor-pointer"
              />
            </div>
          ))}
          <div className="flex justify-between mt-4 text-lg font-bold">
            <p>Order Total:</p>
            <p>${totalPrice.toFixed(2)}</p>
          </div>
          <div className="flex mt-4 w-full rounded-lg shadow-md bg-rose-50">
            <img
              className="pl-4 py-2"
              src="assets/images/icon-carbon-neutral.svg"
              alt="icon-carbon-neutral"
            />
            <p className="flex py-2 text-rose-900 flex-1">
              This is a carbon-neutral delivery
            </p>
          </div>
          <div className="flex justify-center mt-6">
            <button
              className="font-redhat font-semibold border rounded-full py-3 px-10 bg-red text-white"
              onClick={handleConfirmOrder}
            >
              Confirm Order
            </button>
          </div>

          {/* Conditional rendering of OrderConfirmation */}
          <div
            className={`order-confirmation fixed bottom-0 left-0 w-full max-w-md bg-white shadow-lg rounded-t-lg transition-transform duration-500 ease-in-out transform ${
              isOrderConfirmationVisible ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <div className="relative w-full rounded-lg shadow-md">
              <button
                className="absolute top-3 right-3 text-red-500 text-xl"
                onClick={handleCloseModal}
              >
                &times;
              </button>
              <h1 className="text-red font-bold text-lg p-6">
                Order <br /> Confirmed
              </h1>
              <p className="text-rose-500 pl-6 mb-6">
                We hope you enjoy your food!
              </p>

              {cartItems.map((item) => (
                <div
                  key={`${item.name}-${item.price}`}
                  className="w-full bg-grey-100 p-4 mb-4 rounded-lg"
                >
                  <div className="flex items-center">
                    <img
                      src={item.image.mobile} // Dynamically use the item's image URL
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded-md mr-4"
                    />
                    <div className="flex-1">
                      <p className="text-rose-900 font-semibold">{item.name}</p>
                      <p className="text-rose-500">
                        {item.quantity}x @ ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex justify-between mt-4 mx-6">
                <p className="font-bold">Order Total:</p>
                <p>${totalPrice.toFixed(2)}</p>
              </div>

              <div className="flex justify-center mt-6 mb-4">
                <button
                  className="font-redhat font-semibold border rounded-full py-2 px-10 bg-red text-white"
                  onClick={handleCloseModal}
                >
                  Start New Order
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
