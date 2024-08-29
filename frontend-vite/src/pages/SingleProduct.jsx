import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import ReactImageZoom from "react-image-zoom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Color from "../components/Color";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import Container from "../components/Container";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  useAddToCartMutation,
  useGetAProductQuery,
  useGetProductsQuery,
  useWriteReviewMutation,
  useAddToWhishListMutation,
} from "../features/products/productsService";
import { toast } from "react-toastify";

const validationSchema = Yup.object({
  comment: Yup.string().required("Write something"),
  star: Yup.number().required("Rate your product"),
});

const SingleProduct = () => {
  const location = useLocation();
  const prodId = location.pathname.split("/")[2];

  const [popularProducts, setPopularProducts] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [color, setColor] = useState(null);

  const [writeReview] = useWriteReviewMutation();
  const [addToWhishList] = useAddToWhishListMutation();
  const [addToCart] = useAddToCartMutation();

  const { data: singleProdState } = useGetAProductQuery(prodId);
  const { data: products } = useGetProductsQuery();

  useEffect(() => {
    let data = [];
    for (let index = 0; index < products?.length; index++) {
      if (products[index]?.tag === "popular") {
        data.push(products[index]);
      }
    }
    setPopularProducts(data);
  }, [products]);

  const formik = useFormik({
    initialValues: {
      comment: "",
      star: 0,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      writeReview({
        prodId: singleProdState?._id,
        comment: values.comment,
        star: values.star,
      })
        .unwrap()
        .then(() => {
          toast.success("Review submitted successfully");
          formik.resetForm();
        })
        .catch(() => {
          toast.error("Failed to submit review");
        });
    },
  });

  const uploadCart = () => {
    if (!color) {
      toast.error("Please select color");
    } else {
      addToCart({
        productId: singleProdState?._id,
        quantity,
        color,
        price: singleProdState?.price,
      })
        .unwrap()
        .then(() => toast.success("Added to cart"))
        .catch(() => toast.error("Failed to add to cart"));
    }
  };

  const copyToClipboard = (text) => {
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  const props = {
    width: 400,
    height: 600,
    zoomWidth: 600,
    img:
      singleProdState?.images[0] ||
      "https://eas-tech.net/wp-content/uploads/dummy-post-horisontal.jpg",
  };

  return (
    <>
      <Meta title={singleProdState?.title} />
      <BreadCrumb title={singleProdState?.title} />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">
              {singleProdState?.images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt="product" className="img-fluid" />
                </div>
              ))}
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">{singleProdState?.title}</h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">₹{singleProdState?.price}</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    value={Number(singleProdState?.totalrating)}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 t-review">(2 Reviews)</p>
                </div>
                <a className="review-btn" href="#review">
                  Write a Review
                </a>
              </div>
              <div className="border-bottom py-3">
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Brand :</h3>
                  <p className="product-data">
                    {singleProdState?.brand?.title}
                  </p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Category :</h3>
                  <p className="product-data">
                    {singleProdState?.category?.title}
                  </p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Tags :</h3>
                  <p className="product-data">{singleProdState?.tag}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Availability :</h3>
                  <p className="product-data">In Stock</p>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Color</h3>
                  <div className="d-flex">
                    {singleProdState?.color.map((item) => (
                      <span
                        key={item._id}
                        onClick={() => setColor(item._id)}
                        className={`product-data border rounded p-1 cursor ${
                          color === item._id ? "selected" : ""
                        }`}
                      >
                        {item.title}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                  <h3 className="product-heading">Quantity :</h3>
                  <div>
                    <input
                      type="number"
                      value={quantity}
                      min={1}
                      max={10}
                      className="form-control"
                      style={{ width: "70px" }}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </div>
                  <div className="d-flex align-items-center gap-30 ms-5">
                    <button
                      className="button border-0"
                      type="button"
                      onClick={uploadCart}
                    >
                      Add to cart
                    </button>
                    <button className="button signup">Buy It Now</button>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div>
                    <a href="#">
                      <TbGitCompare className="fs-5 me-2" /> Compare
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      onClick={() => addToWhishList(singleProdState?._id)}
                    >
                      <AiOutlineHeart className="fs-5 me-2" />
                      Add to Wishlist
                    </a>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column my-2">
                  <h3 className="product-heading">Shipping and Returns :</h3>
                  <p className="product-data">
                    Free shipping and returns available on all orders!
                    <br /> We ship all domestic in <b>5-10 business days</b>
                  </p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Product Link :</h3>
                  <a
                    href="javascript:void(0);"
                    onClick={() => {
                      copyToClipboard(window.location.href);
                    }}
                  >
                    Copy Product Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>Description</h4>
            <div className="bg-white p-3">
              <p>{singleProdState?.description}</p>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="review-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>Reviews</h4>
            <div className="bg-white p-3">
              <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="comment" className="form-label">
                    Comment
                  </label>
                  <textarea
                    id="comment"
                    name="comment"
                    className="form-control"
                    value={formik.values.comment}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.comment && formik.errors.comment ? (
                    <div className="text-danger">{formik.errors.comment}</div>
                  ) : null}
                </div>
                <div className="mb-3">
                  <label htmlFor="star" className="form-label">
                    Rating
                  </label>
                  <ReactStars
                    id="star"
                    name="star"
                    count={5}
                    size={24}
                    value={formik.values.star}
                    onChange={(newRating) =>
                      formik.setFieldValue("star", newRating)
                    }
                    onBlur={formik.handleBlur}
                    activeColor="#ffd700"
                  />
                  {formik.touched.star && formik.errors.star ? (
                    <div className="text-danger">{formik.errors.star}</div>
                  ) : null}
                </div>
                <button type="submit" className="button border-0">
                  Submit Review
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>Popular Products</h4>
            <div className="d-flex flex-wrap">
              {popularProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
