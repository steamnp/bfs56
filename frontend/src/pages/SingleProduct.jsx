import React from "react";
import { useParams } from "react-router-dom";
import { useGetAProductQuery } from "../features/products/productsService";

const SingleProduct = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetAProductQuery(id);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching product</p>;

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <img src={data.images[0]} alt={data.title} />
      <p>Price: ₹{data.price}</p>
      {/* Render other product details */}
    </div>
  );
};

export default SingleProduct;
