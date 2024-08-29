import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProducts from "../components/SpecialProducts";
import Container from "../components/Container";
import { services } from "../utils/Data";
import { useGetProductsQuery } from "../features/products/productsService";
import { useGetBlogsQuery } from "../features/blog/blogService"; // Updated import

const Home = () => {
  const { data: products, isSuccess: productsSuccess } = useGetProductsQuery();
  const {
    data: blogs,
    isSuccess: blogsSuccess,
    isLoading: blogsLoading,
    isError: blogsError,
    error: blogsErrorMessage,
  } = useGetBlogsQuery();

  // Dispatch to set initial state if needed
  useEffect(() => {
    if (productsSuccess) {
      // Perform any actions needed with fetched products
    }
  }, [productsSuccess]);

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
              {/* Small banners */}
              {/* ... */}
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.image} alt="Services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-15">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              {/* Categories */}
              {/* ... */}
            </div>
          </div>
        </div>
      </Container>

      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12 d-flex justify-content-between align-items-center">
            <h3 className="section-heading">Featured Collection</h3>
            <Link to="/product?tag=featured" className="text-white button mb-4">
              see more..
            </Link>
          </div>
          {products?.slice(0, 4).map((item, index) => (
            <ProductCard data={item} key={index} />
          ))}
        </div>
      </Container>

      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <span className="p-2 mb-1 border rounded">sponsored</span>
          </div>
          <div className="col-12">
            <div className="famous-card-wrapper d-flex justify-content-between align-items-center flex-wrap">
              {/* Add famous products cards */}
            </div>
          </div>
        </div>
      </Container>

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
          {products?.slice(0, 2).map((item, index) => (
            <SpecialProducts
              key={index}
              title={item?.title}
              image={item?.images[0]}
              category={item?.category}
              price={item?.price}
            />
          ))}
        </div>
      </Container>

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
          {products?.slice(0, 4).map((item, index) => (
            <ProductCard data={item} key={index} />
          ))}
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
                {/* Add other brands */}
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
          {blogsLoading ? (
            <p>Loading blogs...</p>
          ) : blogsError ? (
            <p>Error: {blogsErrorMessage.message}</p>
          ) : (
            <div className="d-flex">
              {blogs?.map((blog, index) => (
                <BlogCard data={blog} key={index} />
              ))}
            </div>
          )}
        </div>
      </Container>
    </>
  );
};

export default Home;
