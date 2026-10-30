import Task from "./components/Task"
import Taskone from "./components/Taskone"
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
    </Routes>
    
    
    </>
  )
}

export default App