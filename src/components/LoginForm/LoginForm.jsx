import { Formik, Form } from "formik";
import CustomInput from "../CustomInput/CustomInput";
import * as Yup from "yup";
import s from "./LoginForm.module.css";

const LoginForm = () => {
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
          console.log(values);
          setSubmitting(false);
        }, 500);
      }}
    >
      <Form className={s.loginForm}>
        <CustomInput
          label="Email"
          name="email"
          type="email"
          placeholder="example@mail.com"
        />
        <CustomInput
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
