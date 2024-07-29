import Child from "./child";

function Parent() {
  return (
    <div>
      Parent {/* {Rendering child compoent} */}
      <Child test="random" />
    </div>
  );
}

export default Parent;
