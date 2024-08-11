import Product from "../components/product";
import React from "react";
import data from "/data.json";
function Home() {
  return (
    <div className="m-6 w-[375px] ">
      <h1 className="font-bold mb-[32px] text -[40px]">Dessert</h1>
      {data.map((item, index) => (
        <Product key={index} item={item} />
      ))}
    </div>
  );
}
export default Home;
