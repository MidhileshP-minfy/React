import React from "react";
import { Link } from "react-router-dom";

function Recipe_List({recipes}){
    return (
        <div className="Recipe-List">

            {
                recipes.map((recipe)=>(
                    <Link to={`/recipe/${recipe.idMeal}`} className="Recipe-card" key={recipe.idMeal}>
                        <img src={recipe.strMealThumb} alt={recipe.strMeal}/>
                        <h3>{recipe.strMeal}</h3>
                    </Link>
                ))
            }
        </div>
    )
}

export default Recipe_List