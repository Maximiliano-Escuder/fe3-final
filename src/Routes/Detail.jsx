import DetailCard from "../Components/DetailCard";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [ dentistId, setDentistId ] = useState(useParams().id)

  return (
    <>
      <DetailCard dentistId={dentistId} setDentistId={setDentistId}/>
    </>
  )
}

export default Detail