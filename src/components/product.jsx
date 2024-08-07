function Product({ product }) {
  return (
    <>
      <img
        className="w-[327px] h-[212px]"
        src="assets/images/image-waffle-mobile.jpg"
        alt="waffle on the table"
      />
      <div className="flex justify-center items-center">
        <button className="border rounded-full py-3 px-7 bg-white text-black -mt-4 ">
          Add to Cart
        </button>
      </div>
      <p className="text-rose-500">{product.name}</p>
      <p className="text-rose-900">{product.category}</p>
      <p className="text-red">${product.price}</p>
    </>
  );
}
export default Product;
