import React, { useState } from "react";
import Product from "../components/product";
import data from "/data.json";

function Home() {
  return (
    <div className="m-6 w-[375px]">
      <h1 className="font-redhat font-bold text-[40px]">Dessert</h1>
      {data.map((item, index) => (
        <Product
          key={index}
          name={item.name}
          category={item.category}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  );
}

export default Home;
