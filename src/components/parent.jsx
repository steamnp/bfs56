import Child from "./child";
function Parent() {
  return (
    /* we can also wrote <React.Fragment> instead of <> */
    <>
      <Child test="random" />
    </>
  );
}

export default Parent;
