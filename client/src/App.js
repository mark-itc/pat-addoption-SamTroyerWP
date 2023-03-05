import React from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import About from "./components/About";
import PetDetail from "./components/PetDetail"
import { PrivateRouteAddPet } from "./private/PrivateRouteAddPet";
import { PrivateRouteUser } from "./private/PrivateRouteUser";
import { PrivateRoutePets } from "./private/PrivateRoutePets";
import { useSelector } from "react-redux";


function App() {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  console.log(isLoggedIn);
  
  return (
    <React.Fragment>
      <header>
        <Dashboard/>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home/>} exact />
          <Route path='/user' element={<PrivateRouteUser/>}/>
          <Route path='/profile' element={<PrivateRouteUser/>}/>
          <Route path='/add' element={<PrivateRouteAddPet />}  />
          <Route path='/pets' element={<PrivateRoutePets />}  />
          <Route path='/about' element={<About />}  />
          <Route path='/pets/:id' element={<PetDetail/>} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;

