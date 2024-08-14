import Home from "./pages/Home";
import Cart from "./components/cart";
import { CartContext } from "./context/product";  
import { useState } from "react";

function App() {
  const [array, setArray] = useState([])
  return (
    <>
      <main className="container mx-auto px-4 py-16">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-[1fr_33%]">
         
          <CartContext.Provider value={array, setArray}>
            <Cart />
            <Home />
          <CartContext.Provider></CartContext.Provider>
        </div>
      </main>
    </>
  );
  }

export default App;
