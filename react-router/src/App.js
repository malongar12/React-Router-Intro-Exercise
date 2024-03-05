import { VendingMachine } from './Vending';
import { Lays } from "./Lays";
import { Chetoos } from "./Chetoos";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element ={<VendingMachine />}></Route>
            <Route path="/lays"   element={<Lays />}></Route>
            <Route path="/chetoos"   element={<Chetoos />}></Route>
          </Routes>
        </BrowserRouter>
      
      
    </div>
  );
}

export default App;
