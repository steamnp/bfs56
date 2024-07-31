import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-lime-700 text-white p-4">
        I am content of Home page
      </main>
      <Footer />
    </div>
  );
}

export default Home;
