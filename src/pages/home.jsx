import Header from "../components/header";
import Footer from "../components/footer";

function Home() {
  return (
    <>
      <Header bgColor="red" />
      <div className="bg-lime-700 min-h-[calc(100vh-5rem)]">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus natus
        odio, reprehenderit reiciendis, quam qui culpa iusto soluta sint
        obcaecati quo assumenda ad neque nemo eius at laborum deleniti minus. I
        am content of Home Page
      </div>
      <Footer />
    </>
  );
}

export default Home;
