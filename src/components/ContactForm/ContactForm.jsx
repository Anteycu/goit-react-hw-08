import { Formik, Form } from "formik";
import CustomInput from "../CustomInput/CustomInput";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { postContact } from "../../redux/contacts/operations";

const ContactForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(16, "Must have 16 characters or less")
          .required(),
        number: Yup.string()
          .max(50, "Must have 50 characters or less")
          .min(3, "Must have 3 characters or more")
          .required(),
      })}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          await dispatch(postContact(values));
          resetForm();
        } catch (e) {
          console.error(e);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form className={s.contactForm}>
          <CustomInput
            id="name"
            label="Name"
            name="name"
            type="text"
            placeholder="John Doe"
          />
          <CustomInput
            id="number"
            label="Phone number"
            name="number"
            type="tel"
            placeholder="1-234-567"
          />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Adding contact" : "Add contact"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
