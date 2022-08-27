import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  background-color: black;
  color: white;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1.5rem 0;
`;

const StyledCopyR = styled.div`
  font-size: 11pt;
  margin-left: 2rem;
`;

const StyledMediaLinks = styled.div`
  display: flex;
  gap: 2rem;
  font-size: 11pt;
  margin-right: 2rem;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledCopyR>
        <span>oscar.blum@gmail.com</span>
      </StyledCopyR>
      <StyledMediaLinks>
        <div className="media-link">Instagram</div>
        <div className="media-link">Twitter</div>
        <div className="media-link">LinkedIn</div>
        <div className="media-link">GitHub</div>
      </StyledMediaLinks>
    </StyledFooter>
  );
};

export default Footer;
