import Home from "./pages/Home";
import Cart from "./components/cart";

function App() {
  return (
    <>
      <main className="container mx-auto px-4 py-16">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-[1fr_33%]">
          <Home />
          <Cart />
        </div>
      </main>
    </>
  );
}

export default App;
