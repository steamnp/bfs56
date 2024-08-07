import React from "react";
import Product from "./component/product";

function Home() {
  return (
    <div className="m-6 w-[375px]">
      <h1 className="font-redhat font-bold text-[40px]">Desserts</h1>
      <Product product={{ name: "a", category: "catA", price: 12 }} />
      <Product product={{ name: "b", category: "catB", price: 13 }} />
      <Product product={{ name: "c", category: "catC", price: 14 }} />
    </div>
  );
}

export default Home;
