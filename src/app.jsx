import React from "react";
import Home from "./pages/Home";
import CheckOut from "./components/cart";

function app() {
  return (
    <>
      <main className="container mx-auto px-4 pu-16">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-[1fr_33%]">
          <Home />
          <CheckOut />
        </div>
      </main>
    </>
  );
}

export default app;
