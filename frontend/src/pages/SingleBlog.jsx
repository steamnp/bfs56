import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Container from "../components/Container";
import { useGetAblogQuery } from "../features/blog/blogService";

const SingleBlog = () => {
  const location = useLocation();
  const blogID = location.pathname.split("/")[2];

  // Use the useGetAblogQuery hook to fetch the single blog by its ID
  const { data: blog, error, isLoading } = useGetAblogQuery(blogID);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading blog</div>;
  }

  return (
    <>
      <Meta title={blog?.title} />
      <BreadCrumb title={blog?.title} />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blogs" className="d-flex align-items-center gap-10">
                <HiOutlineArrowLeft className="fs-4" /> Go back to Blogs
              </Link>
              <h3 className="title">{blog?.title}</h3>
              <img
                src={blog?.image}
                className="img-fluid w-100 my-4"
                alt="blog"
              />
              <p dangerouslySetInnerHTML={{ __html: blog?.description }}></p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
