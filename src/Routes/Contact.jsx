import Form from "../Components/Form";
import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";

const Contact = () => {

  const { state, dispatch } = useContext(ContextGlobal);

  return (
    <div className={`${state.theme === "light" ? "light" : "dark"}`}>
      <h1>Want to know more?</h1>
      <h6 className="text-center">Send us your questions and we will contact you</h6>
      <Form />
    </div>
  );
};

export default Contact;
