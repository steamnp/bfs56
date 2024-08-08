import Product from "../components/product";

function Home() {
  return (
    <div>
      <div className="m-6 w-[375px] ">
        <h1 className="font-redhat text-[40px] font-bold">Desserts</h1>
        <Product />
      </div>
    </div>
  );
}

export default Home;
