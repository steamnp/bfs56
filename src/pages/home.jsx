import Product from "../components/product";
import data from "../../data.json";

function Home() {
  return (
    <div>
      <div className="m-6 w-[375px] ">
        <h1 className="font-redhat text-[40px] font-bold">Desserts</h1>
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
    </div>
  );
}

export default Home;
