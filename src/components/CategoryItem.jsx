import { Link } from "react-router-dom";

function CategoryItem(props) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={props.strCategoryThumb} alt={props.strCategory}/>
      </div>
      <div className="card-content">
        <p className="card-title">{props.strCategory}</p>
        <p>{props.strCategoryDescription.slice(0, 75)}...</p>
      </div>
      <div className="card-action">
        <Link to={`/category/${props.strCategory}`} className="btn">Watch category</Link>
      </div>
    </div>
  );
}

export { CategoryItem };
