import Product from "../components/product";
import data from "../../data.json";
function Home() {
  return (
    <div>
      <h1>Dessert</h1>
      <div className="list">
        {data.map((item, index) => (
          <Product key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
export default Home;
