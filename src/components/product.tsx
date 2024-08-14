import { useState } from 'react'
import cart from '/assets/images/icon-add-to-cart.svg'
import ButtonOnClick from './buttonOnClick'
import { IItem } from '../types/product'
import Picture from './picture'

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

function Product({ item, onNameChange }: IItem) {
  const { image, name, category, price } = item
  const { mobile, tablet, desktop } = image

  const [pName, setPName] = useState(name)

  const [isActive, setIsActive] = useState(false)

  const handleButtonClick = () => {
    setIsActive(!isActive)
  }

  return (
    <>
      <div className="mt-6 flex flex-col">
        <Picture image={image} />

        {isActive ? (
          <ButtonOnClick />
        ) : (
          <button className="card-button" onClick={handleButtonClick}>
            <img src={cart} alt="Add to Cart" />
            <span className="truncate">Add to Cart</span>
          </button>
        )}

        <div className="card-description">
          <p className="">{category}</p>
          <p className="font-semibold">{pName}</p>
          <p className="text-rose-700 font-semibold">${price.toFixed(2)}</p>
        </div>
        <button
          onClick={() => {
            setPName((preValue) => {
              onNameChange(preValue + ' New')
              return preValue + ' New'
            })
          }}
        >
          Change Name
        </button>
      </div>
    </>
  )
}

export default Product
