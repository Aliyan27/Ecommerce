import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./login.css";

const Login = () => {
  const validate = Yup.object({
    email: Yup.string().email("email required").required("required"),
    password: Yup.string().min(6).required(),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: { validate },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log(values);
    },
  });
  return (
    <>
      <div className="Container login">
        <h2>My Account</h2>
        <form onSubmit={formik.handleSubmit}>
          <label>Email: </label>
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <label>Password: </label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <button type="submit">LOGIN</button>
        </form>
      </div>
    </>
  );
};

export default Login;
