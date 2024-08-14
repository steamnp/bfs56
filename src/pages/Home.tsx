import Product from "../components/product";
import data from "../../data.json";
import { v4 as uuidv4 } from "uuid";

function Home() {
  return (
    <div>
      <h1>Desserts</h1>
      <div className="list">
        {data.map((item, index) => (
          <Product key={uuidv4()} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
