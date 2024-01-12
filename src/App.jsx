import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Wines from "./Pages/Wines"
import NewWine from "./Pages/NewWine"


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/wines' element={<Wines />} />
        <Route path='/new-wine' element={<NewWine />} />
      </Routes>
    </>
  )
}

export default App
