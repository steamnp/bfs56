function Product({ product }) {
  return (
    <>
      <img
        className="w-[327px] h-[212px]"
        src="assets/images/image-waffle-mobile.jpg"
        alt="waffle on the table"
      />
      <div className="flex justify-center mx-auto">
        <button className="flex items-center border rounded-full py-3 px-7 bg-white -mt-6 mr-10 border-rose-400 ">
          <img
            src="assets/images/icon-add-to-cart.svg"
            alt="add-to-cart"
            className="pr-1"
          />
          Add to Cart
        </button>
      </div>
      <p className="text-rose-500 text-sm">{product.name}</p>
      <p className="text-rose-900 my-1 text-base font-semibold">
        {product.category}
      </p>
      <p className="text-red text-base font-semibold">${product.price}</p>

      <img
        className="w-[327px] h-[212px]"
        src="assets/images/image-waffle-mobile.jpg"
        alt="waffle on the table"
      />
      <div className="flex justify-center mx-auto">
        <button className="flex items-center border rounded-full py-3 px-7 bg-white -mt-6 mr-10 border-rose-400 ">
          <img
            src="assets/images/icon-add-to-cart.svg"
            alt="add-to-cart"
            className="pr-1"
          />
          Add to Cart
        </button>
      </div>
      <p className="text-rose-500 text-sm">{product.name}</p>
      <p className="text-rose-900 my-1 text-base font-semibold">
        {product.category}
      </p>
      <p className="text-red text-base font-semibold">${product.price}</p>

      <img
        className="w-[327px] h-[212px]"
        src="assets/images/image-waffle-mobile.jpg"
        alt="waffle on the table"
      />
      <div className="flex justify-center mx-auto">
        <button className="flex items-center border rounded-full py-3 px-7 bg-white -mt-6 mr-10 border-rose-400 ">
          <img
            src="assets/images/icon-add-to-cart.svg"
            alt="add-to-cart"
            className="pr-1"
          />
          Add to Cart
        </button>
      </div>
      <p className="text-rose-500 text-sm">{product.name}</p>
      <p className="text-rose-900 my-1 text-base font-semibold">
        {product.category}
      </p>
      <p className="text-red text-base font-semibold">${product.price}</p>
    </>
  );
}
export default Product;
