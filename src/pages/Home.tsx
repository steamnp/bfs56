import { v4 as uuidv4 } from "uuid";
import Product from "../components/product";
import data from "../../data.json";
import React from "react";

console.log(React);

function Home() {
  return (
    <div>
      <h1>Desserts</h1>
      <div className="list">
        {data.map((item) => (
          <Product key={uuidv4()} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
