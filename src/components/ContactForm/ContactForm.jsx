import { Formik, Form } from "formik";
import CustomInput from "../CustomInput/CustomInput";
import * as Yup from "yup";
import s from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <Formik
      initialValues={{ name: "", phone: "" }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(16, "Must have 16 characters or less")
          .required(),
        phone: Yup.string()
          .max(50, "Must have 50 characters or less")
          .min(3, "Must have 3 characters or more")
          .required(),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(values);
          setSubmitting(false);
        }, 500);
      }}
    >
      <Form className={s.contactForm}>
        <CustomInput
          label="Name"
          name="name"
          type="text"
          placeholder="John Doe"
        />
        <CustomInput
          label="Phone number"
          name="phone"
          type="tel"
          placeholder="1-234-567"
        />
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
