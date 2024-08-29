import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../features/auth/authService"; // Import the hook

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
  const [registerUser, { data, isLoading, isError, isSuccess }] =
    useRegisterUserMutation(); // Use the hook
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      registerUser(values); // Use the hook to make the API call
    },
  });

  useEffect(() => {
    if (isSuccess) {
      formik.resetForm();
      navigate("/login");
    }
  }, [isSuccess, navigate, formik]);

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
                  name="firstname" // Updated to match Formik's name
                  value={formik.values.firstname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <div className="error">
                  {formik.touched.firstname && formik.errors.firstname}
                </div>
                <CustomInput
                  placeholder="Last Name"
                  classname="form-control"
                  type="text"
                  name="lastname" // Updated to match Formik's name
                  value={formik.values.lastname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <div className="error">
                  {formik.touched.lastname && formik.errors.lastname}
                </div>
                <CustomInput
                  placeholder="Email"
                  classname="form-control"
                  type="email" // Changed from text to email for validation
                  name="email" // Updated to match Formik's name
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <div className="error">
                  {formik.touched.email && formik.errors.email}
                </div>
                <CustomInput
                  placeholder="Mobile"
                  classname="form-control"
                  type="number"
                  name="mobile" // Updated to match Formik's name
                  value={formik.values.mobile}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <div className="error">
                  {formik.touched.mobile && formik.errors.mobile}
                </div>
                <CustomInput
                  placeholder="Password"
                  classname="form-control"
                  type="password"
                  name="password" // Updated to match Formik's name
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <div className="error">
                  {formik.touched.password && formik.errors.password}
                </div>
                <button
                  className="button border-0"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing Up..." : "Sign Up"}
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
