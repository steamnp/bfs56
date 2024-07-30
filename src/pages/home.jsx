import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";

function home() {
  return (
    <div>
      <Header />
      <div className="min-h-[calc(100vh-80px)] bg-lime-700">
        I am content of Home Page
      </div>
      <Footer />
    </div>
  );
}

export default home;
