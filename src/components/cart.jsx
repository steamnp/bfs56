import React from "react";

function Cart({ cartItems }) {
  // Group items by their unique ID and sum their quantities
  const groupedItems = cartItems.reduce((acc, item) => {
    const existingItem = acc.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      acc.push({ ...item, quantity: item.quantity || 1 });
    }
    return acc;
  }, []);

  // Calculate the total price
  const totalPrice = groupedItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="p-6 w-[327px] bg-white rounded-lg shadow-md">
      <h1 className="text-red font-bold text-[24px] mb-4">
        Your Cart ({groupedItems.length})
      </h1>

      {groupedItems.length === 0 ? (
        // Show only the empty cart image and item count
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
          {groupedItems.map((item) => (
            <div key={item.id} className="flex items-center mb-4">
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
                className="ml-auto cursor-pointer"
              />
            </div>
          ))}
          <div className="flex justify-between mt-4">
            <p className="font-bold">Order Total:</p>
            <p className="font-bold">${totalPrice.toFixed(2)}</p>
          </div>
          <div className="flex mt-4 w-full rounded-lg shadow-md bg-rose-50">
            <img
              className="pl-6 p-0.5"
              src="assets/images/icon-carbon-neutral.svg"
              alt="icon-carbon-neutral"
            />
            <p className="flex py-4 text-rose-900 flex-1">
              This is a carbon-neutral delivery
            </p>
          </div>
          <div className="flex justify-center mt-6">
            <button className="font-redhat font-semibold border rounded-full py-4 px-20 bg-red text-white">
              Confirm Order
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
