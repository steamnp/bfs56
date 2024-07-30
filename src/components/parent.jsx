import Child from "./child";
function Parent() {
  return (
    <div className="bg-slate-600">
      <Child test="random" />
    </div>
  );
}

export default Parent;
