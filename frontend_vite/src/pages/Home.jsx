import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProducts from "../components/SpecialProducts";
import Container from "../components/Container";
import { services } from "../utils/Data";
import { useGetBlogsQuery } from "../features/blog/blogService"; // Updated import
import { useGetProductsQuery } from "../features/products/productsService"; // Use the RTK Query hook

const Home = () => {
  // Fetch blogs using the new hook
  const {
    data: blogState,
    error: blogError,
    isLoading: blogLoading,
  } = useGetBlogsQuery();

  // Fetch products using the new RTK Query hook
  const {
    data: productState,
    error: productError,
    isLoading: productLoading,
  } = useGetProductsQuery();

  if (blogLoading || productLoading) return <div>Loading...</div>;
  if (blogError) return <div>Error loading blogs</div>;
  if (productError) return <div>Error loading products</div>;

  return (
    <>
      <Container class1="py-5">
        <div className="row border">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img
                src="images/main-banner-2.jpg"
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>Bose QuietComfort® 45 </h4>
                <h5>Headphones </h5>
                <p>From ₹4500.00 </p>
                <Link className="button">BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-01.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Best Sale.</h4>
                  <h5>MacBook Air</h5>
                  <p>
                    From ₹4844.00/mo
                    <br /> or ₹99900.00
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-02.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL.</h4>
                  <h5>
                    Apple Watch <br /> Series 9
                  </h5>
                  <p>From ₹41900.00*</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-03.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad Air</h5>
                  <p>From ₹59900.00</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-04.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4> AUDIO STATION</h4>
                  <h5>AirPods Max</h5>
                  <p>From ₹59900.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services?.map((i, j) => (
                <div className="d-flex align-items-center gap-15" key={j}>
                  <img src={i.image} alt="Services" />
                  <div>
                    <h6>{i.title}</h6>
                    <p className="mb-0">{i.tagline}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* categories section */}
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-15">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              {/* Category items */}
            </div>
          </div>
        </div>
      </Container>

      {/* featured section */}
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12 d-flex justify-content-between align-items-center">
            <h3 className="section-heading">Featured Collection</h3>
            <Link to="/product?tag=featured" className="text-white button mb-4">
              see more..
            </Link>
          </div>
          {productState.map((item, index) => {
            if (index < 4) {
              return <ProductCard data={item} key={index} />;
            }
          })}
        </div>
      </Container>

      {/* special product section */}
      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12 d-flex justify-content-between align-items-center">
            <h3 className="section-heading">Special Products</h3>
            <Link to="/product" className="text-white button mb-4">
              see more..
            </Link>
          </div>
        </div>
        <div className="row">
          {productState?.map((item, index) => {
            if (index < 2) {
              return (
                <SpecialProducts
                  key={index}
                  title={item?.title}
                  image={item?.images[0]}
                  category={item?.category}
                  price={item?.price}
                />
              );
            }
          })}
        </div>
      </Container>

      {/* popular section */}
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12 d-flex justify-content-between align-items-center">
            <h3 className="section-heading">Popular Products</h3>
            <Link to="/product?tag=popular" className="text-white button mb-4">
              see more..
            </Link>
          </div>
        </div>
        <div className="row">
          {productState.map((item, index) => {
            if (index < 4) {
              return <ProductCard data={item} key={index} />;
            }
          })}
        </div>
      </Container>

      <Container class1="marquee-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
        </div>
        <div className="">
          <div className="d-flex">
            {blogState?.map((blog, index) => (
              <BlogCard data={blog} key={index} />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
