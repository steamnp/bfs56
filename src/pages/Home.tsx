import Product from "../components/product";
import data from "../../data.json";
import { v4 as uuidv4 } from "uuid";

import { useState } from "react";
import { CartContext } from "../context/product";
import Cart from "../components/cart";

function Home() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <main className="container mx-auto px-4 py-16">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-[1fr_33%]">
          <CartContext.Provider value={{ cartItems, setCartItems }}>
            <div>
              <h1>Desserts</h1>
              <div className="list">
                {data.map((item) => (
                  <Product key={uuidv4()} item={item} />
                ))}
              </div>
            </div>
            <Cart />
          </CartContext.Provider>
        </div>
      </main>
    </>
  );
}

export default Home;
