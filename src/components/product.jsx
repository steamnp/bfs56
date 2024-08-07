import cart from "/assets/images/icon-add-to-cart.svg";
function product({ name, category, price, image }) {
  //const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div className="mt-8 mb-6 flex flex-col">
        <img
          src={image.mobile}
          alt={name}
          className="w-[327px] h-[212px] rounded-lg"
        />
        <div className="flex justify-center w-[327px] mt-[-22px]">
          <button
            className="border border-buttonColor bg-white py-3 px-7 rounded-full flex items-center"
            onClick={function () {}}
          >
            <img src={cart} alt="Add to Cart" className="w-5 h-4 mr-2" />
            <span className="text-[14px] text-blackishRed hover:text-redColor">
              Add to Cart
            </span>
          </button>
        </div>
      </div>
      <div className=" mt-4">
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
