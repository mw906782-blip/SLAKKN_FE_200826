import Task from "./components/Task"
import Taskone from "./components/Taskone"
import Taskthree from "./components/Taskthree"
import Tasktwo from "./components/Tasktwo"
import Nav from "./components/Nav"

import {Routes, Route} from "react-router-dom"


const App = () => {
  return (
    <>
    <Nav/>
    <Routes>
        <Route path="/Task" element={<Task/>}/>
        <Route path="/Taskone" element={<Taskone/>}/>
        <Route path="/Tasktwo" element={<Tasktwo/>}/>
        <Route path="/Taskthree" element={<Taskthree/>}/>
    </Routes>
    
    
    </>
  )
}

export default App