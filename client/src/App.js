import { BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./views/home/Home"
import Pets from "./components/Pet/Pets"
import Pet from "./components/Pet/Pet";
import AddPet from "./components/AddPet";
import PetSearchList from "./components/petsearchlist/PetSearchList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pets" element={<Pets/>} />
        <Route path="/pets/:id" element={<Pet/>} />
        <Route path="/pets/add" element={<AddPet />} />
        <Route path ='/pets/search' element={<PetSearchList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
