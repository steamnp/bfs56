import React, { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import {
  useGetProductsQuery,
  useGetCartQuery,
} from "../features/products/productsService";
import { IoIosLogOut } from "react-icons/io";
import { FaShippingFast } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

// import cart from '../images/cart.svg'
// import user from '../images/user2.svg'

const Header = () => {
  const navigate = useNavigate();
  const getUserFromLocalStorage = JSON.parse(localStorage.getItem("user"));

  // Fetch products and cart data
  const { data: products = [], isSuccess: productsSuccess } =
    useGetProductsQuery();
  const { data: cartProducts = [], isSuccess: cartSuccess } = useGetCartQuery();

  const [subTotal, setSubTotal] = useState(0);
  const [productOpt, setProductOpt] = useState([]);
  const [paginate, setPaginate] = useState(true);

  useEffect(() => {
    if (productsSuccess) {
      // Prepare typeahead options based on products
      const typeHeadData = products.map((element, index) => ({
        id: index,
        prod: element._id,
        name: element.title,
      }));
      setProductOpt(typeHeadData);
    }
  }, [productsSuccess, products]);

  useEffect(() => {
    if (cartSuccess) {
      // Calculate the subtotal
      const sum = cartProducts.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      setSubTotal(sum);
    } else {
      setSubTotal(0);
    }
  }, [cartSuccess, cartProducts]);

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
                <a className="text-white" href="tel:+254 726606039">
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
                  onPaginate={() => console.log("Results paginated")}
                  paginate={paginate}
                  labelKey={"name"}
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
                      Compare <br /> Products{" "}
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
                      Favourite <br /> Wishlist{" "}
                    </p>
                  </Link>
                </div>
                <div>
                  {getUserFromLocalStorage === null ? (
                    <div>
                      <Link
                        to={"/login"}
                        className="d-flex align-items-center gap-10  text-white"
                      >
                        <img src="images/user2.svg" alt="User" />
                        <p className="mb-0">
                          Login <br /> My Account{" "}
                        </p>
                      </Link>
                    </div>
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
                        <span className=" d-inline-block">
                          Hello
                          <br />
                          {getUserFromLocalStorage?.firstname}
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
                          <button
                            className="dropdown-item fs-6"
                            onClick={handleLogout}
                          >
                            <IoIosLogOut /> Logout
                          </button>
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
                        {cartProducts?.length > 0 ? cartProducts?.length : 0}
                      </span>
                      <p className="mb-0">₹{subTotal ? subTotal : 0}</p>
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
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src="images/menu.svg" alt="" />
                      <span className=" me-5 d-inline-block">
                        Shop categories
                      </span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Music & Gaming
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Camera
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Computers & Laptops
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Smart Watches
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Smartphones & Tablets
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item text-white"
                          to="/product"
                        >
                          Audio & Headphones
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          TV & Home Entertainment
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Drones & Accessories
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? "text-white" : "text-light"
                      }
                    >
                      Home
                    </NavLink>
                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        isActive ? "text-white" : "text-light"
                      }
                    >
                      About
                    </NavLink>
                    <NavLink
                      to="/contact"
                      className={({ isActive }) =>
                        isActive ? "text-white" : "text-light"
                      }
                    >
                      Contact
                    </NavLink>
                    <NavLink
                      to="/products"
                      className={({ isActive }) =>
                        isActive ? "text-white" : "text-light"
                      }
                    >
                      Products
                    </NavLink>
                  </div>
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
