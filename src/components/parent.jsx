import Child from './child'

function Parent() {
  return (
    <>
      <h1 className="container">I am Child</h1>
      <Child test="random" />
    </>
  )
}

export default Parent
