import React, {useEffect,useState} from 'react'
import {Link,useParams} from "react-router-dom"
import "./RecipeDetailsPage.css"

function RecipeDetailsPage() {
    const {id}=useParams()
    const [recipe,setRecipe]=useState(null)
    useEffect(() => {
        const fetchRecipe=async ()=>{
            try {
                const res=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
                const data=await res.json()
                if (data.meals && data.meals.length>0){
                    setRecipe(data.meals[0])
                }
            } catch (error) {
                console.error("Failed to fetch Recipe", error)
            }
        }
        fetchRecipe();
    }, [id]);


    const parseIngredients=()=>{
        const ingredients=[]
        for(let i=1;i<=20;i++){
            const ingredient=recipe[`strIngredient${i}`]
            const measure=recipe[`strMeasure${i}`]
            if(ingredient && ingredient.trim()!==""){
                ingredients.push(`${ingredient}-${measure}`)
            }
        }
        return ingredients;
    }

    if(!recipe) return <p>Recipe Loading.......Please Wait</p>
  return (
    <div className="Recipe-detail">
        <h2>{recipe.strMeal}</h2>
        <img src={recipe.strMealThumb} alt={recipe.strMeal}  />

        <p><strong>Category:</strong>{recipe.strCategory}</p>
        <p><strong>Area:</strong> {recipe.strArea}</p>

        <h3>Ingredients:</h3>
        <ul>
            {parseIngredients().map((item,index)=>(                <li key={index}>{item}</li>
            ))}
        </ul>
        <h3>How to Prepare the Dish:</h3>
        <p>{recipe.strInstructions}</p>
        <Link to="/">
        <button>Back to Search page</button>
        </Link>
    </div>
  )
}

export default RecipeDetailsPage
