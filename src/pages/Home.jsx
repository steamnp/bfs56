import Product from "../components/product";
import data from "/data.json";

function Home() {
  return (
    <div className="ml-6 w-[375px]">
      <h1 className="font-bold text-[40px]">Desserts</h1>
      <div className="list">
        {data.map((item, index) => (
          <Product key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
