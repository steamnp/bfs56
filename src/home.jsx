import { useState } from "react";
import Product from "./components/product";
import Cart from "./components/cart";
import data from "../data.json";

function Home() {
  const [display, setDisplay] = useState();

  return (
    <>
      <div className="m-6 w-[375px]">
        <h1 className="font-redhat font-bold text-[40px]">Desserts</h1>
        {data.map((item, i) => {
          return <Product key={i} item={item} />;
        })}
        <Cart />
      </div>
    </>
  );
}

export default Home;
