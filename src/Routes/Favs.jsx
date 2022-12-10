import React from "react";
import { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

const Favs = () => {

  const { state, dispatch } = useContext(ContextGlobal);

  return (
    <div className={`${state.theme === "light" ? "light" : "dark"}`}>
      <h1>Dentists Favs</h1>
      <div className="card-grid container">
        {Object.keys(localStorage).map((key) => {
          return <Card key={key} dentistData={JSON.parse(localStorage.getItem(key))}/>
        })}
      </div>
    </div>
  );
};

export default Favs;
