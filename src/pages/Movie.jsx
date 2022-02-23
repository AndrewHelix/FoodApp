import { useParams, useMatch, useLocation } from "react-router-dom"

function Movie() {
  const {video} = useParams()
  const value = useMatch('/movie/:video')
  const value2 = useLocation() 
  console.log(value, value2)
  return <h1>Movie {video}</h1>
}

export {Movie}