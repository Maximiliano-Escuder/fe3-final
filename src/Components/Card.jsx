import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { ContextGlobal } from "../Components/utils/global.context";
import { useContext } from "react";

const Card = ({ dentistData }) => {

  const handleAddToFav = () => {
    if (JSON.parse(localStorage.getItem(dentistData.id)) === null) {
      dispatch({ type: "AddToFavs", dentistFav: dentistData})
      alert("Dentist added successfully")
    } else {
      dispatch({ type: "deleteFromFavs", dentistFav: dentistData})
      alert("Dentist removed")
    }
  }

  const { state, dispatch } = useContext(ContextGlobal);

  return (
    <>
      <div className={`card ${state.theme === "light" ? "" : "bg-secondary"}`}>
        <img
          className="card-img-top"
          src="/images/doctor.jpg"
          alt="doctor placeholder"
        />
        <div className={`card-body ${styles.CardBody}`}>
          <Link to={`/dentista/${dentistData.id}`}>
            <h6 className={`card-title ${styles.title}`}>{dentistData.name}</h6>
            <p>{dentistData.username}</p>
          </Link>
          <button onClick={() => handleAddToFav()} className={`btn dark btn-${state.theme === "light" ? "light" : "dark"} ${styles.btnStyle}`}>⭐</button>
        </div>
      </div>
    </>
  );
};

export default Card;
