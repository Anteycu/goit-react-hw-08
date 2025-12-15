import { Formik, Form } from "formik";
import CustomInput from "../CustomInput/CustomInput";
import * as Yup from "yup";
import s from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { useId } from "react";

const LoginForm = () => {
  const dispatch = useDispatch();
  const email = useId();
  const password = useId();
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email").required("Required"),
        password: Yup.string()
          .min(6, "Must be at least 6 characters or more")
          .required("Required"),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        const { email, password } = values;
        try {
          await dispatch(login({ email, password }));
        } catch (err) {
          console.error("Login failed:", err);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form className={s.loginForm}>
          <CustomInput
            id={email}
            label="Email"
            name="email"
            type="email"
            placeholder="example@mail.com"
          />
          <CustomInput
            id={password}
            label="Password"
            name="password"
            type="password"
            placeholder="password"
          />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
