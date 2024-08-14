import { useContext, useState } from 'react'
import cart from '/assets/images/icon-add-to-cart.svg'
import ButtonOnClick from './buttonOnClick'
import { IItem } from '../types/product'
import { CartContext } from '../context/product'

//import { getImageURL } from "../utils/imageURL";

// Primitive data type
// string
// number
// undefined
// null

// Non-Primitive data type
// object
// array
// function

// To read value from context -> useContext

function product({ item }: IItem) {
  const { cartItems, setCartItems } = useContext(CartContext)

  console.log(cartItems)

  const { image, name, category, price } = item
  const { mobile, tablet, desktop } = image

  const [isActive, setIsActive] = useState(false)

  const addToCart = () => {
    const cartItemAdded = { name, category, price }
    setCartItems((preValue) => cartItemAdded)
  }

  return (
    <>
      <div className="mt-6 flex flex-col">
        <picture>
          <source media="(width < 640px)" srcSet={mobile} />
          <source media="(width < 768px)" srcSet={tablet} />
          <img className="card-image rounded-2xl" src={desktop} alt={`Image ${name}`} />
        </picture>

        {isActive ? (
          <ButtonOnClick />
        ) : (
          <button className="card-button" onClick={addToCart}>
            <img src={cart} alt="Add to Cart" />
            <span className="truncate">Add to Cart</span>
          </button>
        )}

        <div className="card-description">
          <p className="">{category}</p>
          <p className="font-semibold">{name}</p>
          <p className="text-rose-700 font-semibold">${price.toFixed(2)}</p>
        </div>
      </div>
    </>
  )
}

export default product
