import { Formik, Form } from "formik";
import CustomInput from "../CustomInput/CustomInput";
import * as Yup from "yup";
import s from "./RegisterForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/slice";

const RegisterForm = () => {
  const dispatch = useDispatch();
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
          const { password, ...credentials } = values;
          dispatch(register({ user: credentials, token: password }));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form className={s.regForm}>
        <CustomInput
          id="name"
          label="Name"
          name="name"
          type="text"
          placeholder="John Doe"
        />
        <CustomInput
          id="email"
          label="Email"
          name="email"
          type="email"
          placeholder="example@mail.com"
        />
        <CustomInput
          id="password"
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
