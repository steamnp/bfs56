import React, { useState } from "react";
import Product from "../components/product";
import Cart from "../components/cart";

function Home() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="m-6 flex flex-col lg:flex-row lg:gap-6">
      <div className="flex-1">
        <h1 className="font-redhat font-bold text-[40px] mb-6">Desserts</h1>
        <Product cartItems={cartItems} setCartItems={setCartItems} />
      </div>
      <div className="lg:w-[327px]">
        <Cart cartItems={cartItems} />
      </div>
    </div>
  );
}

export default Home;
