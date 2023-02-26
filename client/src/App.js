import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddPet from "./components/AddPet";
import Pets from "./components/Pet/Pets";
import About from "./components/About";
import PetDetail from "./components/PetDetail"

function App() {
  return (
    <React.Fragment>
      <header>
        <Header/>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home/>} exact />
          <Route path='/add' element={<AddPet />}  />
          <Route path='/pets' element={<Pets />}  />
          <Route path='/about' element={<About />}  />
          <Route path='/pets/:id' element={<PetDetail/>} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
