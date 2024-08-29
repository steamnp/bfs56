import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterUserMutation } from "../features/auth/authService"; // Updated import
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  firstname: Yup.string().required("First name is required"),
  lastname: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Please give a valid email")
    .required("Email is required"),
  mobile: Yup.number().required("Mobile is required"),
  password: Yup.string().required("Password is required"),
});

const Signup = () => {
  const navigate = useNavigate();
  const [registerUser, { isLoading, isError, isSuccess }] =
    useRegisterUserMutation(); // Using the hook from createApi

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const result = await registerUser(values).unwrap();
        console.log("Signup successful:", result);
        formik.resetForm();
        navigate("/login");
      } catch (err) {
        console.error("Failed to sign up:", err);
      }
    },
  });

  useEffect(() => {
    if (isSuccess && !isError) {
      navigate("/login");
      formik.resetForm();
    }
  }, [isSuccess, isError]);

  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Sign Up</h3>
              <form
                action=""
                className="d-flex flex-column gap-15"
                onSubmit={formik.handleSubmit}
              >
                <CustomInput
                  placeholder="First Name"
                  classname="form-control"
                  type="text"
                  value={formik.values.firstname}
                  onChange={formik.handleChange("firstname")}
                  onBlur={formik.handleBlur("firstname")}
                />
                <div className="error">
                  {formik.touched.firstname && formik.errors.firstname}
                </div>
                <CustomInput
                  placeholder="Last Name"
                  classname="form-control"
                  type="text"
                  value={formik.values.lastname}
                  onChange={formik.handleChange("lastname")}
                  onBlur={formik.handleBlur("lastname")}
                />
                <div className="error">
                  {formik.touched.lastname && formik.errors.lastname}
                </div>
                <CustomInput
                  placeholder="Email"
                  classname="form-control"
                  type="text"
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                />
                <div className="error">
                  {formik.touched.email && formik.errors.email}
                </div>
                <CustomInput
                  placeholder="Mobile"
                  classname="form-control"
                  type="number"
                  value={formik.values.mobile}
                  onChange={formik.handleChange("mobile")}
                  onBlur={formik.handleBlur("mobile")}
                />
                <div className="error">
                  {formik.touched.mobile && formik.errors.mobile}
                </div>
                <CustomInput
                  placeholder="Password"
                  classname="form-control"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                />
                <div className="error">
                  {formik.touched.password && formik.errors.password}
                </div>
                <button
                  className="button border-0"
                  type="submit"
                  disabled={isLoading}
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signup;
