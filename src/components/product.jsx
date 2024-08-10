import cart from "/assets/images/icon-add-to-cart.svg";
//import { getImageURL } from "../utils/imageURL";

function product({ item }) {
  const { image, name, category, price } = item;
  const { mobile, tablet, desktop } = image;
  return (
    <>
      <div className="mt-6 flex flex-col">
        <picture>
          <source media="(width < 640px)" srcSet={mobile} />
          <source media="(width < 768px)" srcSet={tablet} />
          <img
            className="card-image rounded-2xl"
            src={desktop}
            alt={`Image ${name}`}
          />
        </picture>
        <button className="card-button">
          <img src={cart} alt="Add to Cart" />
          <span className="truncate">Add to Cart</span>
        </button>
        <div className="card-description">
          <p className="">{category}</p>
          <p className="font-bold">{name}</p>
          <p className="text-rose-700 font-semibold">${price.toFixed(2)}</p>
        </div>
      </div>
    </>
  );
}

export default product;
