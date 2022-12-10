import { useEffect, useState } from "react";
import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import styles from "./DetailCard.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DetailCard = ({ dentistId, setDentistId }) => {

  const [ dentistFullData, setDentistFullData ] = useState(null);
  const navigate = useNavigate();
  const { state, dispatch } = useContext(ContextGlobal);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${dentistId}`)
      .then(res => { setDentistFullData(res.data) }) 
      .catch(err => navigate("/home"))
  }, []);
  return (
    <div className={`${state.theme === "light" ? "light" : "dark"}`}>
      <h1>Detail Dentist {dentistFullData?.id} </h1>
      <section className="card col-sm-12 col-lg-6 container">
        <div
          className={`card-body row ${state.theme === "light" ? "" : styles.cardDark}`}
        >
          <div className="col-sm-12 col-lg-6">
            <img
              className="card-img-top"
              src="/images/doctor.jpg"
              alt="doctor placeholder"
            />
          </div>
          <div className="col-sm-12 col-lg-6">
            <ul className="list-group">
              <li className="list-group-item">
                Name: {dentistFullData?.name}
              </li>
              <li className="list-group-item">
                Email: {dentistFullData?.email}
              </li>
              <li className="list-group-item">
                Phone: {dentistFullData?.phone}
              </li>
              <li className="list-group-item">
                Website: {dentistFullData?.website}
              </li>
            </ul>
            <div className="text-center">
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailCard;
