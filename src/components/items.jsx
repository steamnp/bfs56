function Items({ product }) {
  const { image, name, category, price } = product;
  const { thumbnail, mobile, tablet, desktop } = image;
  return (
    <div className="flex flex-col mb-6 ">
      <div className="relative">
        <picture>
          <source media="(min-width: 768px)" srcSet={desktop} />
          <source media="(min-width: 640px)" srcSet={tablet} />
          <img className="rounded-lg w-full" src={mobile} alt={name} />
        </picture>
        <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex py-3 px-6 border-2 rounded-full bg-white shadow-md">
          <img
            src="../../public/assets/images/icon-add-to-cart.svg"
            alt="cart"
          />
          <span className="font-semibold text-sm pl-2 hover:text-redText ">
            Add to Cart
          </span>
        </button>
      </div>
      <div className="mt-10">
        <h1 className="text-categoryColor">{category}</h1>
        <p className="font-bold">{name}</p>
        <p className="text-base font-semibold text-redText">
          ${price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default Items;
