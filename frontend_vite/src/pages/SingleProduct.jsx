// src/components/SingleProduct.jsx

import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import ReactImageZoom from "react-image-zoom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import Container from "../components/Container";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  getAproduct,
  getProducts,
  writeReview,
} from "../features/products/productsSlice";
import { toast } from "react-toastify";

const validationSchema = Yup.object({
  comment: Yup.string().required("Write something"),
  star: Yup.number().required("Rate your product"),
});

const SingleProduct = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const prodId = location.pathname.split("/")[2];
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState(null);
  const [popularProducts, setPopularProducts] = useState([]);
  const products = useSelector((state) => state.products.products);
  const singleProdState = useSelector((state) => state.products.product);

  const formik = useFormik({
    initialValues: {
      comment: "",
      star: 0,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(
        writeReview({
          prodId: singleProdState?._id,
          comment: values.comment,
          star: values.star,
        })
      );

      setTimeout(() => {
        window.location.reload();
        formik.resetForm();
      }, 2000);
    },
  });

  useEffect(() => {
    dispatch(getAproduct(prodId));
    dispatch(getProducts());
  }, [dispatch, prodId]);

  useEffect(() => {
    let data = [];
    for (let index = 0; index < products?.length; index++) {
      if (products[index]?.tag === "popular") {
        data.push(products[index]);
      }
    }
    setPopularProducts(data);
  }, [products]);

  const uploadCart = () => {
    if (color === null) {
      toast.error("Please select color");
    } else {
      dispatch(
        addToCart({
          productId: singleProdState?._id,
          quantity,
          color: color,
          price: singleProdState?.price,
        })
      );
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
    img: singleProdState?.images?.[0]
      ? singleProdState?.images[0]
      : "https://eas-tech.net/wp-content/uploads/dummy-post-horisontal.jpg",
  };

  const orderedProduct = true; // Replace with actual condition to check if the product is ordered

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
              {singleProdState?.images?.map((img, index) => (
                <div key={index}>
                  <img src={img} alt="product" className="img-fluid" />
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
                  <p className="product-data">{singleProdState?.brand}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Type :</h3>
                  <p className="product-data">{singleProdState?.category}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Tags :</h3>
                  <p className="product-data">{singleProdState?.tags}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">SKU :</h3>
                  <p className="product-data">{singleProdState?.sku}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Available :</h3>
                  <p className="product-data">In Stock</p>
                </div>
              </div>
              <div className="border-bottom py-3">
                <div className="d-flex gap-10 align-items-center">
                  <h3 className="product-heading">Color :</h3>
                  <div className="d-flex gap-15">
                    {singleProdState?.colors?.map((c, index) => (
                      <button
                        key={index}
                        className="color-buttons"
                        style={{ backgroundColor: c }}
                        onClick={() => setColor(c)}
                      >
                        {color === c ? (
                          <i className="fa-solid fa-check"></i>
                        ) : null}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center gap-10 flex-column flex-sm-row">
                <button
                  className="btn btn-secondary me-3"
                  onClick={() => uploadCart()}
                >
                  Add to Cart
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => copyToClipboard(window.location.href)}
                >
                  Copy Link
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="reviews-wrapper py-5 home-wrapper-2">
        <h3 className="title">Reviews</h3>
        <div id="review" className="reviews">
          <form onSubmit={formik.handleSubmit}>
            <div className="d-flex gap-10 align-items-center">
              <ReactStars
                count={5}
                size={24}
                value={formik.values.star}
                onChange={(newValue) => formik.setFieldValue("star", newValue)}
                activeColor="#ffd700"
              />
              {formik.errors.star && formik.touched.star ? (
                <div className="error">{formik.errors.star}</div>
              ) : null}
            </div>
            <textarea
              name="comment"
              value={formik.values.comment}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Write a review"
            />
            {formik.errors.comment && formik.touched.comment ? (
              <div className="error">{formik.errors.comment}</div>
            ) : null}
            <button type="submit">Submit Review</button>
          </form>
        </div>
      </Container>
      <Container class1="popular-products-wrapper py-5 home-wrapper-2">
        <h3>Popular Products</h3>
        <div className="d-flex flex-wrap gap-15">
          {popularProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
