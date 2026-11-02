import {Routes, Route} from "react-router-dom"
import Array from "./components/Array"
import Nav from "./components/Nav"
import Object from "./components/Object"
import Arrayofobject from "./components/Arrayofobject"
import Props from "./components/Props"
import Propsone from "./components/Propsone"

const App = () => {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/Array" element={<Array/>}/>
      <Route path="/Object" element={<Object/>}/>
      <Route path="/Arrayofobject" element={<Arrayofobject/>}/>
      <Route path="/Props" element={<Props/>}/>
    </Routes>
    </>
  )
}

export default App