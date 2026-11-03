import { Routes, Route } from "react-router-dom"
import React from "./components/React"
import Application from "./components/Application"
import Nav from "./components/Nav"
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