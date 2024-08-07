import React from "react";
import ItemCard from "../components/itemCard";
import productData from "../../data.json";

function Home() {
  console.log(React);
  return (
    <div className="m-6 w-[375px]">
      <h1 className="text-[40px] font-bold mb-[32px]">Dessert</h1>
      {productData.map((product, index) => (
        <ItemCard key={index} product={product} />
      ))}
    </div>
  );
}

export default Home;
