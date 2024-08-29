import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Container from "../components/Container";
import {
  useGetCartQuery,
  useCreateOrderMutation,
  useEmptyCartMutation,
} from "../features/products/productsService";
import { useFormik } from "formik";
import * as yup from "yup";
import Loader from "../components/Loader";
import { Token } from "../utils/tokenConfig";

const shippingSchema = yup.object({
  firstName: yup.string().required("First Name is Required"),
  lastName: yup.string().required("Last Name is Required"),
  address: yup.string().required("Address is Required"),
  city: yup.string().required("City is required"),
  pin: yup.number().required("Pin code is required"),
  state: yup.string().required("State is required"),
  country: yup.string().required("Country is required"),
});

const Checkout = () => {
  const navigate = useNavigate();
  const token = Token();

  const { data: cartProducts, refetch } = useGetCartQuery();
  const [createOrder, { isLoading: isCreatingOrder }] =
    useCreateOrderMutation();
  const [emptyCart] = useEmptyCartMutation();

  const [subTotal, setSubTotal] = useState();
  const [orderItems, setOrderItems] = useState([]);
  const shippingCost = 150;

  // Fetch cart products
  useEffect(() => {
    refetch();
  }, [refetch]);

  // Calculate the subtotal
  useEffect(() => {
    if (cartProducts) {
      let sum = 0;
      cartProducts.forEach((item) => {
        sum += item.price * item.quantity;
      });
      setSubTotal(sum);
    }
  }, [cartProducts]);

  // Prepare order items
  useEffect(() => {
    if (cartProducts) {
      const items = cartProducts.map((item) => ({
        product: item.productId._id,
        color: item.color._id,
        quantity: item.quantity,
        price: item.price,
      }));
      setOrderItems(items);
    }
  }, [cartProducts]);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      pin: "",
      state: "",
      country: "",
      others: "",
    },
    validationSchema: shippingSchema,
    onSubmit: async (values) => {
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );
      if (!res) {
        alert("Razorpay SDK failed to load");
        return;
      }

      try {
        const result = await fetch(
          "http://localhost:5000/api/user/order/checkout",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ amount: subTotal + shippingCost }),
          }
        ).then((res) => res.json());

        const { amount, id: order_id, currency } = result.order;

        const options = {
          key: "rzp_test_AzgIH0PE6NUeqn",
          amount: amount,
          currency: currency,
          name: "Creative",
          description: "Test Transaction",
          order_id: order_id,
          handler: async function (response) {
            const data = {
              orderCreationId: order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
            };

            const paymentResult = await fetch(
              "http://localhost:5000/api/user/order/paymentverification",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(data),
              }
            ).then((res) => res.json());

            localStorage.setItem("payment", JSON.stringify(paymentResult));

            await createOrder({
              shippingInfo: values,
              paymentInfo: paymentResult,
              totalPrice: subTotal + shippingCost,
              totalPriceAfterDiscount: subTotal,
              orderItems,
              shippingCost,
            }).unwrap();

            await emptyCart().unwrap();
            localStorage.removeItem("address");
            localStorage.removeItem("payment");
            navigate("/myorders");
          },
          prefill: {
            name: "Creative Clothing Inc",
            email: "creativeclothing@gmail.com",
            contact: "784-457-875",
          },
          notes: {
            address: "Creative Clothing Pvt Ltd, Kochi, Kerala",
          },
          theme: {
            color: "#61dafb",
          },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      } catch (error) {
        alert("Something went wrong");
      }
    },
  });

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  return (
    <>
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name">Ecomm</h3>
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link className="text-dark total-price" to="/cart">
                      Cart
                    </Link>
                  </li>
                  &nbsp; /
                  <li
                    className="breadcrumb-item total-price active"
                    aria-current="page"
                  >
                    Information
                  </li>
                  &nbsp; /&nbsp;
                  <li className="breadcrumb-item total-price active">
                    Shipping
                  </li>
                  &nbsp; /
                  <li
                    className="breadcrumb-item total-price active"
                    aria-current="page"
                  >
                    Payment
                  </li>
                </ol>
              </nav>
              <h4 className="title total">Contact Information</h4>
              <p className="user-details total">
                Creative Clothing (creativeclothing@gmail.com)
              </p>
              <h4 className="mb-3">Shipping Address</h4>
              <form
                action=""
                className="d-flex gap-15 flex-wrap justify-content-between"
                onSubmit={formik.handleSubmit}
              >
                <div className="w-100">
                  <select
                    name="country"
                    className="form-control form-select"
                    id="countrySelect"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.country}
                  >
                    <option value="" disabled>
                      Select Country
                    </option>
                    <option value="india">India</option>
                    <option value="usa">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="australia">Australia</option>
                    <option value="germany">Germany</option>
                  </select>
                  <div className="error ms-2 my-1">
                    {formik.touched.country && formik.errors.country}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-control"
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.firstName && formik.errors.firstName}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control"
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.lastName && formik.errors.lastName}
                  </div>
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Address"
                    className="form-control"
                    name="address"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.address && formik.errors.address}
                  </div>
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="City"
                    className="form-control"
                    name="city"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.city && formik.errors.city}
                  </div>
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Pin Code"
                    className="form-control"
                    name="pin"
                    value={formik.values.pin}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.pin && formik.errors.pin}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="State"
                    className="form-control"
                    name="state"
                    value={formik.values.state}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.state && formik.errors.state}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Country"
                    className="form-control"
                    name="country"
                    value={formik.values.country}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.country && formik.errors.country}
                  </div>
                </div>
                <div className="w-100">
                  <textarea
                    rows="5"
                    placeholder="Additional Information"
                    className="form-control"
                    name="others"
                    value={formik.values.others}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.others && formik.errors.others}
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-dark border-0"
                  disabled={isCreatingOrder}
                >
                  {isCreatingOrder ? "Processing" : "Pay"}
                </button>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="checkout-right-data">
              <h4 className="title">Order Summary</h4>
              <div className="d-flex justify-content-between py-3">
                <p className="total">Subtotal</p>
                <p className="total">{subTotal ? `₹${subTotal}` : "₹0"}</p>
              </div>
              <div className="d-flex justify-content-between py-3">
                <p className="total">Shipping</p>
                <p className="total">
                  {shippingCost ? `₹${shippingCost}` : "₹0"}
                </p>
              </div>
              <div className="d-flex justify-content-between py-3">
                <p className="total">Total</p>
                <p className="total">
                  {subTotal ? `₹${subTotal + shippingCost}` : "₹0"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
