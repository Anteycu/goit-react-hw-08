import { Formik, Form } from "formik";
import CustomInput from "../CustomInput/CustomInput";
import * as Yup from "yup";
import s from "./RegisterForm.module.css";

const RegisterForm = () => {
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .min(6, "Must be 6 characters or more")
          .required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form className={s.regForm}>
        <CustomInput
          label="Name"
          name="name"
          type="text"
          placeholder="John Doe"
        />
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

export default RegisterForm;
