import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import Container from "../components/Container";
import { useGetProductsOnQueryQuery } from "../features/products/productsService";
import { useLocation } from "react-router-dom";

const OurStore = () => {
  const [grid, setGrid] = useState(4);
  const [newBrand, setNewBrand] = useState([]);
  const [newCategory, setNewCategory] = useState([]);
  const [newTag, setNewTag] = useState([]);

  const [category, setCategory] = useState("");
  const [tag, setTag] = useState("");
  const [brand, setBrand] = useState("");

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const tagValue = queryParams.get("tag");
  const catValue = queryParams.get("category");

  const { data: products, isSuccess } = useGetProductsOnQueryQuery({
    tag: tagValue,
    category: catValue,
  });

  useEffect(() => {
    if (isSuccess) {
      let brandSet = new Set();
      let categorySet = new Set();
      let tagSet = new Set();

      products?.forEach((element) => {
        if (element?.brand?.title) brandSet.add(element?.brand?.title);
        if (element?.category?.title) categorySet.add(element?.category?.title);
        if (element?.tag) tagSet.add(element?.tag);
      });

      setNewBrand([...brandSet]);
      setNewCategory([...categorySet]);
      setNewTag([...tagSet]);
    }
  }, [products, isSuccess]);

  return (
    <>
      <Meta title="Our Store" />
      <BreadCrumb title="Our Store" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Shop By Categories</h3>
              <div>
                <ul className="ps-0">
                  {newCategory?.map((item, index) => (
                    <li key={index} onClick={() => setCategory(item)}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className=" mb-3">
              <div>
                <h5 className="sub-title">Price</h5>
                <div className="d-flex align-items-center gap-10">
                  <div className="form-floating">
                    <input
                      type="number"
                      className="form-control"
                      id="floatingInputFrom"
                      placeholder="From"
                    />
                    <label htmlFor="floatingInputFrom">From</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="number"
                      className="form-control"
                      id="floatingInputTo"
                      placeholder="To"
                    />
                    <label htmlFor="floatingInputTo">To</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Product Tags</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  {newTag?.map((item, index) => (
                    <span
                      className="badge bg-light text-secondary rounded-3 py-2 px-3"
                      key={index}
                      onClick={() => setTag(item)}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Product Brands</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  {newBrand?.map((item, index) => (
                    <span
                      className="badge bg-light text-secondary rounded-3 py-2 px-3"
                      key={index}
                      onClick={() => setBrand(item)}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block" style={{ width: "100px" }}>
                    Sort By:
                  </p>
                  <select
                    name=""
                    defaultValue={"DEFAULT"}
                    className="form-control form-select"
                    id=""
                  >
                    <option disabled value="DEFAULT"></option>
                    <option value="manual">Featured</option>
                    <option value="best-selling">Best Selling</option>
                    <option value="title-ascending">Alphabetically, A-Z</option>
                    <option value="title-descending">
                      Alphabetically, Z-A
                    </option>
                    <option value="price-ascending">Price, low to high</option>
                    <option value="price-descending">Price, high to low</option>
                    <option value="created-ascending">Date, old to new</option>
                    <option value="created-descending">Date, new to old</option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="totalproducts mb-0">
                    {products?.length} Products
                  </p>
                  <div className="d-flex gap-10 align-items-center grid">
                    <img
                      onClick={() => setGrid(3)}
                      src="images/gr4.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => setGrid(4)}
                      src="images/gr3.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => setGrid(6)}
                      src="images/gr2.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => setGrid(12)}
                      src="images/gr.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list pb-5">
              <div className="d-flex gap-10 flex-wrap">
                {products?.map((item, index) => (
                  <ProductCard data={item} grid={grid} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;
