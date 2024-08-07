import Product from "../components/product";
function Home() {
  return (
    <div className="m-6 w-[375px]">
      <h1 className="font-redhat font-bold text-[40px]">Desserts</h1>
      <Product
        product={{
          name: "Waffle",
          category: "Waffle with Berries",
          price: 6.5,
        }}
      />
    </div>
  );
}

export default Home;
