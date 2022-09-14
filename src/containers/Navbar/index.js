import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: black;
  color: white;
  padding: 2.5rem 1rem;
`;

const StyledLogo = styled.div`
  font-size: 20pt;
  font-weight: bold;
`;

const StyledActions = styled.div`
  display: flex;
  gap: 2rem;
  font-size: 11pt;
  a{
    text-decoration: none;
    color: white;
    &:hover{
      color: purple;
    }
  }
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledLogo>
        <span>OBlumC</span>
      </StyledLogo>
      <StyledActions>
        <div className="action"><NavLink to="/">INICIO</NavLink></div>
        <div className="action"><NavLink to="/blog">BLOG</NavLink></div>
        <div className="action"><NavLink to="/apps">APPS</NavLink></div>
        <div className="action"><NavLink to="/about">ACERCA DE</NavLink></div>
        <div className="action"><NavLink to="/contact">CONTACTO</NavLink></div>
        <div className="action"><NavLink to="/auth">SIGN IN</NavLink></div>
      </StyledActions>
    </StyledNavbar>
  );
};

export default Navbar;
