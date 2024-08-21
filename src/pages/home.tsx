import React from "react";
import { useSelector } from "react-redux";

function Home() {
  const products = useSelector((state) => {
    return state.product;
  });
  return (
    <ul>
      {products.map((e) => {
        return <li key={e.id}> {e.name}</li>;
      })}
    </ul>
  );
}

export default Home;
