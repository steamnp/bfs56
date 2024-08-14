import Home from "./pages/Home";
import Cart from "./components/cart";
import { cartContext } from "./context/product";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState();
  // const cartvalue = {
  //   cart,
  //   setCart,
  // };
  //useContext(cartContext);
  return (
    <>
      <main className="container mx-auto px-4 py-16">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-[1fr_33%]">
          <Home />
          <cartContext.Provider value={[cartItems, setCartItems]}>
            <Cart />
          </cartContext.Provider>
        </div>
      </main>
    </>
  );
}

export default App;
