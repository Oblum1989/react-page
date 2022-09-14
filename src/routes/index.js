import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Apps from "../pages/Apps";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ToDo from "../pages/Apps/ToDo";
import Pokemons from "../pages/Apps/Pokemons";
import Gifs from "../pages/Apps/Gifs";
import Dices from "../pages/Apps/Dices";
import Numbers from "../pages/Apps/Numbers";
import Bankist from "../pages/Apps/Bankist";
import Ecommerce from "../pages/Apps/Ecommerce";
import Authentication from "../pages/Authentication";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/apps" element={<Apps />} >
        <Route
          path="to-do-list"
          element={<ToDo />}
        />
        <Route
          path="poke-api"
          element={<Pokemons />}
        />
        <Route
          path="gif-api"
          element={<Gifs />}
        />
        <Route
          path="game-dados"
          element={<Dices />}
        />
        <Route
          path="game-number"
          element={<Numbers />}
        />
        <Route
          path="app-bank"
          element={<Bankist />}
        />
        <Route
          path="ecommerce"
          element={<Ecommerce />}
        />
      </Route>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/auth" element={<Authentication />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
}
