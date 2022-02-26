import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Contacts } from "./pages/Contacts";
import { NotFound } from "./pages/NotFound";
import { MealList } from "./components/MealList";
import { Category } from "./pages/Category";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="container content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/category/:name" element={<Category />}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
