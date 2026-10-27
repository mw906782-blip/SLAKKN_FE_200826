import {Routes, Route} from "react-router-dom"


import Header from "./components/Header"
import Nav from "./components/Nav"
import Anchor from "./components/Anchor"




const App = () => {
  return(<>
  
  <Routes>
    <Route path="/Header" element={<Header/>}/>
    <Route path="/Nav" element={<Nav/>}/>
  </Routes>
  <Anchor/>
   


    
  </>)
}

export default App