import Application from "./Components/Application"
import React from "./Components/React"
import {Routes, Route} from "react-router-dom"



const App = () => {
  return (
    <>
      
      <Nav/>
      <Routes>
        <Route path="/React" element={<React/>}/>
        <Route path="/Application" element={<Application/>}/>
      </Routes>
      
    
    </>
  )
}

export default App