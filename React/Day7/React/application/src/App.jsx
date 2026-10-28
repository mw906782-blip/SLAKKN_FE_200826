import {Routes, Route} from "react-router-dom"



import Nav from "./components/Nav"
import String from "./components/String"
import Boolean from "./components/Boolean"
import Number from "./components/Number"
import Falsy from "./components/Falsy"





const App = () => {
  return (
    <>
    <Nav/>
    <Routes>

        <Route path="/" element={<String/>}/>
        <Route path="/Number" element={<Number/>}/>
        <Route path="/Boolean" element={<Boolean/>}/>
        <Route path="/Falsy" element={<Falsy/>}/>
        


    </Routes>
    
    
    </>
  )
}

export default App