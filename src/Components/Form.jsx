import { useFormik } from "formik";
import { useContext} from "react";
import styles from "./Form.module.css";
import { ContextGlobal } from "../Components/utils/global.context";
import * as Yup from "yup"
import { useState } from "react";

const Form = () => {

  const { state, dispatch } = useContext(ContextGlobal);

  const [ message, setMessage ] = useState(null);

  const sendForm = ( data ) => {
    setMessage(`Thanks ${values.fullName}, we will contact you via email`)
    console.log(data)
  };

  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues: {
      fullName: "",
      email: ""
    },

    validationSchema: Yup.object({
      fullName: Yup.string("Invalid input").min(6, "Full name min length is 6 characters").required("Please, enter your full name"),
      email: Yup.string("Invalid input").email("Enter a valid email").required("Please, enter your email")
    }),
    validateOnChange:false,
    validateOnBlur:false,
    onSubmit: sendForm
  })

  return (
    <>
      <div
        className={`text-center card container ${styles.card} ${state.theme === "light" ? "" : "bg-secondary"}`}
      >
        <div className={`card-body ${styles.CardBody}`}>
          <form onSubmit={ handleSubmit }>
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Full name"
              name="fullName"
              onChange={ handleChange }
              value={values.fullName}
            />
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Email"
              name="email"
              onChange={ handleChange }
              value={values.email}
            />
            <button className={`btn btn-${state.theme === "light" ? "secondary" : "dark"}`} type="submit">
              Send
            </button>
          </form>
        </div>
        {errors.fullName || errors.email ? <ul className="list-group">
          {errors.fullName ? <li className="list-group-item list-group-item-danger">{errors.fullName}</li> : null}
          {errors.email ? <li className="list-group-item list-group-item-danger">{errors.email}</li> : null}
        </ul> : null}
      </div>
      {message !== null ? <div className="text-center">{message}</div> : null}
    </>
  );
};

export default Form;
