import react,{useState, useEffect} from "react"
import { Routes,Route } from "react-router-dom"
import RecipeDetailsPage from "./Pages/RecipeDetailsPage"
import Home from "./Pages/Home"
import "./App.css"
function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe/:id" element={<RecipeDetailsPage />} />
    </Routes>
    
  )
}

export default App