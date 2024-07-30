import Child from './child'

function Parent() {
  return (
    <div>
      {/* Rendering Child Component */}
      <Child test="random" />
    </div>
  )
}

export default Parent
