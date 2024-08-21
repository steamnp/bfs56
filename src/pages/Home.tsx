import { useAppSelector } from "../redux/hooks";

function Home() {
  const products = useAppSelector((state) => {
    return state.product;
  });

  return (
    <ul>
      {products.map((e) => {
        return <li key={e.id}>{e.name}</li>;
      })}
    </ul>
  );
}

export default Home;
