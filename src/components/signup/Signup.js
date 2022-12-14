import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/Firebase";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const validate = Yup.object({
    email: Yup.string().email("email required").required("required"),
    password: Yup.string().min(6).required(),
    repassword: Yup.string()
      .oneOf([Yup.ref("password")], "Both password need to be the same")
      .required("required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      repassword: "",
    },
    validationSchema: validate,
    onSubmit: async (values) => {
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.repassword
        );
        console.log(user, "data");
        navigate("/login");
      } catch (error) {
        console.log(error.message);
      }

      alert(JSON.stringify(values, null, 2));
      console.log(values);
    },
  });
  return (
    <>
      <div className="Container login">
        <h2>Signup</h2>
        <form onSubmit={formik.handleSubmit}>
          <label>Email: </label>
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {<p>{formik.errors.email}</p>}
          <label>Password: </label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {<p>{formik.errors.password}</p>}
          <label>RE-Password: </label>
          <input
            type="password"
            placeholder="repassword"
            name="repassword"
            onChange={formik.handleChange}
            value={formik.values.repassword}
          />
          {<p>{formik.errors.repassword}</p>}
          <button type="submit">LOGIN</button>
        </form>
      </div>
    </>
  );
};

export default Signup;
