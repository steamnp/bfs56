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
        <button className="card-button" onClick={function () {}}>
          <img src={cart} alt="Add to Cart" />
          <span className="truncate">Add to Cart</span>
        </button>
      </div>
      <div className="mt-4">
        <p className="font-redhat text-[14px] text-lightRed">{category}</p>
        <h1 className="font-redhat font-semibold text-[16px] text-blackishRed">
          {name}
        </h1>
        <h1 className="font-redhat font-semibold text-[16px] text-redColor">
          ${price.toFixed(2)}
        </h1>
      </div>
    </>
  );
}

export default product;
