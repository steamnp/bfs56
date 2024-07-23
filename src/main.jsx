import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main className="container">
      <section className="sectionOne">
        <div className="boxOne">
          <h1 className="firstHeading">Heading1</h1>
          <p className="paragraphTwo">Paragraph1</p>
        </div>
      </section>
      <section className="sectionTwo">
        <div className="boxTwo">
          <h1 className="secondHeading">Heading2</h1>
          <p className="paragraphTwo">Paragraph2</p>
        </div>
      </section>
    </main>
  </React.StrictMode>
);
