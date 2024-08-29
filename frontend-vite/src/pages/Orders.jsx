import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { useGetOrdersQuery } from "../features/products/productsService";

const Orders = () => {
  const { data: myOrders, isLoading, error } = useGetOrdersQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Meta title={"My Orders"} />
      <BreadCrumb title="My Orders" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">Product </h4>
              <h4 className="cart-col-2">Price </h4>
              <h4 className="cart-col-3">Quantity </h4>
              <h4 className="cart-col-4">Total </h4>
            </div>

            {myOrders &&
              myOrders.map(
                (item, index) =>
                  item &&
                  item.orderItems.map((i, k) => (
                    <div
                      className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center"
                      key={k}
                    >
                      <div className="cart-col-1 gap-15 d-flex align-items-center">
                        <div className="w-25">
                          <img
                            src={
                              i.product.images
                                ? i?.product?.images?.[0]
                                : "https://hyderabadangels.in/wp-content/uploads/2019/11/dummy-logo.png"
                            }
                            className="img-fluid"
                            alt="productimage"
                          />
                        </div>

                        <div className="w-75">
                          <p>{i?.product?.title}</p>
                          <p>{i?.color?.title}</p>
                        </div>
                      </div>
                      <div className="cart-col-2">
                        <h5 className="price">₹{i?.product?.price}</h5>
                      </div>
                      <div className="cart-col-3 d-flex align-items-center gap-15">
                        <h5 className="price">{i?.quantity}</h5>
                      </div>
                      <div className="cart-col-4">
                        <h5 className="price">₹{i?.price * i?.quantity}</h5>
                      </div>
                    </div>
                  ))
              )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Orders;
