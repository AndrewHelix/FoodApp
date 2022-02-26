import { MealItem } from "./MealItem"

function MealList({meals}) {
  return <div className="list items">
    {meals.map(el => (
      <MealItem key={el.idMeal} {...el}/>
    ))}
  </div>
}

export {
  MealList
}