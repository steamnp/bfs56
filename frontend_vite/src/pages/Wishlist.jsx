// src/components/Wishlist.jsx

import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import { useDispatch } from "react-redux";
import { useGetWishListQuery } from "../features/auth/authService";
import { addToCart } from "../features/products/productsSlice"; // Update import if needed

const Wishlist = () => {
  const dispatch = useDispatch();
  const { data: wishList, error, isLoading } = useGetWishListQuery();

  const handleAddToCart = (id) => {
    dispatch(addToCart(id)); // Update the action based on what you need
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading wishlist</div>;

  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            {wishList?.length === 0 && (
              <div className="text-center">Wishlist is empty</div>
            )}
            {wishList?.map((item, index) => (
              <div className="col-3" key={index}>
                <div className="wishlist-card position-relative">
                  <img
                    src="images/cross.svg"
                    alt="cross"
                    className="position-absolute cross img-fluid"
                    onClick={() => handleAddToCart(item?._id)}
                  />
                  <div className="wishlist-card-image">
                    <img
                      src={item?.images[0]}
                      className="img-fluid w-100"
                      alt={item?.title}
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
