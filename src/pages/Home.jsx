import { useState, useEffect } from "react"
import { getAllCategories } from "../api"
import {Preloader} from '../components/Preloader'
import { CategoryList } from "../components/CategoryList"

function Home() {
  const [catalog, setCategories] = useState([])

  useEffect(() => {
    getAllCategories().then(data => {
      setCategories(data.categories)
    })
  }, [])

  
  return <>
    {!catalog.length ? <Preloader /> : (<CategoryList catalog={catalog} />)}
  </>
}

export {Home}