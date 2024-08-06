//Object Destrecturing
import { useState } from "react";

function Home() {
  useState();

  //Array Destructuring
  const [name, setName] = useState("John Doe");

  return (
    <div className="m-6 font-redhat text-[40px] font-bold">
      <h1>Desserts</h1>
      <img
        className="w-[327px] h-[212px]"
        src="public\assets\images\image-waffle-mobile.jpg"
      />
    </div>
  );
}

export default Home;
