import { v4 as uuidv4 } from 'uuid'
import Product from './product'
import data from '../../../data.json'

function ProductList() {
  return (
    <div className="list">
      {data.map((item) => (
        <Product key={uuidv4()} item={item} />
      ))}
    </div>
  )
}

export default ProductList
