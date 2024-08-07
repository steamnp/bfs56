function ItemCard({ product, index }) {
  const { name, image, price, category } = product;
  return (
    <div>
      <img
        src={image.mobile}
        alt="Dessert"
        className="w-[327px] h-[212px] rounded-lg"
      />
      <div className="flex justify-center items-center -mt-6 mb-[16px]">
        <button className="flex rounded-full  py-3 px-7 mr-12 border-2 border-redFont bg-white hover:text-redText hover:border-redText cursor-pointer">
          <img
            src="../../assets/images/icon-add-to-cart.svg"
            alt="Cart"
            className="mr-2"
          />
          Add to Cart
        </button>
      </div>
      <div>
        <h1 className="text-redFont text-2xl pb-[4px]">{category}</h1>
        <h1 className="text-2xl pb-[4px]">{name}</h1>
        <h1 className="text-redText  text-2xl mb-[24px]">
          ${price.toFixed(2)}
        </h1>
      </div>
    </div>
  );
}

export default ItemCard;
