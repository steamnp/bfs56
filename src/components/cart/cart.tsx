import { useContext, useState } from 'react'
import EmptyCartImg from '/assets/images/illustration-empty-cart.svg'
import { CartContext } from '../../context/product-context'
import OrderModal from '../order-modal'
import CartItem from './cart-item'

function Cart() {
  const { cartItems, setCartItems } = useContext(CartContext)

  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false)

  return (
    <>
      <div className=" bg-white p-8 h-fit rounded-lg">
        <h2 className="text-primary">Your Cart(0)</h2>
        {cartItems.length > 0 ? (
          <div>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
            <div className="flex justify-between items-center gap-4 py-8">
              <p>Order Total</p>
              <p className="text-4xl font-bold">{cartItems.reduce((total, item) => total + item.price, 0)}</p>
            </div>
            <div className="flex justify-center items-center gap-2 bg-rose-50 p-4 rounded mb-8">
              {/* <img src={iconCarbonNeutral} alt="Icon Carbon Neutral" /> */}
              <p>
                This is <b>carbon-neutral</b> delivery
              </p>
            </div>
            <button className="bg-primary text-white rounded-full w-full p-4" onClick={() => setIsOrderModalOpen(true)}>
              Confirm Order
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center mt-4">
            <img src={EmptyCartImg} alt="No items in cart" />
            <p>Your added items will appear here</p>
          </div>
        )}
      </div>
      {isOrderModalOpen && <OrderModal />}
    </>
  )
}

export default Cart

// && -> Logical AND
// falsy value -> 0, false, undefined, null, '', NaN
// 0 && 1 -> 0, 'Gorakh' && 'Manish' -> 'Manish' -> false && <div>Hello</div> -> false
// true && 'Manish' && <div>Loading</div> -> <div>Loading</div>

// || -> Logical OR
// 0 || 1 -> 1
// 'Gorakh' || 'Manish' -> 'Gorakh'
// false || <div>Hello</div> -> <div>Hello</div>
