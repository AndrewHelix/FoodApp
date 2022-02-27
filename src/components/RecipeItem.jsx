function RecipeItem(props) {
  
  const {
    strArea,
    strMealThumb,
    strMeal,
    strCategory,
    strInstructions,
    strYoutube,
  } = props.meal;

  return (
    <div className="recipe-item">
      <img src={strMealThumb} alt={strMeal} />
      <h3>{strMeal}</h3>
      <h5>Category: {strCategory}</h5>
      {strArea ? <h5>Area: {strArea}</h5> : null}
      <p>{strInstructions}</p>
      <table className="centered">
        <thead>
          <tr>
            <th>Ingredient</th>
            <th>Measure</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(props.meal).map(key => {
            if(key.includes('Ingredient') && props.meal[key]) {
              return (
                <tr key={key}>
                  <td>{props.meal[key]}</td>
                  <td>{
                    props.meal[`strMeasure${key.slice(13)}`]
                  }</td>
                </tr>
              )
            }
            return null
          })}
        </tbody>
      </table>
      {strYoutube ? (
        <iframe src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}`} title={strMeal} allowFullScreen />
      ) : null}
    </div>
  );
}
export { RecipeItem };