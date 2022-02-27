import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Preloader } from "./Preloader"
import { RecipeItem } from "./RecipeItem"
import { getMealById } from "../api"

function Recipe() {
  const {idMeal} = useParams()
  const [meal, setMeal] = useState({})

  const navigate = useNavigate()

  useEffect(() => {
    getMealById(idMeal).then(data => setMeal(data.meals[0]))
  }, [idMeal])
  
  return <>
    <button className="btn" onClick={() => {navigate(-1)}}>go back</button>
    {
      !meal.idMeal ? <Preloader /> : <RecipeItem meal={meal}/>
    }
  </>

}

export {Recipe}