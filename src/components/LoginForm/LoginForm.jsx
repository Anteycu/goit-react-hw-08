import { Formik, Form } from "formik";
import CustomInput from "../CustomInput/CustomInput";
import * as Yup from "yup";
import s from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/slice";
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
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          const { email, password } = values;
          dispatch(login({ email, token: password }));
          setSubmitting(false);
        }, 500);
      }}
    >
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
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
