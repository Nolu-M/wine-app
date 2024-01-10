import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Wines from "./Pages/Wines"


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/wines' element={<Wines />} />
      </Routes>
    </>
  )
}

export default App
