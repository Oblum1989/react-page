import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Apps from "../pages/Apps";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ToDo from "../pages/Apps/ToDo";
import Pokemons from "../pages/Apps/Pokemos";
import Gifs from "../pages/Apps/Gifs";

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
          path="gmae-dados"
          element={<Gifs />}
        />
        <Route
          path="game-number"
          element={<Gifs />}
        />
        <Route
          path="app-bank"
          element={<Gifs />}
        />
      </Route>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
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
