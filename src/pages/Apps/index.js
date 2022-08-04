import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const Apps = () => {
  return(
    <>
      <h1>Este es el Apps</h1>
      <ul>
        <li><div className="action"><Link to="/apps/to-do-list">To Do</Link></div></li>
        <li><div className="action"><Link to="/apps/poke-api">Poke Api</Link></div></li>
        <li><div className="action"><Link to="/apps/gif-api">Gif Api</Link></div></li>
        <li><div className="action"><Link to="/apps/game-dados">Game Dados</Link></div></li>
        <li><div className="action"><Link to="/apps/game-number">Game number</Link></div></li>
        <li><div className="action"><Link to="/apps/app-bank">App Bank</Link></div></li>
      </ul>
      <Outlet/>
    </>
  );
};

export default Apps;
