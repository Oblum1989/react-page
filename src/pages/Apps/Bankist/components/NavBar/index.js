import "./styles.css";

const NavBar = () => {
  return (
    <nav>
      <p className="welcome">Log in to get started</p>
      <img src="logo.png" alt="Logo" className="logo" />
      <form className="login">
        <input
          type="text"
          placeholder="user"
          className="login__input login__input--user"
        />

        <input
          type="text"
          placeholder="PIN"
          maxlength="4"
          className="login__input login__input--pin"
        />
        <button className="login__btn">&rarr;</button>
      </form>
    </nav>
  );
};

export default NavBar;
