import { useState } from "react";
import "./styles.css";

const NavBar = ({ login }) => {
  const [userName, setUserName] = useState("");
  const [userPin, setUserPin] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    login(userName, userPin)
    setUserName("")
    setUserPin("")
  }
  return (
    <nav>
      <p className="welcome">Log in to get started</p>
      <img src="logo.png" alt="Logo" className="logo" />
      <form className="login" onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="user"
          className="login__input login__input--user"
          value={userName}
          onChange={(e)=>setUserName(e.target.value)}
        />

        <input
          type="text"
          placeholder="PIN"
          maxlength="4"
          className="login__input login__input--pin"
          value={userPin}
          onChange={(e)=>setUserPin(e.target.value)}
        />
        <button className="login__btn">&rarr;</button>
      </form>
    </nav>
  );
};

export default NavBar;
