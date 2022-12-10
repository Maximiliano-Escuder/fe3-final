import { useEffect, useContext} from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";
import axios from "axios";

const Home = () => {

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        dispatch( { type: "GetAllDentists", dentistsData: res.data })})
      .catch(err => console.log(err))
  }, [])

  const { state, dispatch } = useContext(ContextGlobal);

  return (
    <div className={`${state.theme === "light" ? "light" : "dark"}`}>
      <h1>Home</h1>
      <div className="card-grid container">
        {state.data.map(dentist => (
          <Card key={dentist.id} dentistData={dentist}/> 
        ))}
      </div>
    </div>
  );
};

export default Home;
