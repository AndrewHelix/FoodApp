import { Link } from "react-router-dom";

function MealItem(props) {
  const { strMeal, idMeal, strMealThumb } = props;

  return (
    <div className="card">
      <div className="card-image">
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div className="card-content">
        <p className="card-title">{strMeal}</p>
      </div>
      <div className="card-action">
        <Link to={`/meal/${idMeal}`} className="btn">
          Recipe
        </Link>
      </div>
    </div>
  );
}

export { MealItem };
