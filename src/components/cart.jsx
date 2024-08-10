function Cart({ cartItems }) {
  return (
    <div className="p-6 w-[327px] bg-white rounded-lg shadow-md">
      <h1 className="text-red-600 font-bold text-[24px] mb-4">
        Your Cart ({cartItems.length})
      </h1>
      {cartItems.length === 0 ? (
        <p className="text-rose-900 text-sm">Your cart is empty.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="flex items-center mb-4">
            <div className="flex-1">
              <p className="text-rose-900 text-sm">{item.name}</p>
              <p className="text-rose-500 pt-2">
                <span className="text-red-500 pr-2">1x</span>
                <span className="pr-2">@${item.price}</span>
                <span>${item.price}</span>
              </p>
            </div>
            <img
              src="assets/images/icon-remove-item.svg"
              alt="Remove item"
              className="ml-auto"
            />
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
