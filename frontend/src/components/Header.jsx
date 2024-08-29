import React, { useEffect, useState, useMemo } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import {
  useGetCartQuery,
  useGetProductsQuery,
} from "../features/products/productsService";
import { CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";
import { FaShippingFast } from "react-icons/fa";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getUserFromLocalStorage = useMemo(
    () => JSON.parse(localStorage.getItem("user")),
    []
  );

  const { data: products = [] } = useGetProductsQuery();
  const { data: cartProducts = [] } = useGetCartQuery();

  const [subTotal, setSubTotal] = useState(0);
  const [productOpt, setProductOpt] = useState([]);

  useEffect(() => {
    const typeHeadData = products.map((product, index) => ({
      id: index,
      prod: product._id,
      name: product.title,
    }));
    setProductOpt(typeHeadData);
  }, [products]);

  useEffect(() => {
    const sum = cartProducts.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setSubTotal(sum);
  }, [cartProducts]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping Over ₹2000 & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:{" "}
                <a className="text-white" href="tel:+254726606039">
                  +254 726606039
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white" to="/">
                  Creative.
                </Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <Typeahead
                  id="pagination-example"
                  paginate={true}
                  labelKey="name"
                  options={productOpt}
                  minLength={2}
                  onChange={(selected) => {
                    if (selected.length > 0) {
                      navigate(`/product/${selected[0]?.prod}`);
                    }
                  }}
                  placeholder="Search for products..."
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    to="/compare-product"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="images/compare.svg" alt="compare" />
                    <p className="mb-0">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/wishlist"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="images/wishlist.svg" alt="wishlist" />
                    <p className="mb-0">
                      Favourite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  {getUserFromLocalStorage === null ? (
                    <Link
                      to="/login"
                      className="d-flex align-items-center gap-10 text-white"
                    >
                      <img src="images/user2.svg" alt="User" />
                      <p className="mb-0">
                        Login <br /> My Account
                      </p>
                    </Link>
                  ) : (
                    <div>
                      <button
                        className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center mb-0"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img src="images/user2.svg" alt="User" />
                        <span className="d-inline-block">
                          Hello <br /> {getUserFromLocalStorage?.firstname}
                        </span>
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <Link className="dropdown-item fs-6" to="/profile">
                            <CgProfile /> Profile
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item fs-6" to="/myorders">
                            <FaShippingFast /> My Orders
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item fs-6"
                            to="#"
                            onClick={handleLogout}
                          >
                            <IoIosLogOut /> Logout
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                <div>
                  <Link
                    to="/cart"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="images/cart.svg" alt="cart" />
                    <div className="d-flex flex-column">
                      <span className="badge bg-white text-dark">
                        {cartProducts.length}
                      </span>
                      <p className="mb-0">₹{subTotal}</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="navbar navbar-expand-lg navbar-light bg-light">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav d-flex align-items-center justify-content-center">
                    <li className="nav-item">
                      <NavLink className="nav-link text-white" to="/">
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link text-white" to="/shop">
                        Shop
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link text-white" to="/blog">
                        Blog
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link text-white" to="/contact">
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
