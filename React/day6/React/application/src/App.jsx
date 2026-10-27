import {Routes, Route} from "react-router-dom"


import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Help from "./components/Help"
import Nav from "./components/Nav"
const App = () => {
  return (
    <>
    <Nav/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Help" element={<Help/>}/>
    </Routes>
    </>
  )
}

export default App