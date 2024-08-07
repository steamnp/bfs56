import { useState } from "react";
import Product from "./components/product";

function Home() {
  const [display, setDisplay] = useState();

  return (
    <div className="m-6 w-[375px]">
      <h1 className="font-redhat font-bold text-[40px]">Desserts</h1>
      <Product
        product={{
          category: "waffle",
          name: "waffle with berries",
          price: 6.5,
        }}
      />
      <Product
        product={{
          category: "waffle",
          name: "waffle with berries",
          price: 6.5,
        }}
      />
      <Product
        product={{
          category: "waffle",
          name: "waffle with berries",
          price: 6.5,
        }}
      />
    </div>
  );
}

export default Home;
