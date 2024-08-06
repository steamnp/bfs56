function ItemCard() {
  return (
    <div>
      <img
        src="../../assets/images/image-waffle-mobile.jpg"
        alt="Dessert"
        className="w-[327px] h-[212px]"
      />
      <div className="flex justify-center items-center -mt-6 mb-[16px]">
        <button className="flex rounded-full  py-3 px-7 border-2 border-[#AD8A85] bg-white hover:text-redText hover:border-redText cursor-pointer">
          <img
            src="../../assets/images/icon-add-to-cart.svg"
            alt="Cart"
            className="mr-2"
          />
          Add to Cart
        </button>
      </div>
      <div>
        <h1 className="text-[#AD8A85] text-2xl pb-[4px]">Waffle</h1>
        <h1 className="text-2xl pb-[4px]">Waffle with Berries</h1>
        <h1 className="text-redText  text-2xl mb-[24px]">$6.50</h1>
      </div>
    </div>
  );
}

export default ItemCard;
