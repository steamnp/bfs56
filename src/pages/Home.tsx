import Product from '../components/product'
import data from '../../data.json'
import { v4 as uuidv4 } from 'uuid'

function Home() {
  function nameChange(newValue) {
    console.log(newValue)
  }
  return (
    <div>
      <h1>Desserts</h1>
      <div className="list">
        {data.map((item) => (
          <Product onNameChange={nameChange} key={uuidv4()} item={item} />
        ))}
      </div>
      {data.map((item) => (
        <div key={uuidv4()}>{item.name}</div>
      ))}
    </div>
  )
}

export default Home
