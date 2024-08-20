import Cart from "../components/cart/cart";
import ProductList from "../components/product/product-list";
import ProductProvider from "../context/product-provider";

function Home() {
  return (
    <>
      <main className="container mx-auto px-4 py-16">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-[1fr_33%]">
          <ProductProvider>
            <div>
              <h1>Desserts</h1>
              <ProductList />
            </div>
            <Cart />
          </ProductProvider>
        </div>
      </main>
    </>
  );
}

export default Home;
