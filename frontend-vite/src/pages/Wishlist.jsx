import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import { useDispatch } from "react-redux";
import { useGetWishListQuery } from "../features/auth/authService"; // Adjust the import path
import { useAddToWhishListMutation } from "../features/products/productsSlice"; // Updated import path

const Wishlist = () => {
  const dispatch = useDispatch();
  const [addToWhishList] = useAddToWhishListMutation(); // Use the hook to get the mutation function

  // Use the hook to fetch the wishlist
  const { data: wishList = [], error, isLoading } = useGetWishListQuery();

  const handleAddToWhishList = (id) => {
    addToWhishList(id); // Call the mutation function
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            {wishList.length === 0 && (
              <div className="text-center">Wishlist is empty</div>
            )}
            {wishList.map((item, index) => (
              <div className="col-3" key={index}>
                <div className="wishlist-card position-relative">
                  <img
                    src="images/cross.svg"
                    alt="cross"
                    className="position-absolute cross img-fluid"
                    onClick={() => handleAddToWhishList(item?._id)}
                  />
                  <div className="wishlist-card-image">
                    <img
                      src={item?.images[0]}
                      className="img-fluid w-100"
                      alt="watch"
                    />
                  </div>
                  <div className="py-3 px-3">
                    <h5 className="title">{item?.title}</h5>
                    <h6 className="price">₹{item?.price}</h6>
                    <button className="button border-0">Add to cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
