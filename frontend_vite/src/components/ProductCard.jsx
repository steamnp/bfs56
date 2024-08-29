import React from "react";
import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useAddToCartMutation,
  useAddToWhishListMutation,
} from "../features/products/productsService"; // Import hooks from RTK Query

const ProductCard = (props) => {
  const { grid, data } = props;
  let location = useLocation();

  const [addToCart] = useAddToCartMutation(); // Hook to call addToCart API
  const [addToWhishList] = useAddToWhishListMutation(); // Hook to call addToWhishList API

  // Add to wishlist button action
  const addTtoWlist = async (id) => {
    try {
      await addToWhishList(id).unwrap(); // Call API
    } catch (error) {
      console.error("Failed to add to wishlist: ", error);
    }
  };

  // Add to cart button action
  const uploadCart = async () => {
    try {
      await addToCart({
        productId: data?._id,
        quantity: 1,
        color: data?.color[0]?._id,
        price: data?.price,
      }).unwrap(); // Call API
    } catch (error) {
      console.error("Failed to add to cart: ", error);
    }
  };

  return (
    <>
      <div
        className={`${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        }`}
      >
        <div className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <button
                className="border-0 bg-transparent"
                onClick={() => addTtoWlist(data?._id)}
              >
                <img src="images/wish.svg" alt="wishlist" />
              </button>
            </Link>
          </div>
          <div className="product-image">
            <img
              src={data.images && data?.images[0]}
              className="img-fluid"
              alt="product img"
            />
            <img
              src={data.images && data?.images[1]}
              className="img-fluid"
              alt="product img"
            />
          </div>
          <div className="product-details">
            <h6 className="brand"> {data?.category?.title}</h6>
            <h5 className="product-title">{data?.title}</h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              {data?.description}
            </p>
            <p className="price">₹{data?.price}</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="images/prodcompare.svg" alt="compare" />
              </Link>
              <Link to={"/product/" + data?._id}>
                <img src="images/view.svg" alt="view" />
              </Link>
              <Link>
                <img
                  src="images/add-cart.svg"
                  alt="addcart"
                  onClick={uploadCart}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
