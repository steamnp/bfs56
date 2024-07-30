import Header from "../components/header";
import Footer from "../components/footer";

function Home() {
  return (
    <>
      <Header />
      <div className="bg-lime-700 min-h-[calc(100vh-5rem)]">
        Content of the Homepage{" "}
      </div>
      <Footer />
    </>
  );
}

export default Home;
