import react,{useState, useEffect} from "react"
import Recipe_List from "../Components/Recipe_List"
import SearchBar from "../Components/SearchBar"
function Home() {

  const [inputValue, setInputValue] = useState("");
  const [query, setQuery]=useState("")
  const [recipes, setRecipes]=useState([])
  const [isLoading, setIsLoading]=useState(false)
  const [noResults, setNoResults]=useState(false)

  useEffect(() => {
    
    const fetchRecipes=async ()=>{
    if(!query){
      setRecipes([])
      setNoResults(false)
      return; 
    }
    setIsLoading(true)
    setNoResults(false)
  
    try {
  
  
      const response=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      const data=await response.json()
  
      if(data.meals){
        setRecipes(data.meals)
      }
      else {
        setRecipes([])
        setNoResults(true)
      }
  
      
    } catch (error) {
      console.log("Error Fetching Recipes: ",error)
    } finally{
      setIsLoading(false)
    }
  }
  fetchRecipes()
  },[query])
  

  return (
    <div className="App">
      <h1>🍽️ Recipe Finder</h1>

      <div id="SearchBar">
        <SearchBar inputValue={inputValue} setInputValue={setInputValue} onSearch={()=>{setQuery(inputValue)}}/>
      </div>
      
      {isLoading && <p>Searching for Recipes....</p>}
      {noResults && <p>No Recipe Found. Try Something Else</p>}

      <div id="lists"> 
        <Recipe_List recipes={recipes} />
      </div>
     
      </div>
  )

}
export default Home