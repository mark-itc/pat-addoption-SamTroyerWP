import { BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./views/home/Home"
import Pets from "./components/Pet/Pets"
import Pet from "./components/Pet/Pet";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pets" element={<Pets/>} />
        <Route path="/pets/:id" element={<Pet/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
