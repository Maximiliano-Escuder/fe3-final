
import { Layout } from "./Components/Layout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/home" element={<Home />}/>
              <Route path="/contacto" element={<Contact />}/>
              <Route path="/favs" element={<Favs />}/>
              <Route path="/dentista/:id" element={<Detail />}/>
              <Route path="*" element={<Navigate to="/home"/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
