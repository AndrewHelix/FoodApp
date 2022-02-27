import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Contacts } from "./pages/Contacts";
import { NotFound } from "./pages/NotFound";
import { Category } from "./pages/Category";
import { Recipe } from "./components/Recipe";

function App() {
  return (
    <>
      <BrowserRouter basename='/FoodApp'>
        <Header />
        <main className="container content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/category/:name" element={<Category />}/>
            <Route path="/meal/:idMeal" element={<Recipe />}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
