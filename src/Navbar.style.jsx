import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-start; /* Osat vasemmalle vierekkäin*/
  align-items: flex-start; /* Tasaa osat ylälaitaan */
  background-color: #333;
  color: white;
  font-size: 1.25rem;
`;

export const NavLinks = styled.div.withConfig({
  shouldForwardProp: (prop) => !['menu'].includes(prop),
  })`
  /* Huom. props = css-tyyli */
  display: ${(props) => (props.menu ? props.menu : "none")};
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  @media (min-width: 700px) {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
`;

export const Logo = styled.img`
  height: 70px;
`;

export const MenuButton = styled.button`
  margin-left: auto; /* Hampurislaismenu oikeaan laitaan */
  color: white;
  background-color: transparent;
  border: none;
  font-size: 1.75rem;
  @media (min-width: 700px) {
    display: none;
  }      
`;

export default Nav;