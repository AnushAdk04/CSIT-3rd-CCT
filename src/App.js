import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Login"
import Bmi from "./Bmi"
import Joke from "./Joke"
import Temperature from "./Temperature"
import Header from "./Header"
import Footer from "./Footer"
import Map from "./Map"

function App() {
  return (
    <>

      <BrowserRouter>

      <Header/>

      <Routes>
        
        <Route path="/" element={<Login/>}/>
        <Route path="/bmi" element={<Bmi/>}/>
        <Route path="/joke" element={<Joke/>}/>
        <Route path="/temperature" element={<Temperature/>}/>
        <Route path="/map" element={<Map/>}/>

      </Routes>

      <Footer/>

      </BrowserRouter>

    </>
  );
}

export default App;
