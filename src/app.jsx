import React from "react";
import Home from "./pages/Home";
import CheckOut from "./components/checkout";

function app() {
  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-[1fr_33%]">
      <Home />
      <CheckOut />
    </div>
  );
}

export default app;
