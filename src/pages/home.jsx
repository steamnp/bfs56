import Product from "../components/product";
import React from "react";
//object desctruction
// const { name } = { name: "John", age: 25 };
// console.log(name); //John
//Home component is rendering
//when sate(count) is updated in react component(Home) will re-render again (run)
function Home() {
  //array destructuring
  //const [count, setCount] = useState();
  //count is a state variable
  //setCount is a state updating function
  // const [error, setState] = useState();
  // const [loading, setLoading] = useState();

  // //display
  // const [display, setDisplay] = useState();

  // console.log(state); //undefined
  //console.log(useState()); //useState is a function
  //console.log(count);
  return (
    <div className="m-6 w-[375px]">
      <h1 className="font-bold mb-[32px] text -[40px]">Dessert</h1>
      <Product
        product={{
          name: "Waffle",
          category: "Waffle with Berries",
          price: "$ 6.50",
        }}
      />
      <Product product={{ name: "A", category: "catA", price: 12 }} />
      <Product product={{ name: "B", category: "catB", price: 12 }} />
    </div>
  );
}
export default Home;

//     <div className=" m-6 font-redhat w-[327px] h-[69px]">
//       <p className="h-[19px] w-[41px] text-sm text-[#87635A] ">Waffle</p>
//       <h1 className="w-[142px] h-[21px] font-semibold text-[#260F08]">
//         Waffle with Berries
//       </h1>
//       <h1 className=" text-[#C73B0F] ">6.50</h1>

//
