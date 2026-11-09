import { Routes, Route } from "react-router-dom"
import Dashboard from "./components/pages/Dashboard"
import Login from "./components/pages/Login"
import Register from "./components/pages/Register"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/Dashboard" element={<Dashboard/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/" element={<Register/>}/>
    </Routes>
    </>
  )
}

export default App