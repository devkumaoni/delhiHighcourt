import { Routes , Route} from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { About , About2 , Home } from "./Components/pages";

function App() {
  return (

    <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/About2" element={<About2/>}/>
    </Routes>
    
    </div>
  );
}

export default App;