function Product() {
  return (
    <div>
      <img
        className="w-[327px] h-[212px] rounded-lg"
        src="public\assets\images\image-waffle-mobile.jpg"
      />
      <div className="flex justify-center w-[327px] mt-[-22px]">
        <button className="flex items-center rounded-full  py-3 px-7 bg-white border border-[#AD8A85]">
          <img src="public\assets\images\cart_image.png" alt="Cart image" />
          <h1 className="text-[14px]">Add to Cart</h1>
        </button>
      </div>
      <div>
        <h1 className="text-[14px] text-[#87635A] font-redhat">Waffle</h1>
        <h1 className="text-[16px] font-redhat text-[#260F08] font-semibold">
          Waffle with Berries
        </h1>
        <h1 className="font-redhat text-[16px] text-[#C73B0F] font-semibold">
          $6.50
        </h1>
      </div>
    </div>
  );
}

export default Product;
