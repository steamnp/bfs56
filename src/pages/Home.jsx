import Product from "../components/product";
import CheckOut from "../components/checkout";
import data from "/data.json";

function Home() {
  return (
    <div className="m-6 w-[375px] bg-redRose">
      <h1 className="font-bold text-[40px]">Desserts</h1>
      {data.map((item, index) => (
        <Product
          key={index}
          name={item.name}
          category={item.category}
          price={item.price}
          image={item.image}
        />
      ))}
      <CheckOut />
    </div>
  );
}

export default Home;
